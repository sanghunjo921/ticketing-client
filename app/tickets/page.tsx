"use client";

import { useEffect, useRef, useState } from "react";
import Carousel from "../components/carousel";
import { ticketService } from "../components/tickets/ticket.service";
import Tickets from "../components/tickets/tickets";
import TicketSearchBar from "../components/tickets/ticketSearchBar";
import useInViewPort from "../customHook/useInViewPort";
import { categoryTickets } from "../components/tickets/ticket.graphql.service";
import { TicketProps } from "../components/tickets/ticket";

interface CategoryTicketState {
  movies: TicketProps[];
  sports: TicketProps[];
  concerts: TicketProps[];
}

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
  const [categoryTicket, setCategoryTickets] = useState<CategoryTicketState>({
    movies: [],
    concerts: [],
    sports: [],
  });

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

  useEffect(() => {
    categoryTickets().then((res) => {
      console.log({ d: res.data.getPopularTicketsByCategories });
      const { moviesTicket, concertsTicket, sportsTicket } =
        res.data.getPopularTicketsByCategories;
      setCategoryTickets({
        movies: moviesTicket,
        sports: sportsTicket,
        concerts: concertsTicket,
      });
    });
  }, []);

  console.log({ categoryTicket });

  return (
    <main className="top-50">
      <TicketSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFilteredView={isFilteredView}
        setIsFilteredView={setIsFilteredView}
        setFilteredTickets={setFilteredTickets}
      />
      <div className="relative mt-40 overflow-hidden">
        {categoryTicket.movies.length > 0 && (
          <>
            <div className="font-bold text-2xl ">Movies</div>
            <Carousel tickets={categoryTicket.movies} title="movie" />{" "}
          </>
        )}
        {categoryTicket.concerts.length > 0 && (
          <>
            <div className="font-bold text-2xl ">Concerts</div>
            <Carousel tickets={categoryTicket.concerts} title="concert" />{" "}
          </>
        )}
        {categoryTicket.sports.length > 0 && (
          <>
            <div className="font-bold text-2xl ">Sports</div>
            <Carousel tickets={categoryTicket.sports} title="sport" />{" "}
          </>
        )}

        <div className="font-bold text-2xl ">All Tickets</div>
        <Tickets
          tickets={targetList}
          ticketListRef={ticketListRef}
          ticketPageRef={ticketPageRef}
        />
      </div>
    </main>
  );
}
