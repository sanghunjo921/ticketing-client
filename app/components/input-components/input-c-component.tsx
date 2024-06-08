import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

interface InputProps {
  name: string;
  onChange: any;
  errors?: string[];
  type?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  value?: number;
}

export default function InputCComponent({
  name,
  min,
  type,
  max,
  placeholder,
  value,
  required,
  onChange,
  errors = [],
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        onChange={onChange}
        name={name}
        type={type}
        min={min}
        max={max}
        required={required}
        placeholder={placeholder}
        value={value}
        className="bg-white pl-3 text-black rounded-md h-10 w-full focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
      />
      {errors.map((err, idx) => (
        <span key={idx} className="text-red-500">
          {err}
        </span>
      ))}
    </div>
  );
}
