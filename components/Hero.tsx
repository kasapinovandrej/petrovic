import Image from "next/image";
import QuickRequest from "./QuickRequest";
import { ArrowUpRight } from "./Icons";
import { bento, btnAccent, card, displayFont, eyebrow, pill } from "./ui";

export default function Hero() {
  return (
    <section className="wrap pt-[clamp(56px,8vw,112px)]">
      <div className="inline-flex min-h-9 items-center gap-2.5 rounded-full bg-white pr-4 pl-3 text-[13px] font-semibold motion-safe:animate-rise">
        <span className="size-2 rounded-full bg-ink shadow-[0_0_0_4px_var(--color-accent)] motion-safe:animate-pulse" />
        Geodetski biro · Kraljevo · izlazak na teren u roku od 24 h
      </div>

      <h1 className={`${displayFont} mt-7 max-w-[1100px] text-[clamp(52px,9vw,148px)] leading-[.9] tracking-[-.045em] motion-safe:animate-rise-2`}>
        Geodezija
        <br />
        bez čekanja.
      </h1>

      <div className="mt-9 flex flex-wrap items-center justify-between gap-7 motion-safe:animate-rise-3">
        <p className="max-w-[520px] text-[19px] text-muted">
          Tačna merenja licenciranih inženjera, elaborat za 48 sati i prilično povoljne cene, uvek unapred. Sve na jednom mestu.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#kontakt" className={`${btnAccent} min-h-14 px-8 text-base`}>
            Zatraži ponudu za 24 h
          </a>
        </div>
      </div>

      <div className={`${bento} mt-14 motion-safe:animate-rise-3`}>
        {/* Status elaborata */}
        <div className={`${card} flex min-h-[560px] flex-col bg-ink p-6 text-white sm:col-span-2 sm:p-9 lg:row-span-2`}>
          <Image src="/img/topo-hero.svg" alt="" fill priority unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,.1)_0%,rgba(11,15,20,.85)_70%)]" />
          <div className="relative flex items-center justify-between">
            <span className={`${pill} ${eyebrow} bg-accent text-ink`}>BRZINA</span>
          </div>
          <div className="relative mt-auto">
            <div className="font-display text-[clamp(110px,13vw,190px)] leading-[.82] font-semibold tracking-[-.06em]">
              48<span className="ml-2 text-[.4em] tracking-[-.02em] text-accent">h</span>
            </div>
            <p className="mt-3.5 max-w-[340px] text-lg text-[#d5dbe0]">od poziva do potpisanog elaborata u vašim rukama.</p>
            <ol className="mt-7 flex items-center gap-2.5 rounded-[22px] border border-white/15 bg-white/8 px-5 py-4.5 text-[13px] font-semibold backdrop-blur-lg">
              {["Upit", "Teren", "Obrada", "Predaja"].map((step, i, all) => (
                <li key={step} className="contents">
                  <span className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${i === all.length - 1 ? "bg-accent" : "bg-white"}`} />
                    <span className={i === all.length - 1 ? "text-accent" : ""}>{step}</span>
                  </span>
                  {i < all.length - 1 && <span className="h-px min-w-2 flex-1 bg-white/25" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Preciznost */}
        <div className={`${card} flex min-h-68 flex-col justify-between bg-white p-6 sm:p-8`}>
          <div className="flex items-center justify-between">
            <span className={`${eyebrow} text-muted-2`}>STRUČNOST</span>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <circle cx="22" cy="22" r="17" stroke="#0B0F14" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="9" stroke="#0B0F14" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="3" fill="#0B0F14" />
              <path d="M22 0v8M22 36v8M0 22h8M36 22h8" stroke="#0B0F14" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="font-display text-[76px] leading-[.95] font-semibold tracking-[-.05em]">±2 cm</div>
            <p className="mt-2.5 text-[15px] text-muted">GNSS RTK preciznost, potpis licenciranog inženjera.</p>
          </div>
        </div>

        {/* Cena */}
        <a href="#cene" className={`${card} flex min-h-68 flex-col justify-between bg-accent p-6 sm:p-8`}>
          <div className="flex items-center justify-between">
            <span className={eyebrow}>CENA</span>
            <span className="flex size-11 items-center justify-center rounded-full bg-ink">
              <ArrowUpRight />
            </span>
          </div>
          <div>
            <div className="font-display text-[clamp(44px,4vw,56px)] leading-[.95] font-semibold tracking-[-.05em]">Povoljno.</div>
            <p className="mt-2.5 text-[15px] font-medium">Prilično povoljne cene, uvek unapred i bez skrivenih troškova.</p>
          </div>
        </a>

        {/* Brzi upit */}
        <QuickRequest />
      </div>
    </section>
  );
}
