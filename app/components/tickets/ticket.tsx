import Link from "next/link";

export default function Ticket(prop: any) {
  return (
    <div className="bg-white shadow-lg p-5 border-2 m-10 rounded-lg">
      <div className="">
        <div className="h-300">
          {prop.ticket.imagePath ? (
            <img
              src={`http://localhost/${prop.ticket.imagePath}`}
              className="w-full"
              alt="Ticket"
            />
          ) : (
            <img
              src="https://mega-traffic-tickets.s3.ap-northeast-2.amazonaws.com/default.png"
              className="w-full"
              style={{ height: "300px" }}
            />
          )}
        </div>
      </div>
      <div className="my-2 flex items-center">
        <span className="font-bold  uppercase text-gray-500 py-1">
          {prop.ticket.title}
        </span>
      </div>
      <div className="flex flex-row gap-2 text-xs py-3">
        <div className="truncate-8">{prop.ticket.description} </div>
        <div className="ml-auto">
          {prop.ticket.remaining_number} seats remaining
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-2xl mt-5 font-bold">KRW {prop.ticket.price}</span>
        <Link href={`/tickets/${prop.ticket.id}`}>
          <button className="ml-auto mt-auto border border-blue-500 rounded-2xl text-blue-500 py-2.5 px-1.5">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
