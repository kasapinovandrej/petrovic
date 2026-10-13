import { marqueeItems } from "@/lib/data";

function Group() {
  return (
    <span className="flex gap-14 font-display text-[28px] font-semibold tracking-[-.02em] whitespace-nowrap">
      {marqueeItems.map((m) => (
        <span key={m} className="contents">
          <span>{m}</span>
          <span className="text-[#8a95a0]">●</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="mt-18 overflow-hidden border-y border-line bg-surface-2 py-5.5">
      <div className="flex w-max gap-14 motion-safe:animate-marquee" aria-hidden="true">
        <Group />
        <Group />
      </div>
    </div>
  );
}
