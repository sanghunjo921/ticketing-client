"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { userService } from "../components/users/user.service";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import InputComponent from "../components/input-components/input-components";
import ButtonComponent from "../components/input-components/button-components";
import { smsAction, ActionState } from "./actions";
import { useFormState } from "react-dom";

export const initialState = {
  token: false,
  error: undefined,
};

export default function SignUp() {
  const [state, onSubmit] = useFormState(smsAction, initialState);

  return (
    <section className="flex flex-col gap-10 px-6 py-9">
      <div className="flex flex-col *:font-medium gap-2">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verification your phone number</h2>
      </div>
      <form action={onSubmit} className="gap-3 flex flex-col">
        {!state.token ? (
          <InputComponent
            key="1"
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state.error?.formErrors}
          />
        ) : (
          <InputComponent
            key="2"
            name="token"
            type="number"
            placeholder="Verification code"
            min={10000}
            max={99999}
            errors={state.error?.formErrors}
          />
        )}

        <ButtonComponent text={!state.token ? "Verify token" : "Send SMS"} />
      </form>
    </section>
  );
}
