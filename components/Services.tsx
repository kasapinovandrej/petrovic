import { services } from "@/lib/data";
import { ServiceIcon } from "./Icons";

// Boja sjaja u uglu svake kartice
const glow: Record<string, string> = {
  snimanje: "radial-gradient(110% 90% at 0% 0%,rgba(109,92,255,.38),transparent 55%)",
  parcelacija: "radial-gradient(110% 90% at 100% 0%,rgba(34,211,238,.30),transparent 55%)",
  iskolcenje: "radial-gradient(110% 90% at 0% 100%,rgba(200,245,58,.26),transparent 55%)",
  etaziranje: "radial-gradient(110% 90% at 100% 100%,rgba(255,77,157,.28),transparent 55%)",
  dron: "radial-gradient(110% 100% at 100% 0%,rgba(61,139,255,.40),transparent 55%)",
  legalizacija: "radial-gradient(110% 100% at 0% 0%,rgba(255,154,61,.34),transparent 55%)",
};

export default function Services() {
  return (
    <section id="usluge" className="bg-[linear-gradient(180deg,#F3F4F7_0%,#EAECF2_100%)] py-[clamp(80px,10vw,144px)] text-card">
      <div className="wrap">
        <h2 className="max-w-250 text-[clamp(48px,8vw,124px)] leading-[.92] font-semibold tracking-[-.055em]">Sve što parcela traži.</h2>
        <p className="mt-7 max-w-130 text-[19px] text-[#4A5362]">
          Orijentacioni rokovi su uz svaku uslugu. Cenu dobijate u ponudi, pre prvog merenja.
        </p>

        <div className="mt-18 grid grid-flow-dense grid-cols-1 gap-4 p-1.5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const photo = s.variant === "photo";
            return (
              <div key={s.id} className={`gc ${s.wide ? "lg:col-span-2" : ""}`}>
                <div className="gc-in" style={{ background: `${glow[s.id]},#0A0D13` }}>
                  {photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/img/topo-b.svg"
                      alt=""
                      className="absolute inset-0 size-full rounded-[28px] object-cover opacity-45 mix-blend-screen"
                    />
                  )}
                  <span className="relative flex size-13 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3
                    className={`relative m-0 leading-none font-semibold tracking-[-.04em] ${s.wide ? "text-[34px]" : "text-[28px]"}`}
                  >
                    {s.title}
                  </h3>
                  <p className={`relative m-0 text-[15px] font-light ${photo ? "text-[#C9D0DC]" : "text-soft"} ${s.wide ? "max-w-110" : ""}`}>
                    {s.desc}
                  </p>
                  <div className="relative mt-auto">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[13px] font-medium">
                      Rok: {s.rok}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
