"use client";

import useInViewPort from "@/app/customHook/useInViewPort";
import { useEffect, useRef, useState } from "react";
import Ticket from "./ticket";
import { ticketService } from "./ticket.service";

export default function Tickets() {
  const ticketListRef = useRef<any>(null);
  const ticketPageRef = useRef<any>(null);
  const inViewPort = useInViewPort(ticketListRef, ticketPageRef, {
    threshold: 0.5,
  });

  const [tickets, setTickets] = useState<any[]>([]);
  const [page, setPages] = useState(1);

  useEffect(() => {
    console.log("start", page, inViewPort);
    if (inViewPort) {
      ticketService.getTickets(page).then((data) => {
        console.log({ data });
        setTickets([...tickets, ...data]);
        setPages(page + 1);
      });
    }
  }, [inViewPort]);

  console.log({ page });

  return (
    <div>
      <div className="font-bold text-2xl ml-10 mt-10">Concert</div>
      <div ref={ticketListRef} className="grid grid-cols-2 gap-4 ">
        {tickets.map((ticket) => (
          <Ticket ticket={ticket} key={ticket.id} />
        ))}
        <button ref={ticketPageRef}>test</button>
      </div>
    </div>
  );
}
