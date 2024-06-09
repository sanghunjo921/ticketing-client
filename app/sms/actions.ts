"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

export interface ActionState {
  token: boolean;
}

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Invalid phone number"
  );
const tokenSchema = z.coerce.number().min(10000).max(99999);

export const smsAction = async (
  prevReturnData: ActionState,
  submittedData: FormData
) => {
  if (!prevReturnData.token) {
    const phone = submittedData.get("phone");
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      console.log({ result: result.error.flatten() });
      return {
        token: false,
        error: result.error.flatten(),
      };
    }
    //going to the next step

    return {
      token: true,
    };
  }

  // second step - send SMS
  const token = submittedData.get("token");
  const result = tokenSchema.safeParse(token);

  if (!result.success) {
    return {
      token: true,
      error: result.error.flatten(),
    };
  }

  redirect("/");
};
