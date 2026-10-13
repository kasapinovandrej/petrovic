import type { IconName } from "@/lib/data";

const paths: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  parcel: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 3v18M3 12h9" />
    </>
  ),
  stake: <path d="M6 21V4l12 4-12 4" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />,
  drone: (
    <>
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <path d="M7 7l2 2M17 7l-2 2M7 17l2-2M17 17l-2-2" />
    </>
  ),
  file: <path d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5zM9 14l2 2 4-4" />,
};

export function ServiceIcon({ name, color = "#FFFFFF" }: { name: IconName; color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ color = "#fff" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M6 4h6v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check() {
  return (
    <span className="flex size-5.5 flex-none items-center justify-center rounded-full bg-accent">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6.5l2.5 2.5L10 3.5" stroke="#0B0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function LogoMark() {
  return (
    <span className="flex size-9 items-center justify-center rounded-xl border border-white/20 bg-white/10">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="var(--color-accent)" strokeWidth="1.6" />
        <path d="M10 0v5M10 15v5M0 10h5M15 10h5" stroke="var(--color-accent)" strokeWidth="1.6" />
      </svg>
    </span>
  );
}
