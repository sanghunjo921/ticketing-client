import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <section className="flex flex-col gp-2 mt-10 ">
        <div className="text-2xl font-bold">안녕하세요!</div>
        <div className="font-bold text-xl">Fill in the form below to join!</div>
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-5 gap-2  *:py-2 *:rounded-md">
        <input className="w-full" placeholder="Username" />
        <input className="w-full" placeholder="Email" />
        <input className="w-full" placeholder="Password" />
        <input className="w-full" placeholder="Confirm Password" />
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
          Continue with SMS
        </Link>
      </section>
    </main>
  );
}
