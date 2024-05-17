import axios from "axios";
import { cookies } from "next/headers";

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
      const cookie = res.headers["set-cookie"] as string[]; // access, refresh, userid
      const userId = res.data.userId;

      return { cookie: cookie };
    }
    return { cookie: [] };
  }

  async signin(email: string, password: string) {
    const response = await axios
      .post(`http://localhost/signin/`, {
        email: email,
        password: password,
      })
      .then((user) => {
        return user.data;
      })
      .catch((error) => {
        console.log("Error retrieving user", error);
      });
    if (response) {
      localStorage.setItem(userDataKey, JSON.stringify(response));
    }

    return response;
  }

  checkSignIn(setuserData: any) {
    const userData = JSON.parse(
      localStorage.getItem(userDataKey) ||
        JSON.stringify({ refreshToken: "", accessToekn: "" })
    );

    setuserData(userData);
  }

  cookieParsing(cookie: stirng): string[] {
    return st;
  }
}

export const userService = new UserService();
