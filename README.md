# Meridijan Geodezija — Next.js + Tailwind

Sajt geodetskog biroa iz Kraljeva (dizajn B, „bento“). Svi podaci o firmi su **DUMMY_DATA**. Klijent ne želi definisane cene, pa nigde nema iznosa — samo se naglašava da su cene prilično povoljne.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcioni build
```

Potreban je Node.js 20.9+.

## Struktura

```
app/
  layout.tsx        fontovi (Google Fonts), metadata
  page.tsx          sklapa sekcije
  globals.css       Tailwind + dizajn tokeni (@theme): boje, fontovi, animacije
components/         jedna komponenta po sekciji, stilovi su Tailwind klase
  ui.ts             zajedničke klase (card, btn, pill, naslovi, bento mreža)
  QuickRequest.tsx  brzi upit u hero delu (client, demo)
  Pricing.tsx       sekcija „Cene“ — BEZ iznosa, samo poruka da su cene povoljne
  Faq.tsx           česta pitanja + područje rada
  Contact.tsx       forma (za sada samo demo, nije povezana)
  Calculator.tsx    zastareo (samo re-export QuickRequest), može da se obriše
lib/data.ts         SVI tekstovi, cene, rokovi, tim — menjaj ovde
public/img/         topografske SVG slike (generisane, originalne)
```

## Brze izmene

- Boja akcenta: `--color-accent` u `app/globals.css` (npr. `#ff6a2b` za narandžastu).
- Tekstovi i cene: `lib/data.ts`.
- Dugmad, kartice i naslovi dele klase iz `components/ui.ts`.

## Sledeći koraci (predlog)

- zameniti DUMMY podatke pravim
- povezati formu (e-pošta / API ruta)
- prave fotografije umesto topografske grafike
- SEO, mapa, politika privatnosti, domen i deploy
