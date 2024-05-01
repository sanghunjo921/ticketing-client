"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ticketService } from "./ticket.service";

export default function TicketDetail(prop: any) {
  const [ticket, setTicket] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setuserId] = useState("");

  useEffect(() => {
    ticketService.getTicket(prop.id).then((ticket) => {
      setTicket(ticket);
      setLoading(false);
    });

    let storedUrl = localStorage.getItem("userData");
    if (storedUrl) {
      storedUrl = JSON.parse(storedUrl);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex justify-between items-center px-5 mt-5 gap-5 *:min-h-80">
          <div className="flex flex-col border-2 rounded-md w-2/3 ">
            <span className="mt-5 ml-5">{ticket.title}</span>
            <span>
              {ticket.imagePath ? (
                <img
                  src={`http://localhost/${ticket.imagePath}`}
                  className="w-3/4 h-1/2"
                  alt="Ticket"
                />
              ) : (
                <img
                  src="http://localhost/images/default.png"
                  className="flex w-full h-1/2 items-center"
                  style={{ height: "220px" }}
                />
              )}
            </span>
            <span className="mb-5 ml-5">{ticket.description}</span>
          </div>
          <div className="flex flex-col items-center border-2 rounded-md w-1/3">
            <div className="mt-5"> KRW {ticket.price}</div>
            <div className="flex-grow"></div>
            <Link
              href={`/tickets/`}
              className="border-2 rounded-md mb-5 w-1/2 flex items-center justify-center"
            >
              <button>예매하기</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
