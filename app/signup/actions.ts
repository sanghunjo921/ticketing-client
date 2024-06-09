"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { userService } from "../components/users/user.service";
import dbClient from "@/lib/db";
import getOurSession from "@/lib/cookie";
import { redirect } from "next/navigation";

export interface SignUpActionState {
  errors: [];
}

interface SignUpFormData {
  email?: Array<string>;
  password?: Array<string>;
  confirmPassword?: Array<string>;
}

export interface SignUpStateData {
  formErrors: Array<any>;
  fieldErrors: SignUpFormData;
}

const checkReservedWord = (email: string) => !email.includes("admin");
const checkPasswordMatched = (data: {
  password: string;
  confirmPassword: string;
}) => data.password === data.confirmPassword;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,10}$/;

const formSchema = z
  .object({
    email: z
      .string()
      .email()
      .toLowerCase()
      .trim()
      .transform((email: string) => {
        if (!email.includes("@")) {
          return `${email}@test.com`;
        }
        return email;
      })
      .refine(checkReservedWord, "Reserved Word"),
    password: z
      .string()
      .min(6, "Invalid length")
      .regex(passwordRegex, "Invalid Password"),
    confirmPassword: z.string().min(6),
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await dbClient.user.findUnique({
      where: { email },
      select: { id: true },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "User already eixts",
        path: ["email"],
        fatal: true,
      });
    }
  })
  .refine(checkPasswordMatched, {
    message: "Password not matched",
    path: ["confirmPassword"],
  });

export const signupAction = async (
  prevReturnData: any,
  submittedData: FormData
): Promise<SignUpStateData> => {
  console.log({
    prevReturnData,
    submittedData,
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const email = submittedData.get("email")?.toString();
  const password = submittedData.get("password")?.toString();
  const confirmPassword = submittedData.get("confirmPassword")?.toString();

  const result = await formSchema.safeParseAsync({
    email,
    password,
    confirmPassword,
  });

  if (!result.success) {
    return result.error?.flatten() || ["Unknown error"];
  }

  //   const hashedPassword = await bcrypt.hash(result.data.password, 10);

  const cookie = await userService.signup(email, password, confirmPassword);
  const cookieSession = await getOurSession();

  //@ts-ignore
  cookieSession.id = cookie.userId;
  await cookieSession.save();

  console.log({ cookies: cookies().getAll() });

  redirect("/tickets");

  return {
    formErrors: [],
    fieldErrors: {},
  };
};
