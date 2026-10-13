import { company, stats, team } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="strucnost" className="relative overflow-hidden pb-[clamp(64px,8vw,112px)]">
      <div className="wrap relative">
        <div className="relative overflow-hidden rounded-[40px] border border-white/12 bg-[#070A10] p-[clamp(28px,5vw,72px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/topo-a.svg" alt="" className="absolute inset-0 size-full object-cover opacity-75" />
          <div className="orb -top-15 -left-20 size-95 bg-[rgba(109,92,255,.40)]" />
          <div className="orb -right-15 -bottom-20 size-105 bg-[rgba(34,211,238,.28)]" />
          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-14">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-[11px] tracking-[.14em]">
                STRUČNOST
              </span>
              <h2 className="gt mt-7 text-[clamp(40px,6vw,88px)] leading-[.94] font-semibold tracking-[-.055em]">
                Ljudi koji potpisuju svoj rad.
              </h2>
              <p className="mt-6 max-w-115 text-[17px] font-light text-[#C9D0DC]">
                Više od petnaest godina na terenima Raške oblasti — od kućnih placeva do infrastrukture. Svaki elaborat prolazi internu
                kontrolu pre predaje.
              </p>
              <ul className="mt-10 flex flex-col gap-5">
                {team.map((m, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="flex size-13 flex-none items-center justify-center rounded-full border border-white/25 bg-white/12 font-semibold">
                      {m.initials}
                    </span>
                    <div>
                      <div className="font-semibold text-white">{m.name}</div>
                      <div className="text-sm text-muted">{m.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.value} className="glass p-6">
                  <div className="text-[44px] leading-none font-semibold tracking-[-.05em] text-accent">{s.value}</div>
                  <div className="mt-2.5 text-sm text-[#D5DBE8]">{s.label}</div>
                </div>
              ))}
              <div className="glass col-span-2 px-6 py-5 text-sm text-[#D5DBE8]">
                {company.license} · osiguranje od profesionalne odgovornosti
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
