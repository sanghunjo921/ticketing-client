"use client";

import { ticketService } from "@/app/components/tickets/ticket.service";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TicketDetail({ params }: { params: { id: number } }) {
  const [ticket, setTicket] = useState<any>();

  // const id = params.get("id");

  console.log({ params });

  useEffect(() => {
    ticketService.getTicket(params.id).then((ticket) => setTicket(ticket));
  });

  return (
    <div>
      {ticket ? (
        <div>
          <h1>{ticket.title}</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
