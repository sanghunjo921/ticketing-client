import Link from "@/node_modules/next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/users">Users</Link>
            <Link href="/abount">Abount</Link>
            <Link href="/tickets">Tickets</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
