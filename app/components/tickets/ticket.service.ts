import axios from "axios";

class TicketService {
  async getTickets() {
    const response = await axios
      .get("http://localhost/ticket")
      .then((tickets) => {
        return tickets.data;
      })
      .catch((error) => {
        console.error("Error fetching tickets", error);
      });

    return response;
  }

  async getTicket(id: any) {
    const response = await axios
      .get(`http://localhost/ticket/${id}`)
      .then((ticket) => {
        return ticket.data;
      })
      .catch((error) => {
        console.log("Error retrieving ticket", error);
      });

    console.log(response);
    return response;
  }
}

export const ticketService = new TicketService();
