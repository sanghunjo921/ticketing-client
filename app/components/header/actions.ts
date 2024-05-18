"use server";

import getOurSession from "@/lib/cookie";
import { redirect } from "next/navigation";

export default async function logOut() {
  const session = await getOurSession();

  session.destroy();

  redirect("/");
}
