"use client";

import { useEffect, useState } from "react";
import Ticket from "./ticket";
import { ticketService } from "./ticket.service";

export default function Tickets() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    ticketService.getTickets().then((data) => setTickets(data));
  }, []);
  console.log(tickets);
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </div>
  );
}
