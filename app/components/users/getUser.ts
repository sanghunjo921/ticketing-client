"use server";

import getOurSession from "@/lib/cookie";
import axios from "axios";

export default async function getUser() {
  const session = await getOurSession();

  if (session.id) {
    const user = await axios
      .get(`http://localhost/user/${session.id}`)
      .then((res) => res.data);
    if (user) {
      return user;
    }
  }
  //   notFound();
  return { email: "" };
}
