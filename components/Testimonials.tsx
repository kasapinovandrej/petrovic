import { testimonials } from "@/lib/data";
import { card } from "./ui";

export default function Testimonials() {
  return (
    <section className="wrap pt-4" aria-label="Utisci klijenata">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
        {testimonials.map((t, i) => (
          <figure key={i} className={`${card} bg-white p-8 sm:p-10`}>
            <div className="font-display text-[72px] leading-[.6] font-bold text-accent [-webkit-text-stroke:2px_var(--color-ink)]" aria-hidden="true">
              „
            </div>
            <blockquote className="mt-5 font-display text-[clamp(24px,2.4vw,30px)] leading-[1.2] font-medium tracking-[-.02em]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7 text-sm text-muted-2">
              <strong className="text-ink">{t.name}</strong> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
