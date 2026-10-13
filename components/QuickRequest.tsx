"use client";

import { useState } from "react";
import { quickAssurances, quickServices } from "@/lib/data";
import { Check } from "./Icons";
import { btnInk, cardStatic, eyebrow } from "./ui";

export default function QuickRequest() {
  const [svc, setSvc] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <form
      className={`${cardStatic} flex flex-col gap-4.5 bg-white p-6 sm:col-span-2 sm:p-8`}
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: povezati sa pravim backendom / e-poštom
        setSent(true);
      }}
    >
      <div className="flex items-center justify-between">
        <span className={`${eyebrow} text-muted-2`}>BRZI UPIT</span>
        <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold">ODGOVOR ZA 2 H</span>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Vrsta usluge">
        {quickServices.map((c, i) => (
          <button
            key={c}
            type="button"
            aria-pressed={i === svc}
            onClick={() => setSvc(i)}
            className="min-h-11 cursor-pointer rounded-full bg-surface px-4.5 text-sm font-semibold text-ink transition-colors aria-pressed:bg-ink aria-pressed:text-white"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="hero-parcela" className="text-sm text-muted">
          Broj parcele i katastarska opština
        </label>
        <input
          id="hero-parcela"
          name="parcela"
          type="text"
          required
          placeholder="npr. 1234/5, KO Kraljevo [DUMMY]"
          className="min-h-14 w-full rounded-full border border-line bg-surface px-6 text-base text-ink placeholder:text-muted-2"
        />
      </div>

      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {quickAssurances.map((a) => (
          <li key={a} className="flex items-center gap-2">
            <Check />
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button type="submit" className={`${btnInk} min-h-14 sm:flex-none`}>
          Zatraži ponudu
        </button>
        {sent && (
          <p className="text-sm font-semibold" role="status">
            Hvala! Javljamo se u roku od 2 sata. (Demo — forma još nije povezana.)
          </p>
        )}
      </div>
    </form>
  );
}
