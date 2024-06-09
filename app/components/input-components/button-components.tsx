"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function ButtonComponent({ text }: ButtonProps) {
  const { pending: loading } = useFormStatus();
  return (
    <button
      disabled={loading}
      className="general-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-200"
    >
      {loading ? "Loading ..." : text}
    </button>
  );
}
