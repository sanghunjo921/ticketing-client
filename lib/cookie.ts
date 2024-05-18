import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

interface TicketSession extends IronSession<object> {
  id?: number;
}

export default function getOurSession(): Promise<TicketSession> {
  return getIronSession(cookies(), {
    cookieName: "TicketCookie",
    password: process.env.COOKIE_SECRET || "1234",
  });
}

export const cookieParsing = (cookies: string[]) => {
  //   const cookieArray = cookie.split(";");

  return cookies.reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    return {
      ...acc,
      [key.trim()]: value.slice(0, -6).trim(),
    };
  }, {});
};
