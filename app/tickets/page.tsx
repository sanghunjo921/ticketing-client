"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Tickets from "../components/tickets/tickets";

export default function TicketsPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost/ticket")
      .then((tickets) => {
        console.log(tickets);
        setTickets(tickets.data);
      })
      .catch((error) => {
        console.error("Error fetching tickets", error);
      });
  }, []);
  return (
    <main>
      <Tickets />;
    </main>
  );
}
