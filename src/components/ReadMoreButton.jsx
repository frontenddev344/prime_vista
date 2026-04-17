import { ArrowUpRight } from "lucide-react";

export default function ReadMoreButton({ text = "READ MORE" }) {
  return (
    <button className="group flex items-center gap-2 tracking-wide text-lg">
      {text}
      <span className="relative w-5 h-5 overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:opacity-0">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </span>

        <span className="absolute inset-0 flex items-center justify-center translate-y-2 -translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </span>
      </span>
    </button>
  );
}