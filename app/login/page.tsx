"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { userService } from "../components/users/user.service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      const userData = userService.signin(email, password);
      setIsReady(false);
      setEmail("");
      setPassword("");
    }
  }, [isReady]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      setIsReady(true);
    }
  };

  console.log(email, password, isReady);

  return (
    <main className="flex flex-col min-h-screen p-4">
      <section className="flex flex-col gp-2 mt-10 ">
        <div className="text-2xl font-bold">안녕하세요!</div>
        <div className="font-bold text-xl">Fill in the form below to join!</div>
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-5 gap-5  *:py-2 *:rounded-md">
        <form
          className="w-full flex flex-col gap-2 *:py-2 *:rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form
          className="w-full flex flex-col gap-2 *:py-2 *:rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Link
          href="/signup"
          className="w-full hover:bg-orange-600 text-center bg-orange-400 text-white text-lg font-medium"
        >
          계정 만들기
        </Link>
      </section>
      <section className="w-full flex flex-col items-center gap-5 mt-5">
        <div className="bg-gray-400 h-1 w-full rounded-full"></div>
        <Link
          href="/"
          className="w-full hover:bg-orange-600 text-center bg-orange-400 text-white text-lg font-medium py-2 rounded-md"
        >
          Sign up with SMS
        </Link>
      </section>
    </main>
  );
}
