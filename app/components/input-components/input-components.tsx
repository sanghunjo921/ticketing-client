import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function InputComponent({
  name,
  type,
  placeholder,
  required,
  errors = [],
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        type={type}
        className="bg-white pl-3 text-black rounded-md h-10 w-full focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        placeholder={placeholder}
        required={required}
      />
      {errors.map((err, idx) => (
        <span key={idx} className="text-red-500">
          {err}
        </span>
      ))}
    </div>
  );
}
