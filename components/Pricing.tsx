import { pricingIntro, valueProps } from "@/lib/data";
import { bento, btnInk, card, eyebrow, h2, section, sectionHead, sectionNote } from "./ui";

export default function Pricing() {
  return (
    <section id="cene" className={section}>
      <div className={sectionHead}>
        <h2 className={h2}>{pricingIntro.title}</h2>
        <p className={sectionNote}>{pricingIntro.note}</p>
      </div>

      <div className={`${bento} mt-12`}>
        <div className={`${card} flex min-h-[460px] flex-col bg-accent p-6 sm:col-span-2 sm:p-10 lg:row-span-2`}>
          <span className={eyebrow}>NAŠE CENE</span>
          <div className="mt-auto">
            <div className="font-display text-[clamp(44px,5.4vw,84px)] leading-[.95] font-semibold tracking-[-.045em]">
              {pricingIntro.big}
            </div>
            <p className="mt-5 max-w-[420px] text-[17px] font-medium">{pricingIntro.bigText}</p>
            <a href="#kontakt" className={`${btnInk} mt-8 min-h-14 px-8 text-base`}>
              Zatraži ponudu
            </a>
          </div>
        </div>

        {valueProps.map((v, i) => (
          <div key={v.title} className={`${card} flex min-h-56 flex-col gap-4 bg-white p-6 sm:p-8`}>
            <span className="font-mono text-[13px] text-muted-2">0{i + 1}</span>
            <h3 className="font-display text-[26px] leading-[1.05] font-semibold tracking-[-.03em]">{v.title}</h3>
            <p className="text-[15px] text-muted">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
