"use client";

import logOut from "@/app/components/header/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import getUser from "../users/getUser";
import { userService } from "../users/user.service";

interface UserState {
  email?: string | null;
}

export default function Header() {
  const [user, setUser] = useState<UserState>({});
  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  console.log({ user });

  return (
    <header className="fixed w-full z-50 bg-black top-0">
      <nav className="ml-10 mt-5  flex gap-10 ">
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        {user.email ? (
          <form action={logOut}>
            <button>Log out</button>
          </form>
        ) : (
          <>
            <Link href="/login">SignIn</Link>
            <Link href="/signup">SignUp</Link>
          </>
        )}
      </nav>
    </header>
  );
}
