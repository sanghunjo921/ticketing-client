"use client";

import { useEffect, useState } from "react";
import { ticketService } from "./ticket.service";

export default function TicketDetail(prop: any) {
  const [ticket, setTicket] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ticketService.getTicket(prop.id).then((ticket) => {
      setTicket(ticket);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex justify-between items-center px-5 mt-5 gap-5 *:min-h-60">
          <div className="flex flex-col border-2 rounded-md w-2/3 ">
            <span className="">{ticket.title}</span>
            <span className="mt-3">{ticket.description}</span>
          </div>
          <div className="flex flex-col items-center border-2 rounded-md w-1/3">
            <div> KRW {ticket.price}</div>
            <button className="border-2 rounded-md mt-3 w-1/2">
              예매하기{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
