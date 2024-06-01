import axios from "axios";

class TicketService {
  async getTickets(page: number = 1) {
    const response = await axios
      .get(`http://localhost/ticket?page=${page}`)
      .then((tickets) => {
        return tickets.data;
      })
      .catch((error) => {
        console.error("Error fetching tickets", error);
      });

    return response;
  }

  async getFilteredTickets(page: number = 1, searchTerm: string) {
    const response = await axios
      .get(
        `http://localhost/ticket/search/filtered?page=${page}&searchTerm=${searchTerm}`
      )
      .then((tickets) => {
        console.log({ tickets });
        return tickets.data;
      })
      .catch((error) => {
        console.error("Error fetching filtered data", error);
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
