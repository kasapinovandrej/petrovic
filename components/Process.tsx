import { processSteps } from "@/lib/data";
import { cardStatic, h2, section } from "./ui";

export default function Process() {
  return (
    <section id="proces" className={section}>
      <div className={`${cardStatic} rounded-[40px] bg-white p-[clamp(28px,5vw,64px)]`}>
        <h2 className={h2}>Od poziva do elaborata za dva dana.</h2>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          {processSteps.map((s, i) => {
            const last = i === processSteps.length - 1;
            return (
              <div key={s.title} className={`rounded-3xl p-7 ${last ? "bg-ink text-white" : "bg-surface"}`}>
                <div className={`font-display text-[52px] leading-none font-semibold tracking-[-.04em] ${last ? "text-accent" : ""}`}>{s.time}</div>
                <h3 className="mt-4.5 text-lg font-bold">{s.title}</h3>
                <p className={`mt-2 text-[15px] ${last ? "text-[#c3cbd2]" : "text-muted"}`}>{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
