import axios from "axios";

const userDataKey = "userData";

class UserService {
  async signup(email: string, password: string, passwordConfirm: string) {
    const response = await axios
      .post(`http://localhost/signup/`, {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
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
}

export const userService = new UserService();
