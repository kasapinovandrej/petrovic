import RequestForm from "./RequestForm";

// Staklen prozor „Nova ponuda“ (hero): forma levo, brzina desno
export default function QuickRequest() {
  return (
    <div className="glass rounded-[32px]">
      <div className="flex items-center gap-3.5 border-b border-white/10 px-6 py-4">
        <span className="flex gap-1.75" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2.75 rounded-full bg-white/20" />
          ))}
        </span>
        <span className="flex-1 text-center font-mono text-xs tracking-[.08em] text-muted">
          Nova ponuda · odgovor za 2 h
        </span>
        <span className="hidden w-12.5 sm:block" />
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <RequestForm variant="hero" />

        <div className="flex flex-col justify-between gap-7 border-t border-white/10 p-[clamp(24px,3vw,40px)] lg:border-t-0 lg:border-l">
          <div>
            <span className="font-mono text-[11px] tracking-[.14em] text-muted">
              BRZINA
            </span>
            <div className="gt mt-2.5 text-[clamp(96px,11vw,168px)] leading-[.84] font-semibold tracking-[-.07em]">
              48
              <span className="ml-2 text-[.36em] tracking-[-.02em] [-webkit-text-fill-color:var(--color-accent)]">
                h
              </span>
            </div>
            <p className="mt-3.5 max-w-80 text-[17px] font-light text-soft">
              od poziva do potpisanog elaborata u vašim rukama.
            </p>
          </div>
          <div>
            <div className="relative h-0.5 overflow-hidden rounded-sm bg-white/12">
              <div className="absolute top-0 left-0 h-full w-[30%] animate-sweep bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)]" />
            </div>
            <ol className="mt-3.5 flex justify-between text-[13px] font-semibold">
              {["Upit", "Teren", "Obrada", "Predaja"].map((step, i, all) => {
                const last = i === all.length - 1;
                return (
                  <li
                    key={step}
                    className={`flex items-center gap-2 ${last ? "text-accent" : ""}`}
                  >
                    <span
                      className={`size-2 rounded-full ${last ? "bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" : "bg-white"}`}
                    />
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
