import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const row = (
    <span className="flex gap-14 text-[26px] font-medium tracking-[-.03em] whitespace-nowrap text-[#C9D0DC]">
      {marqueeItems.map((item) => (
        <span key={item} className="contents">
          <span>{item}</span>
          <span className="text-accent">●</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="overflow-hidden border-y border-white/8 bg-white/3 py-5.5">
      <div className="flex w-max animate-marquee gap-14 motion-reduce:animate-none" aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
