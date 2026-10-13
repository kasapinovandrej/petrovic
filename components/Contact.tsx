"use client";

import { useState } from "react";
import { company } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative overflow-hidden pt-[clamp(40px,6vw,80px)] pb-[clamp(64px,8vw,112px)]">
      <div className="pointer-events-none absolute top-[30%] left-1/2 h-65 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,.7)_0%,rgba(200,245,58,.4)_18%,rgba(110,120,255,.3)_40%,transparent_68%)] blur-[28px]" />
      <div className="relative mx-auto max-w-275 px-[clamp(16px,3vw,32px)]">
        <div className="glass rounded-[40px] p-[clamp(28px,5vw,72px)] text-center">
          <h2 className="gt mx-auto max-w-205 text-[clamp(40px,6.4vw,96px)] leading-[.94] font-semibold tracking-[-.055em]">
            Pošaljite broj parcele. Ponuda za 2 sata.
          </h2>
          <form
            className="mx-auto mt-11 flex max-w-140 flex-col gap-3.5 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: povezati sa pravim backendom / e-poštom
              setSent(true);
            }}
          >
            <label htmlFor="parcela" className="text-[13px] font-medium text-muted">
              Broj parcele i katastarska opština
            </label>
            <input
              id="parcela"
              name="parcela"
              type="text"
              required
              placeholder="npr. 1234/5, KO Kraljevo [DUMMY]"
              className="box-border min-h-15 w-full rounded-full border border-white/15 bg-ink/50 px-6.5 text-base text-white placeholder:text-muted-2"
            />
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-4.5">
              <span className="rb rb-light rb-lg">
                <button type="submit" className="rb-in">
                  Zatraži ponudu
                </button>
              </span>
              <span className="rb rb-sm">
                <a className="rb-in" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                  {company.phone}
                </a>
              </span>
            </div>
            {sent && (
              <p className="text-center text-sm font-medium text-[#D5DBE8]" role="status">
                Hvala! Javljamo se u roku od 2 sata. (Demo — forma još nije povezana.)
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
