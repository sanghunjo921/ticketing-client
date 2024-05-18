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

interface SignInFormData {
  email?: Array<string>;
  password?: Array<string>;
}

export interface SignInStateData {
  formErrors: Array<any>;
  fieldErrors: SignInFormData;
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,10}$/;
const emailExist = async (email: string) => {
  const user = await dbClient.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

const formSchema = z.object({
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
    }),
  // .refine(emailExist, "User not found")
  password: z
    .string()
    .min(6, "Invalid length")
    .regex(passwordRegex, "Invalid Password"),
});

export const signinAction = async (
  prevReturnData: any,
  submittedData: FormData
): Promise<SignInStateData> => {
  console.log({
    prevReturnData,
    submittedData,
  });

  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  const email = submittedData.get("email")?.toString() ?? "";
  const password = submittedData.get("password")?.toString() ?? "";

  const result = await formSchema.safeParseAsync({
    email,
    password,
  });

  console.log({ error: result.error?.flatten() });

  if (!result.success) {
    return result.error?.flatten() || ["Unknown error"];
  }

  const cookie = await userService.signin(email, password);
  console.log({ cookie11: cookie });
  const cookieSession = await getOurSession();

  //@ts-ignore
  cookieSession.id = cookie.userId;
  await cookieSession.save();

  console.log({ cookies: cookies().getAll() });

  redirect("/tickets");
  //   }

  return {
    formErrors: [],
    fieldErrors: {},
  };
};
