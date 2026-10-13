import Image from "next/image";
import { services, type Service } from "@/lib/data";
import { ServiceIcon } from "./Icons";
import { bento, card, displayFont, h2, pill, section, sectionHead, sectionNote } from "./ui";

const surface: Record<Service["variant"], string> = {
  white: "bg-white",
  dark: "bg-ink text-white",
  photo: "bg-ink text-white",
  accent: "bg-accent",
};

function ServiceCard({ s }: { s: Service }) {
  const dark = s.variant === "dark" || s.variant === "photo";
  const descColor = dark ? "text-[#c3cbd2]" : s.variant === "accent" ? "font-medium text-ink" : "text-muted";
  const rokClass = dark ? "bg-accent text-ink font-bold" : s.variant === "accent" ? "bg-ink text-white" : "bg-ink text-white";

  return (
    <article className={`${card} ${surface[s.variant]} flex min-h-75 flex-col gap-5 p-6 sm:p-8 ${s.wide ? "sm:col-span-2" : ""}`}>
      {s.variant === "photo" && (
        <>
          <Image src="/img/topo-alt.svg" alt="" fill unoptimized className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,20,.92)_0%,rgba(11,15,20,.2)_100%)]" />
        </>
      )}
      <span className={`relative flex size-13 flex-none items-center justify-center rounded-full ${s.variant === "accent" ? "bg-ink" : "bg-accent"}`}>
        <ServiceIcon name={s.icon} color={s.variant === "accent" ? "#FFFFFF" : "#0B0F14"} />
      </span>
      <h3 className={`${displayFont} relative leading-none tracking-[-.03em] ${s.wide ? "text-[34px]" : "text-[30px]"}`}>{s.title}</h3>
      <p className={`relative max-w-[440px] text-[15px] ${descColor}`}>{s.desc}</p>
      <div className="relative mt-auto flex flex-wrap gap-2">
        <span className={`${pill} ${rokClass}`}>Rok: {s.rok}</span>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="usluge" className={section}>
      <div className={sectionHead}>
        <h2 className={h2}>Sve što parcela traži.</h2>
        <p className={sectionNote}>Orijentacioni rokovi su navedeni uz svaku uslugu. Cenu dobijate u ponudi, pre prvog merenja.</p>
      </div>
      <div className={`${bento} mt-12`}>
        {services.map((s) => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}
