import Image from "next/image";
import { company, stats, team } from "@/lib/data";
import { cardStatic, displayFont, eyebrow, pill } from "./ui";

const glass = "rounded-3xl border border-white/15 bg-white/8 backdrop-blur-lg";

export default function Expertise() {
  return (
    <section id="strucnost" className="wrap pt-[clamp(56px,7vw,96px)]">
      <div className={`${cardStatic} rounded-[40px] bg-ink p-[clamp(28px,5vw,72px)] text-white`}>
        <Image src="/img/topo-alt.svg" alt="" fill unoptimized className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,20,.95)_0%,rgba(11,15,20,.55)_60%,rgba(11,15,20,.2)_100%)]" />

        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-14">
          <div>
            <span className={`${pill} ${eyebrow} bg-accent text-ink`}>STRUČNOST</span>
            <h2 className={`${displayFont} mt-7 text-[clamp(40px,6vw,84px)]`}>Ljudi koji potpisuju svoj rad.</h2>
            <p className="mt-6 max-w-[460px] text-[17px] text-[#d5dbe0]">
              Više od petnaest godina na terenima Raške oblasti — od kućnih placeva do infrastrukture. Svaki elaborat prolazi
              internu kontrolu pre predaje.
            </p>
            <div className="mt-10 flex flex-col gap-5">
              {team.map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="flex size-13 flex-none items-center justify-center rounded-full border border-white/25 bg-white/12 font-display text-lg font-semibold">
                    {t.initials}
                  </span>
                  <div>
                    <b className="block font-bold">{t.name}</b>
                    <span className="text-sm text-[#b7c0c8]">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className={`${glass} p-6`}>
                <b className="block font-display text-[44px] leading-none font-semibold tracking-[-.04em] text-accent">{s.value}</b>
                <span className="mt-2.5 block text-sm text-[#d5dbe0]">{s.label}</span>
              </div>
            ))}
            <div className={`${glass} col-span-2 px-6 py-5 text-sm text-[#d5dbe0]`}>
              {company.license} · osiguranje od profesionalne odgovornosti
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
