"use client";

import Link from "next/link";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import InputComponent from "../components/input-components/input-components";
import ButtonComponent from "../components/input-components/button-components";
import { signupAction } from "./actions";
import { useFormState } from "react-dom";

interface UserData {
  accessToken: string;
  refreshToken: string;
}

export default function SignupPage() {
  const [state, onSubmit] = useFormState(signupAction, null);

  return (
    <section className="flex flex-col gap-10 px-6 py-9">
      <div className="flex flex-col *:font-medium gap-2">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form</h2>
      </div>
      <form action={onSubmit} className="gap-3 flex flex-col">
        <InputComponent
          name="email"
          type="eamil"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email ?? []}
        />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password ?? []}
        />
        <InputComponent
          name="confirmPassword"
          type="password"
          placeholder="Password Confirmation"
          required
          errors={state?.fieldErrors.confirmPassword ?? []}
        />
        <ButtonComponent text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-400" />
      <div>
        <Link
          href="/sms"
          className="general-btn flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6" />
          </span>
          <span>Sign In with SMS</span>
        </Link>
      </div>
    </section>
  );
}
