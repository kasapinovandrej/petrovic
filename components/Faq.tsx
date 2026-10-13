import Image from "next/image";
import { areas, faq } from "@/lib/data";
import { card, cardStatic, eyebrow, h2, pill, section } from "./ui";

export default function Faq() {
  return (
    <section id="pitanja" className={section}>
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className={`${cardStatic} rounded-[40px] bg-white p-[clamp(24px,4vw,56px)]`}>
          <h2 className={`${h2} text-[clamp(36px,4.6vw,64px)]`}>Česta pitanja.</h2>
          <div className="mt-8 divide-y divide-line">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex size-9 flex-none items-center justify-center rounded-full bg-surface text-xl leading-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[620px] text-[15px] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className={`${card} flex min-h-[420px] flex-col bg-ink p-6 text-white sm:p-10`}>
          <Image src="/img/topo-hero.svg" alt="" fill unoptimized className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,.2)_0%,rgba(11,15,20,.88)_75%)]" />
          <span className={`${pill} ${eyebrow} relative self-start bg-accent text-ink`}>GDE RADIMO</span>
          <div className="relative mt-auto">
            <h3 className="font-display text-[clamp(32px,3.6vw,48px)] leading-none font-semibold tracking-[-.04em]">
              Kraljevo i okolina.
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className={`${pill} bg-white/15 text-white`}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
