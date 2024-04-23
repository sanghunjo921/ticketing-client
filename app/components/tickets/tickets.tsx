"use client";

import useInViewPort from "@/app/customHook/useInViewPort";
import { useEffect, useRef, useState } from "react";
import Ticket from "./ticket";
import { ticketService } from "./ticket.service";

export default function Tickets() {
  const ticketListRef = useRef<any>(null);
  const ticketPageRef = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilteredView, setIsFilteredView] = useState(false);
  const inViewPort = useInViewPort(ticketListRef, ticketPageRef, {
    threshold: 0.5,
  });

  const [tickets, setTickets] = useState<any[]>([]);
  const [page, setPages] = useState(1);

  useEffect(() => {
    console.log("start", page, inViewPort);
    if (inViewPort && !isFilteredView) {
      console.log("normal");
      ticketService.getTickets(page).then((data) => {
        console.log({ data });
        setTickets([...tickets, ...data]);
        setPages(page + 1);
      });
    }
  }, [inViewPort]);

  useEffect(() => {
    if (inViewPort && isFilteredView) {
      console.log("filter");
      ticketService.getFilteredTickets(page, searchTerm).then((data) => {
        setTickets([data]);
        setPages(page + 1);
      });
    }
  }, [inViewPort, isFilteredView]);

  console.log({ searchTerm, isFilteredView });

  return (
    <div>
      <div className="flex flex-col items-center justify-between ml-10 mt-10">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (searchTerm.trim() !== "") {
                setIsFilteredView(!isFilteredView);
              }
            }
          }}
        />
        <div className="font-bold text-2xl mt-10">Concert</div>
      </div>
      <div ref={ticketListRef} className="grid grid-cols-2 gap-4 ">
        {tickets.map((ticket) => (
          <Ticket ticket={ticket} key={ticket.id} />
        ))}
        <button ref={ticketPageRef}>test</button>
      </div>
    </div>
  );
}
