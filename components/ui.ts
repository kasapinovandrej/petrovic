// Zajedničke Tailwind klase. Sve ostalo stoji direktno u komponentama.

export const card =
  "relative overflow-hidden rounded-4xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,15,20,.35)]";
export const cardStatic = "relative overflow-hidden rounded-4xl";

export const btn =
  "inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full font-sans text-[15px] font-bold cursor-pointer transition duration-200 hover:-translate-y-0.5";
export const btnInk = `${btn} bg-ink text-white`;
export const btnAccent = `${btn} bg-accent text-ink`;
export const btnWhite = `${btn} bg-white text-ink`;
export const btnOutline = `${btn} border-[1.5px] border-ink bg-transparent text-ink`;

export const pill = "inline-flex items-center rounded-full px-3.5 py-2 text-[13px] font-semibold";

// Naslovi
export const displayFont = "font-display font-semibold tracking-[-.04em] leading-[.95]";
export const h2 = `${displayFont} text-[clamp(40px,6vw,88px)] max-w-[760px]`;
export const eyebrow = "text-xs font-bold tracking-[.08em]";

// Sekcije
export const section = "wrap pt-[clamp(72px,9vw,128px)]";
export const sectionHead = "flex flex-wrap items-end justify-between gap-6";
export const sectionNote = "max-w-[340px] text-muted";

// Bento mreža: 1 → 2 → 4 kolone
export const bento = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4";
