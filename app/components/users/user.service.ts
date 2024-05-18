import { cookieParsing } from "@/lib/cookie";
import axios from "axios";

const userDataKey = "userData";

class UserService {
  async signup(email?: string, password?: string, passwordConfirm?: string) {
    const res = await axios
      .post(`http://localhost/signup/`, {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then((res) => res)
      .catch((error) => {
        console.log("Error retrieving user", error);
      });

    if (res) {
      const cookie = cookieParsing(res.headers["set-cookie"] as string[]); // access, refresh, userid

      return cookie;
    }
    return {};
  }

  async signin(email: string, password: string) {
    const res = await axios
      .post(`http://localhost/signin/`, {
        email: email,
        password: password,
      })
      .then((res) => res)
      .catch((error) => {
        console.log("Error retrieving user", error);
      });
    if (res) {
      const cookie = cookieParsing(res.headers["set-cookie"] as string[]);
      return cookie;
    }

    return {};
  }

  checkSignIn(setuserData: any) {
    const userData = JSON.parse(
      localStorage.getItem(userDataKey) ||
        JSON.stringify({ refreshToken: "", accessToekn: "" })
    );

    setuserData(userData);
  }
}

export const userService = new UserService();
