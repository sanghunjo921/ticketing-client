import axios from "axios";

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

    console.log(response);
    return response;
  }
}

export const userService = new UserService();
