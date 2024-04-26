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

  async signin() {
    const response = await axios
      .get(`http://localhost/signin/`)
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

export const ticketService = new UserService();
