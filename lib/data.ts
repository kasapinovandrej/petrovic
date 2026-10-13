// Svi podaci o firmi su DUMMY_DATA. Menjajte ih ovde — komponente ih samo prikazuju.
// Napomena: sajt namerno NEMA definisane cene; samo se naglašava da su cene prilično povoljne.

export const company = {
  name: "Meridijan",
  legalName: "Meridijan Geodezija",
  city: "Kraljevo",
  address: "Ulica DUMMY 00, 36000 Kraljevo",
  phone: "+381 36 000 000",
  email: "ponuda@dummy-geodezija.example",
  hours: ["Pon–Pet 08:00–16:00", "Sub 09:00–13:00 (teren)"],
  license: "Licenca br. [DUMMY 000]",
};

export const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#proces", label: "Proces" },
  { href: "#cene", label: "Cene" },
  { href: "#strucnost", label: "Stručnost" },
  { href: "#pitanja", label: "Pitanja" },
];

export type IconName = "target" | "parcel" | "stake" | "layers" | "drone" | "file";

export type Service = {
  id: string;
  title: string;
  desc: string;
  rok: string;
  icon: IconName;
  variant: "white" | "dark" | "photo" | "accent";
  wide?: boolean;
};

export const services: Service[] = [
  {
    id: "snimanje",
    title: "Snimanje terena i katastarski snimak",
    desc: "GNSS RTK i totalna stanica. Situacioni plan, profili i ažuran katastarski snimak u PDF i DWG formatu.",
    rok: "1–2 dana",
    icon: "target",
    variant: "white",
    wide: true,
  },
  {
    id: "parcelacija",
    title: "Parcelacija",
    desc: "Deoba i spajanje parcela sa predajom u katastar.",
    rok: "3–5 dana",
    icon: "parcel",
    variant: "dark",
  },
  {
    id: "iskolcenje",
    title: "Iskolčenje objekata",
    desc: "Prenos projekta na teren sa tačnošću do 1 cm.",
    rok: "24 sata",
    icon: "stake",
    variant: "white",
  },
  {
    id: "etaziranje",
    title: "Etažiranje",
    desc: "Elaborat za upis stanova, lokala i garaža.",
    rok: "3–4 dana",
    icon: "layers",
    variant: "white",
  },
  {
    id: "dron",
    title: "Snimanje dronom",
    desc: "Ortofoto i 3D model terena za velike površine i investitore — hektari za sat vremena.",
    rok: "2 dana",
    icon: "drone",
    variant: "photo",
    wide: true,
  },
  {
    id: "legalizacija",
    title: "Legalizacija objekata",
    desc: "Snimak postojećeg stanja i elaborat za upis objekta — uz vođenje kroz celu proceduru, od prvog dana.",
    rok: "3–5 dana",
    icon: "file",
    variant: "accent",
  },
];

export const marqueeItems = [
  "Katastarsko snimanje",
  "Parcelacija",
  "Iskolčenje",
  "Etažiranje",
  "Snimanje dronom",
  "Legalizacija",
];

// Brzi upit (hero): vrste usluga
export const quickServices = ["Snimanje terena", "Parcelacija", "Iskolčenje", "Etažiranje", "Dron", "Legalizacija"];

export const quickAssurances = ["Ponuda u roku od 2 sata", "Fiksna cena u ponudi", "Bez obaveze"];

export const processSteps = [
  { time: "≤ 2 h", title: "Upit i ponuda", text: "Pošaljete broj parcele, a fiksnu ponudu dobijate za dva sata." },
  { time: "24 h", title: "Izlazak na teren", text: "Ekipa sa GNSS opremom na parceli. Merenje traje od sat do tri." },
  { time: "36 h", title: "Obrada i kontrola", text: "Obrada podataka i provera odgovornog inženjera." },
  { time: "48 h", title: "Predaja elaborata", text: "Potpisan elaborat stiže vama i elektronski ide katastru." },
];

// Sekcija „Cene“: bez iznosa, samo poruka o povoljnosti
export const pricingIntro = {
  title: "Prilično povoljno. Uvek unapred.",
  note: "Cena zavisi od površine, terena i vrste usluge — zato svaku ponudu pišemo po meri parcele.",
  big: "Naše cene su prilično povoljne.",
  bigText: "Kvalitetno merenje ne mora da bude skupo. Pošaljite parcelu i u roku od 2 sata dobijate jasnu ponudu — bez obaveze.",
};

export const valueProps = [
  { title: "Ponuda za 2 sata", text: "Šaljete broj parcele, mi vraćamo ponudu radnim danom u roku od dva sata." },
  { title: "Fiksna cena, bez doplata", text: "Ono što piše u ponudi to i važi — nema iznenađenja na terenu ni pri predaji." },
  { title: "Ponuda ne obavezuje", text: "Ponuda je besplatna. Odlučujete tek kada vidite cenu i rok." },
  { title: "Povoljnije za više usluga", text: "Snimak, parcelacija i iskolčenje na istoj parceli? Dogovaramo povoljniji paket." },
];

export const team = [
  { initials: "IP", name: "Ime Prezime", role: "Direktor, dipl. inž. geodezije" },
  { initials: "IP", name: "Ime Prezime", role: "Vođa terenske ekipe" },
  { initials: "IP", name: "Ime Prezime", role: "Pilot drona, obrada podataka" },
];

export const stats = [
  { value: "15+", label: "godina iskustva [DUMMY]" },
  { value: "2", label: "GNSS RTK prijemnika" },
  { value: "1″", label: "robotizovana totalna stanica" },
  { value: "RTK", label: "dron za ortofoto i 3D" },
];

export const testimonials = [
  {
    quote: "Merenje je završeno ujutru, a elaborat sam imao sutradan popodne. Cena je bila tačno ona iz ponude.",
    name: "Ime Prezime",
    role: "investitor, Kraljevo [DUMMY]",
  },
  {
    quote: "Parcelaciju sa četiri placa završili su za pet dana, bez ijednog dodatnog poziva iz katastra.",
    name: "Ime Prezime",
    role: "vlasnik zemljišta [DUMMY]",
  },
];

export const faq = [
  {
    q: "Koliko košta snimanje ili parcelacija?",
    a: "Cena zavisi od površine parcele, terena i vrste usluge. Naše cene su prilično povoljne, a tačan iznos dobijate u besplatnoj ponudi — radnim danom u roku od dva sata.",
  },
  {
    q: "Koliko traje izrada elaborata?",
    a: "Na teren izlazimo u roku od 24 sata, a elaborat je najčešće gotov za 48 sati. Složeniji poslovi, poput parcelacije ili etažiranja, traju nekoliko dana.",
  },
  {
    q: "Šta treba da vam pošaljem?",
    a: "Broj katastarske parcele i katastarsku opštinu, vrstu usluge i broj telefona. Ostalo preuzimamo mi.",
  },
  {
    q: "Da li vi predajete elaborat katastru?",
    a: "Da. Elaborat predajemo elektronski i pratimo status umesto vas, pa ne morate da odlazite na šaltere.",
  },
  {
    q: "Radite li i van Kraljeva?",
    a: "Da, radimo u Kraljevu i okolnim opštinama. Za udaljenije lokacije dogovor ulazi u ponudu.",
  },
];

export const areas = ["Kraljevo", "Vrnjačka Banja", "Trstenik", "Raška", "Čačak", "Novi Pazar", "i okolna sela"];
