import axios from "axios";

const userDataKey = "userData";

class UserService {
  async signup() {
    const response = await axios
      .get(`http://localhost/signup/`)
      .then((user) => {
        return user.data;
      })
      .catch((error) => {
        console.log("Error retrieving user", error);
      });

    console.log(response);
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
