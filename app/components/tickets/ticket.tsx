"use client";
import getOurSession from "@/lib/cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "../users/session";

export interface TicketProps {
  id: number;
  title: string;
  imagePath?: string;
  description: string;
  price: number;
  remaining_number: number;
  userId: string | number;
}

export default function Ticket({
  imagePath,
  id,
  title,
  description,
  price,
  remaining_number,
  userId,
}: TicketProps) {
  const imageSrc = imagePath
    ? `http://localhost/${imagePath}`
    : "https://mega-traffic-tickets.s3.ap-northeast-2.amazonaws.com/default.png";

  useEffect(() => {
    getSession().then((cookie) => setUserId(cookie.id ?? ""));
  });

  return (
    <div className="bg-white shadow-lg p-5 border-2 m-10 rounded-lg">
      <div className="">
        <div className="h-300">
          <Image
            src={imageSrc}
            width={500}
            height={300}
            className="w-full"
            alt="ticket image"
          />
        </div>
      </div>
      <div className="my-2 flex items-center">
        <span className="font-bold  uppercase text-gray-500 py-1">{title}</span>
      </div>
      <div className="flex flex-row gap-2 text-xs py-3">
        <div className="truncate-8">{description} </div>
        <div className="ml-auto">{remaining_number} seats remaining</div>
      </div>
      <div className="flex justify-between">
        <span className="text-2xl mt-5 font-bold">KRW {price}</span>
        {userId && (
          <Link href={`/tickets/${id}`}>
            <button className="ml-auto mt-auto border border-blue-500 rounded-2xl text-blue-500 py-2.5 px-1.5">
              Book Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
