import { company } from "@/lib/data";
import { LogoMark } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="wrap pt-14 pb-9">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-xl font-bold tracking-[-.03em] text-white">
              {company.name}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-[15px] text-soft">
            <span>{company.address}</span>
            <span>
              {company.phone} · {company.email}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-[15px] text-soft">
            {company.hours.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/8 pt-5 text-[13px] text-muted-2">
          <span>© 2026 {company.legalName}</span>
          <span>
            Developed by{" "}
            <Link
              href="https://andrejkasapinov.com"
              target="_blank"
              className="text-soft hover:text-white"
            >
              Andrej Kasapinov
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
