"use server";

import { cookies } from "next/headers";
import { z } from "zod";
import { userService } from "../components/users/user.service";
import validator from "validator";

export interface ActionState {
  token: boolean;
}

const phoneSchema = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ko-KR"));
const tokenSchema = z.number().min(1000).max(999999);

export const smsAction = async (
  prevReturnData: ActionState,
  submittedData: FormData
) => {
  return { token: true };
};
