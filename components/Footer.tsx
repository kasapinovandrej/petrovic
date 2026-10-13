import { company } from "@/lib/data";
import { LogoMark } from "./Icons";

export default function Footer() {
  return (
    <footer className="wrap pt-14 pb-9">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-xl font-bold tracking-[-.02em]">{company.name}</span>
        </div>
        <div className="flex flex-col gap-1.5 text-[15px]">
          <span>{company.address}</span>
          <span>
            {company.phone} · {company.email}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 text-[15px]">
          {company.hours.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[13px] text-muted-2">
        <span>© 2026 {company.legalName}</span>
        <span>Svi podaci o firmi su DUMMY_DATA.</span>
      </div>
    </footer>
  );
}
