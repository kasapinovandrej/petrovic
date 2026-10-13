"use client";

import { useState } from "react";
import { company } from "@/lib/data";
import { btn, cardStatic, displayFont } from "./ui";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="wrap pt-4">
      <div className={`${cardStatic} rounded-[40px] bg-accent p-[clamp(28px,5vw,72px)]`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-end gap-12">
          <h2 className={`${displayFont} text-[clamp(44px,7vw,108px)] leading-[.9] tracking-[-.05em]`}>
            Pošaljite broj parcele. Ponuda za 2 sata.
          </h2>

          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: povezati sa pravim backendom / e-poštom
              setSent(true);
            }}
          >
            <label htmlFor="parcela" className="text-[13px] font-bold tracking-[.06em]">
              BROJ PARCELE I KATASTARSKA OPŠTINA
            </label>
            <input
              id="parcela"
              name="parcela"
              type="text"
              required
              placeholder="npr. 1234/5, KO Kraljevo [DUMMY]"
              className="min-h-15 w-full rounded-full border-0 bg-white px-6 text-base text-ink"
            />
            <div className="flex flex-wrap gap-3">
              <button type="submit" className={`${btn} min-h-15 flex-[1_1_200px] bg-ink text-base text-white`}>
                Zatraži ponudu
              </button>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className={`${btn} min-h-15 flex-[1_1_200px] border-[1.5px] border-ink text-base text-ink`}
              >
                {company.phone}
              </a>
            </div>
            {sent && (
              <p className="font-semibold" role="status">
                Hvala! Javljamo se u roku od 2 sata. (Demo — forma još nije povezana.)
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
