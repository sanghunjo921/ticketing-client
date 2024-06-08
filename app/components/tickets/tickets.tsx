"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { getSession } from "../users/session";
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
  const [userId, setUserId] = useState<string | number>("");
  const gridContainer = "grid grid-cols-2 gap-4";
  const carouselContainer = "relative flex ";

  useEffect(() => {
    getSession().then((cookie) => setUserId(cookie.id ?? ""));
  });

  return (
    <>
      <div>
        <div
          ref={isCarousel ? containerRef : ticketListRef}
          className={isCarousel ? carouselContainer : gridContainer}
        >
          {tickets?.map((ticket) => (
            <Ticket {...ticket} key={ticket.id} userId={userId} />
          ))}
          <div ref={ticketPageRef}></div>
        </div>
      </div>
    </>
  );
}
