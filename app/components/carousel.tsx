"use client";

import { useEffect, useRef, useState } from "react";
import { TicketProps } from "./tickets/ticket";
import Tickets from "./tickets/tickets";

interface TicketsProps {
  title: string;
  tickets: TicketProps[];
  isCarousel?: boolean;
}

export default function Carousel({ isCarousel, tickets, title }: TicketsProps) {
  const [enableCarousel, setEnableCarousel] = useState(false);
  const carouselBoxRef = useRef<HTMLDivElement>(null);
  let xPosition = 0;
  let activeIndex = 2;
  let id: any;
  const cardMargin = 80;
  const carouselContainerSize = 640;
  const getCardWidth = () => {
    const parent = carouselBoxRef.current;
    if (!parent) {
      return 0;
    }

    return (parent.firstChild as HTMLDivElement).offsetWidth;
  };

  const updateButtonState = () => {
    setEnableCarousel(
      getCardWidth() * tickets.length + cardMargin > carouselContainerSize
    );
  };

  useEffect(() => {
    updateButtonState();
    if (enableCarousel) {
      id = setInterval(() => {
        handleClick("right", true);
      }, 5000);
    }
    return () => {
      if (id) {
        clearInterval(id);
        id = null;
      }
    };
  }, [enableCarousel]);

  const isLast = () => activeIndex === tickets.length;

  const handleClick = (direction: string, isInterval = false) => {
    console.log("handle click start");
    if (!isInterval && id) {
      clearInterval(id);
      id = null;
    }

    if (!carouselBoxRef.current) {
      return;
    }
    if (direction === "right") {
      xPosition -= getCardWidth() + cardMargin;
      activeIndex++;
    } else {
      xPosition += getCardWidth() + cardMargin;
      activeIndex--;
    }

    if (isLast()) {
      xPosition = 0;
    }
    carouselBoxRef.current.style.transform = `translateX(${xPosition}px)`;
  };
  console.log("caoursel component");
  return (
    <div className="relative overflow-hidden ">
      <Tickets
        isCarousel={true}
        tickets={tickets}
        containerRef={carouselBoxRef}
      />
      {enableCarousel && (
        <button
          className="absolute border bg-gray-500 text-white w-7 h-7 rounded-full left-4 top-1/2 -translate-y-1/2 "
          onClick={() => {
            handleClick("left");
          }}
        >
          {"<"}
        </button>
      )}
      {enableCarousel && (
        <button
          className="absolute border bg-gray-500 text-white w-7 h-7 rounded-full right-4 top-1/2 -translate-y-1/2"
          onClick={() => {
            handleClick("right");
          }}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
