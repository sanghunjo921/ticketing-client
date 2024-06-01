import { Dispatch, SetStateAction, useState } from "react";

export interface SearchtermProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  isFilteredView: boolean;
  setIsFilteredView: Dispatch<SetStateAction<boolean>>;
  setFilteredTickets: Dispatch<SetStateAction<any[]>>;
}

export default function TicketSearchBar({
  searchTerm,
  setSearchTerm,
  isFilteredView,
  setIsFilteredView,
  setFilteredTickets,
}: SearchtermProps) {
  return (
    <form
      className="flex flex-col items-center justify-between ml-10 mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
          setIsFilteredView(!isFilteredView);
        }
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 border border-gray-300 rounded-md text-black"
        value={searchTerm}
        onChange={(e) => {
          if (e.target.value.length === 1) {
            setFilteredTickets([]);
          }
          setSearchTerm(e.target.value);
        }}
      />
      <div className="font-bold text-2xl mt-10">All Tickets</div>
    </form>
  );
}
