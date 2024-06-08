"use client";
import axios from "axios";
import { useState } from "react";
import InputCComponent from "./input-components/input-c-component";
import InputComponent from "./input-components/input-components";

export function ReservationForm({ children, setReserve, userId }: any) {
  const [error, setError] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const submitHandler = () => {
    setReserve(false);
    const ticketId = window.location.href.split("/").pop();
    axios
      .post(`http://localhost/user/${userId}/reserve`, {
        ticketId,
        quantity,
      })
      .then((res) => {
        console.log({ res });
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <InputCComponent
        name="remaining_number"
        type="number"
        min={1}
        max={4}
        placeholder="Quantity number"
        required
        errors={error}
        value={quantity}
        onChange={setQuantity}
      />
      {children}
    </form>
  );
}
