"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { userService } from "../components/users/user.service";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import InputComponent from "../components/input-components/input-components";
import ButtonComponent from "../components/input-components/button-components";
import { signupAction, SignUpActionState } from "./actions";
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
          type="confirmPassword"
          placeholder="Password Confirmation"
          required
          errors={state?.fieldErrors.confirmPassword ?? []}
        />
        <ButtonComponent text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-400" />
      <div>
        <Link
          href=""
          className="general-btn flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </section>
  );

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordConfirm, setPasswordConfirm] = useState("");
  //   const [isReady, setIsReady] = useState(false);
  //   const [userData, setUserData] = useState<UserData>();

  //   useEffect(() => {
  //     if (userData?.accessToken || userData?.refreshToken) {
  //       redirect("/tickets");
  //     }
  //   }, [userData]);

  //   useEffect(() => {
  //     console.log(isReady);
  //     if (isReady) {
  //       userService.signup(email, password, passwordConfirm).then((userData) => {
  //         setUserData(userData);
  //         setEmail("");
  //         setPassword("");
  //         setPasswordConfirm("");
  //       });
  //     }
  //   }, [isReady]);

  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();

  //     console.log(email, password);
  //     if (
  //       email.trim() !== "" &&
  //       password.trim() !== "" &&
  //       password === passwordConfirm
  //     ) {
  //       setIsReady(true);
  //     }
  //   };

  //   return (
  //     <main className="flex flex-col min-h-screen p-4">
  //       <section className="flex flex-col gp-2 mt-10 ">
  //         <div className="text-2xl font-bold">안녕하세요!</div>
  //         <div className="font-bold text-xl">Fill in the form below to join!</div>
  //       </section>
  //       <section className=" mt-5 gap-2 *:w-full  *:py-2 *:rounded-md">
  //         <form
  //           className="flex flex-col gap-2 *:py-2 *:rounded-md mb-2"
  //           onSubmit={handleSubmit}
  //         >
  //           <input
  //             className=""
  //             placeholder="Email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </form>
  //         <form
  //           className="flex flex-col gap-2 *:py-2 *:rounded-md mb-2"
  //           onSubmit={handleSubmit}
  //         >
  //           <input
  //             className=""
  //             placeholder="Password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </form>
  //         <form
  //           className="flex flex-col gap-2 *:py-2 *:rounded-md mb-2"
  //           onSubmit={handleSubmit}
  //         >
  //           <input
  //             className=""
  //             placeholder="Confirm Password"
  //             value={passwordConfirm}
  //             onChange={(e) => setPasswordConfirm(e.target.value)}
  //           />
  //         </form>
  //         <Link
  //           href="/tickets"
  //           className="w-full hover:bg-orange-600 text-center bg-orange-400 text-white text-lg font-medium"
  //         >
  //           계정 만들기
  //         </Link>
  //       </section>
  //       <section className="w-full flex flex-col items-center gap-5 mt-5">
  //         <div className="bg-gray-400 h-1 w-full rounded-full"></div>
  //         <Link
  //           href="/"
  //           className="w-full hover:bg-orange-600 text-center bg-orange-400 text-white text-lg font-medium py-2 rounded-md"
  //         >
  //           Continue with SMS
  //         </Link>
  //       </section>
  //     </main>
  //   );
}
