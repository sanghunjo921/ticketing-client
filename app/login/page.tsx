// "use client";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonComponent from "../components/input-components/button-components";
import InputComponent from "../components/input-components/input-components";
import { userService } from "../components/users/user.service";

interface UserData {
  accessToken: string;
  refreshToken: string;
}

export default function LoginPage() {
  const onSubmit = async (formData: FormData) => {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log({ formData }, formData.get("email"));
  };

  return (
    <section className="flex flex-col gap-10 px-6 py-9">
      <div className="flex flex-col *:font-medium gap-2">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form</h2>
      </div>
      <form action={onSubmit} className="gap-3 flex flex-col">
        <InputComponent
          name="email"
          type="text"
          placeholder="Email"
          required
          errors={[]}
        />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <ButtonComponent text="Create Account" />
      </form>
      <Link href="/signup">
        <div className="w-full h-px bg-neutral-400" />
      </Link>
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
}

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [isReady, setIsReady] = useState(false);
// const [userData, setUserData] = useState<UserData>();

// useEffect(() => {
//   // if (!userData?.accessToken && !userData?.refreshToken) {
//   //   userService.checkSignIn(setUserData);
//   // }
//   if (userData?.accessToken || userData?.refreshToken) {
//     redirect("/tickets");
//   }
// }, [userData]);

// useEffect(() => {
//   if (isReady) {
//     userService.signin(email, password).then((userData) => {
//       setUserData(userData);
//       setEmail("");
//       setPassword("");
//     });
//   }
// }, [isReady]);

// const handleSubmit = (e: any) => {
//   e.preventDefault();

//   if (email.trim() !== "" && password.trim() !== "") {
//     setIsReady(true);
//   }
// };

// console.log(email, password, isReady);

//   return (
//     <main className="flex flex-col min-h-screen p-4">
//       <section className="flex flex-col gp-2 mt-10 ">
//         <div className="text-2xl font-bold">안녕하세요!</div>
//         <div className="font-bold text-xl">Fill in the form below to join!</div>
//       </section>
//       <section className="w-full flex flex-col justify-center items-center mt-5 gap-5  *:py-2 *:rounded-md">
//         <form
//           className="w-full flex flex-col gap-2 *:py-2 *:rounded-md"
//           onSubmit={handleSubmit}
//         >
//           <input
//             className="ring focus:ring-red-500 focus:outline-none"
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <span className="text-red-500 ">Invalid error</span>
//         </form>
//         <form
//           className="w-full flex flex-col gap-2 *:py-2 *:rounded-md"
//           onSubmit={handleSubmit}
//         >
//           <input
//             className="ring focus:ring-red-500 focus:outline-none"
//             type="text"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </form>
//         <Link
//           href="/signup"
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
//           Sign up with SMS
//         </Link>
//       </section>
//     </main>
//   );
// }
