import RequestForm from "./RequestForm";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden pt-[clamp(40px,6vw,80px)] pb-[clamp(64px,8vw,112px)]"
    >
      <div className="pointer-events-none absolute top-[30%] left-1/2 h-65 w-225 -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,.7)_0%,rgba(200,245,58,.4)_18%,rgba(110,120,255,.3)_40%,transparent_68%)] blur-[28px]" />
      <div className="relative mx-auto max-w-275 px-[clamp(16px,3vw,32px)]">
        <div className="glass rounded-[40px] p-[clamp(28px,5vw,72px)] text-center">
          <h2 className="gt mx-auto max-w-205 text-[clamp(40px,6.4vw,96px)] leading-[.94] font-semibold tracking-[-.055em]">
            Pošaljite broj parcele. Ponuda za 2 sata.
          </h2>
          <RequestForm variant="contact" />
        </div>
      </div>
    </section>
  );
}
