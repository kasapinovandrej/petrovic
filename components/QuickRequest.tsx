"use client";

import { useState } from "react";
import { quickAssurances, quickServices } from "@/lib/data";
import { Check } from "./Icons";

// Staklen prozor „Nova ponuda“ (hero): forma levo, brzina desno
export default function QuickRequest() {
  const [svc, setSvc] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="glass rounded-[32px]">
      <div className="flex items-center gap-3.5 border-b border-white/10 px-6 py-4">
        <span className="flex gap-1.75" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2.75 rounded-full bg-white/20" />
          ))}
        </span>
        <span className="flex-1 text-center font-mono text-xs tracking-[.08em] text-muted">Nova ponuda · odgovor za 2 h</span>
        <span className="hidden w-12.5 sm:block" />
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <form
          className="flex flex-col gap-5 p-[clamp(24px,3vw,40px)]"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: povezati sa pravim backendom / e-poštom
            setSent(true);
          }}
        >
          <div>
            <div className="mb-3 text-[13px] font-medium text-muted">Vrsta usluge</div>
            <div className="flex flex-wrap gap-2">
              {quickServices.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={i === svc}
                  onClick={() => setSvc(i)}
                  className={`min-h-11 cursor-pointer rounded-full border px-4.5 text-sm font-medium transition-colors ${
                    i === svc
                      ? "border-[#F4F6FA] bg-[#F4F6FA] text-[#07090D]"
                      : "border-white/15 bg-white/7 text-text hover:bg-white/12"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="hero-parcela" className="text-[13px] font-medium text-muted">
              Broj parcele i katastarska opština
            </label>
            <input
              id="hero-parcela"
              type="text"
              required
              placeholder="npr. 1234/5, KO Kraljevo [DUMMY]"
              className="box-border min-h-14 w-full rounded-full border border-white/15 bg-ink/45 px-6 text-base text-white placeholder:text-muted-2"
            />
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-[#D5DBE8]">
            {quickAssurances.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <Check />
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-4.5 pt-1.5">
            <span className="rb rb-light">
              <button type="submit" className="rb-in">
                Zatraži ponudu
              </button>
            </span>
            {sent && (
              <span className="text-sm font-medium text-[#D5DBE8]" role="status">
                Hvala! Javljamo se u roku od 2 sata. (Demo)
              </span>
            )}
          </div>
        </form>

        <div className="flex flex-col justify-between gap-7 border-t border-white/10 p-[clamp(24px,3vw,40px)] lg:border-t-0 lg:border-l">
          <div>
            <span className="font-mono text-[11px] tracking-[.14em] text-muted">BRZINA</span>
            <div className="gt mt-2.5 text-[clamp(96px,11vw,168px)] leading-[.84] font-semibold tracking-[-.07em]">
              48<span className="ml-2 text-[.36em] tracking-[-.02em] [-webkit-text-fill-color:var(--color-accent)]">h</span>
            </div>
            <p className="mt-3.5 max-w-80 text-[17px] font-light text-soft">od poziva do potpisanog elaborata u vašim rukama.</p>
          </div>
          <div>
            <div className="relative h-0.5 overflow-hidden rounded-sm bg-white/12">
              <div className="absolute top-0 left-0 h-full w-[30%] animate-sweep bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)]" />
            </div>
            <ol className="mt-3.5 flex justify-between text-[13px] font-semibold">
              {["Upit", "Teren", "Obrada", "Predaja"].map((step, i, all) => {
                const last = i === all.length - 1;
                return (
                  <li key={step} className={`flex items-center gap-2 ${last ? "text-accent" : ""}`}>
                    <span className={`size-2 rounded-full ${last ? "bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" : "bg-white"}`} />
                    {step}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
