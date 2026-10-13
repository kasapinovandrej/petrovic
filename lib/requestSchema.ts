import { z } from "zod";
import { quickServices } from "@/lib/data";

// Validacija forme za upit (hero + kontakt); sva polja su obavezna

const ime = z
  .string()
  .trim()
  .min(1, "Unesite ime i prezime")
  .min(3, "Ime i prezime mora imati bar 3 karaktera")
  .max(80, "Ime i prezime može imati najviše 80 karaktera")
  .regex(/^[\p{L}\s'.-]+$/u, "Ime i prezime može sadržati samo slova")
  .refine((v) => v.split(/\s+/).length >= 2, "Unesite i ime i prezime");

const email = z
  .string()
  .trim()
  .min(1, "Unesite email adresu")
  .max(120, "Email adresa je predugačka")
  .pipe(z.email("Unesite ispravnu email adresu"));

// Srpski brojevi: 06x… (mobilni), 0xx… (fiksni) ili +381…; razmaci, crtice, / i () su dozvoljeni
const telefon = z
  .string()
  .trim()
  .min(1, "Unesite broj telefona")
  .refine(
    (v) => /^(\+381|0)[1-9]\d{6,9}$/.test(v.replace(/[\s\-/()]/g, "")),
    "Unesite ispravan broj telefona (npr. 064 123 4567)",
  );

const parcela = z
  .string()
  .trim()
  .min(1, "Unesite broj parcele i katastarsku opštinu")
  .max(120, "Unos je predugačak")
  .refine((v) => /\d+(\/\d+)?/.test(v), "Unesite broj parcele (npr. 1234/5)")
  .refine(
    (v) => (v.match(/\p{L}/gu) ?? []).length >= 3,
    "Unesite i katastarsku opštinu (npr. KO Kraljevo)",
  );

const usluga = z.enum(quickServices, { error: "Izaberite vrstu usluge" });

export const requestSchema = z.object({ usluga, ime, email, telefon, parcela });

export type RequestValues = z.infer<typeof requestSchema>;
