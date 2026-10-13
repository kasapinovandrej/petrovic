"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { company, quickAssurances, quickServices } from "@/lib/data";
import { requestSchema, type RequestValues } from "@/lib/requestSchema";
import { Check } from "./Icons";

type Variant = "hero" | "contact";

const fields = [
  {
    name: "ime",
    label: "Ime i prezime",
    type: "text",
    autoComplete: "name",
    placeholder: "npr. Petar Petrović",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "npr. petar@primer.rs",
  },
  {
    name: "telefon",
    label: "Broj telefona",
    type: "tel",
    autoComplete: "tel",
    placeholder: "npr. 064 123 4567",
  },
  {
    name: "parcela",
    label: "Broj parcele i katastarska opština",
    type: "text",
    autoComplete: "off",
    placeholder: "npr. 1234/5, KO Kraljevo",
  },
] as const;

const styles = {
  hero: {
    form: "flex flex-col gap-5 p-[clamp(24px,3vw,40px)]",
    input: "min-h-14 bg-ink/45 px-6",
    idPrefix: "hero-",
  },
  contact: {
    form: "mx-auto mt-11 flex max-w-140 flex-col gap-3.5 text-left",
    input: "min-h-15 bg-ink/50 px-6.5",
    idPrefix: "",
  },
} satisfies Record<Variant, { form: string; input: string; idPrefix: string }>;

const errorText = "px-6 text-[13px] font-medium text-[#FF8F8F]";

// Forma za upit: hero ima listu garancija, kontakt ima dugme za poziv
export default function RequestForm({ variant }: { variant: Variant }) {
  const hero = variant === "hero";
  const s = styles[variant];

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<RequestValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: { ime: "", email: "", telefon: "", parcela: "" },
  });

  const onSubmit = (data: RequestValues) => {
    // TODO: povezati sa pravim backendom / e-poštom
    console.log("Upit:", data);
    reset(undefined, { keepIsSubmitSuccessful: true });
  };

  const status = isSubmitSuccessful && (
    <p
      className={`text-sm font-medium text-[#D5DBE8] ${hero ? "" : "text-center"}`}
      role="status"
    >
      Hvala! Javljamo se u roku od 2 sata. (Demo — forma još nije povezana.)
    </p>
  );

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <div
          id={`${s.idPrefix}usluga-label`}
          className="mb-3 text-[13px] font-medium text-muted"
        >
          Vrsta usluge
        </div>
        <Controller
          name="usluga"
          control={control}
          render={({ field }) => (
            <div
              role="group"
              aria-labelledby={`${s.idPrefix}usluga-label`}
              aria-describedby={
                errors.usluga ? `${s.idPrefix}usluga-error` : undefined
              }
              className="flex flex-wrap gap-2"
            >
              {quickServices.map((label) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={field.value === label}
                  onClick={() => field.onChange(label)}
                  onBlur={field.onBlur}
                  className={`min-h-11 cursor-pointer rounded-full border px-4.5 text-sm font-medium transition-colors ${
                    field.value === label
                      ? "border-[#F4F6FA] bg-[#F4F6FA] text-[#07090D]"
                      : "border-white/15 bg-white/7 text-text hover:bg-white/12"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        />
        {errors.usluga && (
          <p
            id={`${s.idPrefix}usluga-error`}
            className={`mt-2.5 ${errorText}`}
          >
            {errors.usluga.message}
          </p>
        )}
      </div>

      {fields.map((f) => {
        const id = `${s.idPrefix}${f.name}`;
        const error = errors[f.name];
        return (
          <div key={f.name} className="flex flex-col gap-2.5">
            <label htmlFor={id} className="text-[13px] font-medium text-muted">
              {f.label}
            </label>
            <input
              id={id}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${id}-error` : undefined}
              className={`box-border w-full rounded-full border border-white/15 text-base text-white placeholder:text-muted-2 aria-invalid:border-[#FF8F8F]/70 ${s.input}`}
              {...register(f.name)}
            />
            {error && (
              <p id={`${id}-error`} className={errorText}>
                {error.message}
              </p>
            )}
          </div>
        );
      })}

      {hero ? (
        <>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-[#D5DBE8]">
            {quickAssurances.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <Check />
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-4.5 pt-1.5">
            <span className="rb rb-light">
              <button type="submit" className="rb-in" disabled={isSubmitting}>
                Zatraži ponudu
              </button>
            </span>
            {status}
          </div>
        </>
      ) : (
        <>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-4.5">
            <span className="rb rb-light rb-lg">
              <button type="submit" className="rb-in" disabled={isSubmitting}>
                Zatraži ponudu
              </button>
            </span>
            <span className="rb rb-sm">
              <a
                className="rb-in"
                href={`tel:${company.phone.replace(/\s/g, "")}`}
              >
                {company.phone}
              </a>
            </span>
          </div>
          {status}
        </>
      )}
    </form>
  );
}
