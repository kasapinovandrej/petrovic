"use client";

import { useEffect, useState } from "react";
import { company, navLinks } from "@/lib/data";
import { LogoMark } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Esc zatvara meni; širenje ekrana iznad breakpointa ga takođe zatvara
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 z-50 px-[clamp(16px,3vw,32px)] pt-5">
      <div className="relative mx-auto max-w-[1320px]">
        <header className="glass flex items-center justify-between gap-3 rounded-full py-2.5 pr-2.5 pl-5.5">
          <a href="#" className="flex items-center gap-3" aria-label={`${company.name} — početna`}>
            <LogoMark />
            <span className="text-xl font-bold tracking-[-.03em] text-white">{company.name}</span>
          </a>

          <nav className="hidden gap-[clamp(18px,2.4vw,36px)] lg:flex" aria-label="Glavna navigacija">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-soft transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <span className="rb rb-sm">
                <a className="rb-in" href="#kontakt">
                  Zatraži ponudu
                </a>
              </span>
            </div>
            <button
              type="button"
              className="burger lg:hidden"
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              aria-expanded={open}
              aria-controls="mobilni-meni"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="bl b1" />
              <span className="bl b2" />
              <span className="bl b3" />
            </button>
          </div>
        </header>

        <div id="mobilni-meni" className="mwrap lg:hidden" data-open={open}>
          <div className="mglass">
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} className="mi" onClick={() => setOpen(false)}>
                {l.label}
                <span>{String(i + 1).padStart(2, "0")}</span>
              </a>
            ))}
            <div className="mi mcta">
              <span className="rb rb-light rb-block">
                <a className="rb-in" href="#kontakt" onClick={() => setOpen(false)}>
                  Zatraži ponudu
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
