import { areas, faq } from "@/lib/data";

export default function Faq() {
  return (
    <section id="pitanja" className="relative overflow-hidden pb-[clamp(64px,8vw,112px)]">
      <div className="orb top-0 left-[20%] h-85 w-115 bg-[rgba(109,92,255,.22)]" />
      <div className="wrap relative">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="glass rounded-[36px] p-[clamp(24px,4vw,56px)]">
            <h2 className="gt text-[clamp(36px,4.6vw,68px)] leading-[.96] font-semibold tracking-[-.05em]">Česta pitanja.</h2>
            <div className="mt-8">
              {faq.map((f) => (
                <details key={f.q} className="faq">
                  <summary>
                    <span>{f.q}</span>
                    <span className="plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="glass flex min-h-105 flex-col overflow-hidden rounded-[36px] p-[clamp(24px,4vw,40px)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/topo-a.svg" alt="" className="absolute inset-0 size-full rounded-[36px] object-cover opacity-70" />
            <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(180deg,rgba(5,7,11,.1)_0%,rgba(5,7,11,.85)_78%)]" />
            <span className="relative self-start rounded-full border border-white/20 bg-white/12 px-3.5 py-2 font-mono text-[11px] tracking-[.14em]">
              GDE RADIMO
            </span>
            <div className="relative mt-auto">
              <h3 className="text-[clamp(32px,3.6vw,50px)] leading-none font-semibold tracking-[-.05em] text-white">Kraljevo i okolina.</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="rounded-full border border-white/15 bg-white/12 px-3.5 py-2 text-[13px] font-medium">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
