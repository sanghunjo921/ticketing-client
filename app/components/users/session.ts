"use server";

import getOurSession from "@/lib/cookie";

export const getSession = async () => {
  return getOurSession();
};
