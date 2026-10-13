import { company, navLinks } from "@/lib/data";
import { ArrowRight, LogoMark } from "./Icons";
import { btnInk } from "./ui";

export default function Nav() {
  return (
    <div className="px-[clamp(16px,3vw,32px)] pt-5">
      <header className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 rounded-full bg-white/80 py-2.5 pr-2.5 pl-5.5 shadow-[0_1px_0_rgba(11,15,20,.06)] backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3" aria-label={`${company.name} — početna`}>
          <LogoMark />
          <span className="font-display text-xl font-bold tracking-[-.02em]">{company.name}</span>
        </a>
        <nav className="hidden gap-9 lg:flex" aria-label="Glavna navigacija">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className={`${btnInk} min-h-12 px-6 text-sm font-semibold`}>
          Zatraži ponudu
          <ArrowRight color="var(--color-accent)" />
        </a>
      </header>
    </div>
  );
}
