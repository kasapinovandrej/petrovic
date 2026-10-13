import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="proces" className="relative overflow-hidden py-[clamp(80px,10vw,144px)]">
      <div className="orb top-[20%] left-[10%] size-115 bg-[rgba(109,92,255,.28)]" />
      <div className="orb right-[5%] bottom-[5%] size-105 bg-[rgba(34,211,238,.18)]" />
      <div className="wrap relative">
        <h2 className="gt max-w-225 text-[clamp(44px,7vw,108px)] leading-[.94] font-semibold tracking-[-.055em]">
          Od poziva do elaborata za dva dana.
        </h2>
        <div className="relative mt-18 h-0.5 overflow-hidden rounded-sm bg-white/12">
          <div className="absolute top-0 left-0 h-full w-1/4 animate-sweep-slow bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)]" />
        </div>
        <ol className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          {processSteps.map((s, i) => {
            const last = i === processSteps.length - 1;
            return (
              <li key={s.title} className={`glass glass-lift px-7 py-7.5 ${last ? "glass-accent" : ""}`}>
                <div className={`text-[56px] leading-none font-semibold tracking-[-.05em] ${last ? "text-accent" : "gt"}`}>{s.time}</div>
                <h3 className="mt-5 text-[19px] font-semibold text-white">{s.title}</h3>
                <p className={`mt-2 text-[15px] font-light ${last ? "text-[#D5DBE8]" : "text-soft"}`}>{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
