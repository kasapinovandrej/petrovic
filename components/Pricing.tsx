import { pricingIntro, valueProps } from "@/lib/data";

// Sekcija „Cene“ — BEZ iznosa, samo poruka da su cene prilično povoljne
export default function Pricing() {
  return (
    <section id="cene" className="relative overflow-hidden pb-[clamp(80px,10vw,144px)]">
      <div className="orb top-[10%] right-[10%] size-120 bg-[rgba(255,77,157,.20)]" />
      <div className="orb bottom-[10%] left-0 size-105 bg-[rgba(200,245,58,.16)]" />
      <div className="wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="gt max-w-225 text-[clamp(44px,7vw,108px)] leading-[.94] font-semibold tracking-[-.055em]">
            Prilično povoljno.
            <br />
            Uvek unapred.
          </h2>
          <p className="max-w-85 font-light text-muted">{pricingIntro.note}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass glass-accent flex min-h-115 flex-col p-[clamp(28px,4vw,44px)] sm:col-span-2 lg:row-span-2">
            <span className="font-mono text-[11px] tracking-[.14em] text-[#E4F5A8]">NAŠE CENE</span>
            <div className="mt-auto">
              <div className="text-[clamp(44px,5.4vw,84px)] leading-[.95] font-semibold tracking-[-.055em] text-white">{pricingIntro.big}</div>
              <p className="mt-5 max-w-105 text-[17px] font-light text-[#D5DBE8]">{pricingIntro.bigText}</p>
              <div className="mt-8">
                <span className="rb rb-light rb-lg">
                  <a className="rb-in" href="#kontakt">
                    Zatraži ponudu
                  </a>
                </span>
              </div>
            </div>
          </div>
          {valueProps.map((v, i) => (
            <div key={v.title} className="glass glass-lift flex min-h-56 flex-col gap-4 p-7.5">
              <span className="font-mono text-[13px] text-muted-2">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[26px] leading-[1.05] font-semibold tracking-[-.04em] text-white">{v.title}</h3>
              <p className="text-[15px] font-light text-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
