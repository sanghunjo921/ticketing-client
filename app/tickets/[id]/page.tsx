"use client";

import TicketDetail from "@/app/components/tickets/ticketDetail";

export default function TicketDetailPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <main>
      <TicketDetail id={params.id} />
    </main>
  );
}
