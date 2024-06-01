"use client";

import { useRef } from "react";
import { TicketProps } from "./tickets/ticket";
import Tickets from "./tickets/tickets";

interface TicketsProps {
  tickets: TicketProps[];
  isCarousel?: boolean;
}

export default function Carousel({ isCarousel, tickets }: TicketsProps) {
  const carouselBoxRef = useRef<HTMLDivElement>(null);
  let xPosition = 0;
  const cardMargin = 80;
  const getCardWidth = () => {
    const parent = carouselBoxRef.current;
    if (!parent) {
      return 0;
    }

    return (parent.firstChild as HTMLDivElement).offsetWidth;
  };

  const handleClick = (direction: string) => {
    if (direction === "right") {
      xPosition -= getCardWidth() + cardMargin;
    } else {
      xPosition += getCardWidth() + cardMargin;
    }
    if (carouselBoxRef.current) {
      carouselBoxRef.current.style.transform = `translateX(${xPosition}px)`;
    }
  };
  return (
    <div className="relative overflow-hidden ">
      <Tickets
        isCarousel={true}
        tickets={tickets}
        containerRef={carouselBoxRef}
      />
      <button
        className="absolute border bg-gray-500 text-white w-7 h-7 rounded-full left-4 top-1/2 -translate-y-1/2 "
        onClick={() => {
          handleClick("left");
        }}
      >
        {"<"}
      </button>
      <button
        className="absolute border bg-gray-500 text-white w-7 h-7 rounded-full right-4 top-1/2 -translate-y-1/2"
        onClick={() => {
          handleClick("right");
        }}
      >
        {">"}
      </button>
    </div>
  );
}
