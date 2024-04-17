"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios.get("http://localhost/ticket").then((tickets) => {
      console.log(tickets);
      setTickets(tickets.data);
    });
  }, []);
  return tickets.map((item) => <h1>{item.description}</h1>);
}
