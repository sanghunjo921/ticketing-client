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
      className="fixed top-10 left-0 right-0 z-50 flex flex-col items-center justify-between  p-4 shadow-md"
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
    </form>
  );
}
