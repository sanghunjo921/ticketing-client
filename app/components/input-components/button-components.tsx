interface ButtonProps {
  text: string;
}

export default function ButtonComponent({ text }: ButtonProps) {
  return (
    <button className="general-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-200">
      {text}
    </button>
  );
}
