"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "../components/carousel";
import { ticketService } from "../components/tickets/ticket.service";
import Tickets from "../components/tickets/tickets";
import TicketSearchBar from "../components/tickets/ticketSearchBar";
import useInViewPort from "../customHook/useInViewPort";

export default function TicketsPage() {
  const ticketListRef = useRef<any>(null);
  const ticketPageRef = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilteredView, setIsFilteredView] = useState(false);
  const inViewPort = useInViewPort(ticketListRef, ticketPageRef, {
    threshold: 0.5,
  });

  const [tickets, setTickets] = useState<any[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<any[]>([]);
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
      ticketService.getFilteredTickets(1, searchTerm).then((data) => {
        setFilteredTickets([...data]);
      });
    }
  }, [inViewPort, isFilteredView]);

  const targetList = !isFilteredView ? tickets : filteredTickets;

  console.log({ targetList });

  return (
    <main>
      <TicketSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFilteredView={isFilteredView}
        setIsFilteredView={setIsFilteredView}
        setFilteredTickets={setFilteredTickets}
      />
      <Carousel tickets={targetList} />
      <Tickets
        tickets={targetList}
        ticketListRef={ticketListRef}
        ticketPageRef={ticketPageRef}
      />
    </main>
  );
}
