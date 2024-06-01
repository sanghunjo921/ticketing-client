"use client";

import { RefObject, useRef } from "react";
import Ticket, { TicketProps } from "./ticket";

export interface TicketsProps {
  tickets: TicketProps[];
  isCarousel?: boolean;
  ticketListRef?: any;
  ticketPageRef?: any;
  containerRef?: RefObject<HTMLDivElement>;
}

export default function Tickets({
  isCarousel,
  tickets,
  ticketListRef,
  ticketPageRef,
  containerRef,
}: TicketsProps) {
  const gridContainer = "grid grid-cols-2 gap-4";
  const carouselContainer = "relative flex ";

  return (
    <>
      <div>
        <div
          ref={isCarousel ? containerRef : ticketListRef}
          className={isCarousel ? carouselContainer : gridContainer}
        >
          {tickets?.map((ticket) => (
            <Ticket {...ticket} key={ticket.id} />
          ))}
          <div ref={ticketPageRef}></div>
        </div>
      </div>
    </>
  );
}
