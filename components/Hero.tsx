import QuickRequest from "./QuickRequest";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_70%_at_70%_0%,#0B1030_0%,#05070B_60%)]">
      {/* orbovi */}
      <div className="orb top-60 -left-30 size-105 bg-[rgba(109,92,255,.35)]" />
      <div className="orb top-130 -right-35 size-115 bg-[rgba(34,211,238,.22)]" />
      <div className="orb -bottom-20 left-[30%] h-75 w-105 bg-[rgba(200,245,58,.20)]" />
      {/* zrno */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 size-full opacity-[.09] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .9 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="wrap relative pt-[clamp(120px,16vw,196px)]">
        <div className="max-w-[760px]">
          <div className="inline-flex min-h-8.5 items-center gap-2.5 rounded-full border border-white/15 bg-white/7 pr-4 pl-3 text-[13px] font-medium text-[#D5DBE8] backdrop-blur-sm motion-safe:animate-rise">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" />
            Geodetski biro · Kraljevo · izlazak na teren u roku od 24 h
          </div>
          <h1 className="gt mt-7 text-[clamp(52px,8.2vw,128px)] leading-[.94] font-semibold tracking-[-.055em] motion-safe:animate-rise-2">
            Geodezija
            <br />
            bez čekanja.
          </h1>
          <p className="mt-7 max-w-[520px] text-[19px] font-light text-soft motion-safe:animate-rise-3">
            Tačna merenja licenciranih inženjera, elaborat za 48 sati i prilično povoljne cene, uvek unapred. Sve na jednom mestu.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5.5 motion-safe:animate-rise-3">
            <span className="rb rb-light rb-lg">
              <a className="rb-in" href="#kontakt">
                Zatraži ponudu za 24 h
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#07090D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </span>
            <a href="#usluge" className="border-b border-white/30 pb-0.5 text-[15px] font-medium text-[#D5DBE8]">
              Pogledaj usluge
            </a>
          </div>
        </div>

        <div className="mt-[clamp(56px,7vw,96px)] pb-[clamp(64px,8vw,112px)] motion-safe:animate-rise-3">
          <QuickRequest />

          {/* mini kartice ispod prozora — ne preklapaju se sa formom */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="glass glass-lift flex items-center justify-between gap-5 rounded-3xl px-6.5 py-5.5">
              <div>
                <div className="font-mono text-[11px] tracking-[.14em] text-muted">STRUČNOST</div>
                <div className="mt-2 text-[44px] leading-none font-semibold tracking-[-.05em] text-white">±2 cm</div>
              </div>
              <p className="max-w-50 text-sm text-soft">GNSS RTK preciznost, potpis licenciranog inženjera.</p>
            </div>
            <div className="glass glass-lift glass-accent flex items-center justify-between gap-5 rounded-3xl px-6.5 py-5.5">
              <div>
                <div className="font-mono text-[11px] tracking-[.14em] text-[#E4F5A8]">CENA</div>
                <div className="mt-2 text-[40px] leading-none font-semibold tracking-[-.05em] text-white">Povoljno.</div>
              </div>
              <p className="max-w-50 text-sm text-[#E4F5A8]">Prilično povoljne cene, uvek unapred i bez doplata.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
