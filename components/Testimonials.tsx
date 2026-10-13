import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative pb-[clamp(64px,8vw,112px)]">
      <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
        {testimonials.map((t, i) => (
          <figure key={i} className="glass glass-lift m-0 p-[clamp(28px,4vw,44px)]">
            <div className="text-[72px] leading-[.6] font-bold text-accent" aria-hidden="true">
              „
            </div>
            <blockquote className="mt-5 text-[clamp(22px,2.3vw,28px)] leading-tight tracking-[-.03em] text-[#F4F6FA]">{t.quote}</blockquote>
            <figcaption className="mt-7 text-sm text-muted">
              <strong className="font-semibold text-white">{t.name}</strong> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
