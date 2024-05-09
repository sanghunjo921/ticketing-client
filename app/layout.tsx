import Link from "@/node_modules/next/link";
import "./global.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black dark:bg-neutral-800  text-white max-w-screen-sm mx-auto`}
      >
        <header>
          <nav className="ml-10 mt-5 flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/login">SignIn</Link>
            <Link href="/signup">SignUp</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
