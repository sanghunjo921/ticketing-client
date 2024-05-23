import { TicketProps } from "./tickets/ticket";
import Tickets from "./tickets/tickets";

interface TicketsProps {
  tickets: TicketProps[];
}

export default function Carousel() {
  return <Tickets />;
}
