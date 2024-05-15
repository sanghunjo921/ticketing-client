"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { getIronSession } from "iron-session";
import { userService } from "../components/users/user.service";

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
  console.log({ submittedData }, submittedData.get("email"));

  const email = submittedData.get("email")?.toString();
  const password = submittedData.get("password")?.toString();
  const confirmPassword = submittedData.get("confirmPassword")?.toString();

  const result = formSchema.safeParse({
    email,
    password,
    confirmPassword,
  });

  console.log(result.error);

  if (!result.success) {
    return result.error?.flatten() || ["Unknown error"];
  }

  const { cookie, userId } = await userService.signup(
    email,
    password,
    confirmPassword
  );
  const cookieSession = await getIronSession(cookies(), {
    cookieName: "TicketCookie",
    password:
      process.env.COOKIE_SECRET ||
      "1234asgadgfasdgsafasgadsagasgdasgsagasdgasdgasdgfasdgadsgasgasdgsdagasdgasgasgasdagasgadsg",
  });

  console.log({ userId });
  //@ts-ignore
  cookieSession.id = cookie[0];
  await cookieSession.save();
  console.log({ cookieSession, cookies: cookies().getAll() });

  return {
    formErrors: [],
    fieldErrors: {},
  };
};
