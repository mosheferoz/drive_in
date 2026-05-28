import Image from "next/image";
import Nav from "./Nav";
import Testimonials from "./Testimonials";

/* ------------------------------------------------------------------ */
/*  Inline SVG icons — keeps the page in a single file, no extra deps */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

const Icon = {
  Phone: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Whatsapp: ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.518 5.275l-.999 3.648 3.97-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  ),
  Mail: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
  Pin: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  ChevronDown: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  // Service / feature icons (line style to match the Elay-Car inspiration)
  Wrecker: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 44h36V28h10l8 8v8h-4" />
      <circle cx="14" cy="48" r="4" />
      <circle cx="50" cy="48" r="4" />
      <path d="M40 28h-6v8h16" />
      <path d="M22 28v8" stroke="var(--brand-gold)" />
      <path d="M30 20l10-6" />
      <path d="M40 14l4 4" />
    </svg>
  ),
  Truck: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="4" y="20" width="32" height="22" rx="2" />
      <path d="M36 28h12l8 8v6H36z" />
      <circle cx="16" cy="48" r="4" />
      <circle cx="46" cy="48" r="4" />
      <path d="M10 28h20" stroke="var(--brand-gold)" />
    </svg>
  ),
  Van: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 42V18a2 2 0 0 1 2-2h28v26" />
      <path d="M34 22h12l10 12v8H34" />
      <circle cx="16" cy="46" r="4" />
      <circle cx="46" cy="46" r="4" />
      <path d="M40 26h6l4 6h-10z" stroke="var(--brand-gold)" />
    </svg>
  ),
  Motorcycle: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="14" cy="44" r="8" />
      <circle cx="50" cy="44" r="8" />
      <path d="M22 44l8-14h12l-4-8" />
      <path d="M30 30l-6-8h8" stroke="var(--brand-gold)" />
      <path d="M42 30l8 14" />
    </svg>
  ),
  Scrap: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 50h44" />
      <path d="M16 50V36l8-6h16l8 10v10" />
      <path d="M24 30V18a4 4 0 0 1 4-4" />
      <path d="M28 14l6-4 4 6" stroke="var(--brand-gold)" />
      <path d="M22 50V40h20v10" />
    </svg>
  ),
  // Feature row icons
  Shield: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M32 6L10 14v16c0 12 9 22 22 28 13-6 22-16 22-28V14L32 6z" />
      <path d="M24 32l6 6 12-12" stroke="var(--brand-gold)" />
    </svg>
  ),
  Map: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 8l-14 6v40l14-6 20 6 14-6V8l-14 6-20-6z" />
      <path d="M22 8v40" />
      <path d="M42 14v40" />
      <circle cx="32" cy="30" r="3" stroke="var(--brand-gold)" />
    </svg>
  ),
  Cash: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="6" y="18" width="52" height="28" rx="2" />
      <circle cx="32" cy="32" r="7" stroke="var(--brand-gold)" />
      <path d="M14 24h4M50 40h-4" />
    </svg>
  ),
  Clock: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="24" />
      <path d="M32 16v16l10 6" stroke="var(--brand-gold)" />
    </svg>
  ),
  Globe: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="24" />
      <path d="M8 32h48" />
      <path d="M32 8c8 8 8 40 0 48M32 8c-8 8-8 40 0 48" stroke="var(--brand-gold)" />
    </svg>
  ),
  Check: ({ className = "" }: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

const PHONE = "050-3428013";
const PHONE_TEL = "+972503428013";
const WHATSAPP_LINK = `https://wa.me/972503428013`;
const EMAIL = "Driveinltd@gmail.com";
const ADDRESS = "רחוב אנוש 2, ראשון לציון";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <FeatureRow />
        <About />
        <Services />
        <Stats />
        <Compound />
        <Process />
        <BuyOrSell />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        {/* Logo (right in RTL) */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.JPG"
            alt="Drive In ס.ע"
            width={160}
            height={64}
            className="h-12 w-auto md:h-14"
            preload
          />
        </a>

        {/* Nav (center) — hidden on small screens. Client component with scroll-spy. */}
        <Nav />

        {/* CTA (left in RTL) */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden md:grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white shadow-sm hover:scale-105 transition-transform"
          >
            <Icon.Whatsapp className="h-5 w-5" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`התקשרו אלינו: ${PHONE}`}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-l from-[var(--brand-gold)] to-[var(--brand-gold-light)] py-1.5 ps-1.5 pe-3.5 text-sm font-bold text-stone-900 shadow-md shadow-[var(--brand-gold)]/30 ring-1 ring-inset ring-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--brand-gold)]/40 active:translate-y-0 active:scale-[0.97] md:py-2 md:pe-4"
          >
            {/* Attention pulse — mobile only, where this is the primary CTA */}
            <span
              className="call-pulse pointer-events-none absolute inset-0 rounded-full md:hidden"
              aria-hidden
            />
            <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stone-900 text-[var(--brand-gold-light)] shadow-inner transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <Icon.Phone className="h-4 w-4" />
            </span>
            <span className="relative tracking-wide" dir="ltr">{PHONE}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-stone-900">
      {/* Mobile (portrait) hero image */}
      <Image
        src="/images/hero_section_mobile.png"
        alt="גרר עם רכב לפירוק - דרייב אין"
        fill
        className="object-cover object-[center_80%] -z-10 md:hidden"
        sizes="100vw"
        preload
      />
      {/* Desktop (landscape) hero image */}
      <Image
        src="/images/hero_section.png"
        alt="גרר עם רכב לפירוק - דרייב אין"
        fill
        className="hidden md:block object-cover object-center -z-10"
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 hero-overlay -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-xl text-white">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--brand-gold)]/40 bg-white/5 px-4 py-2 backdrop-blur-sm shadow-sm shadow-black/20">
            <Icon.Shield className="h-5 w-5 shrink-0 text-[var(--brand-gold-light)]" />
            <span className="text-sm font-semibold tracking-wide text-stone-100">
              <span className="font-extrabold text-[var(--brand-gold-light)]">מעל 15 שנות</span>{" "}
              ניסיון בענף הרכב
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            קניית רכבים לתיקון ופירוק
            <span className="hero-rotator mt-1 block text-[var(--brand-gold-light)]">
              <span className="hero-rotator__track">
                <span className="hero-rotator__item">שרידי רכבים,</span>
                <span className="hero-rotator__item">משאיות מסחריות</span>
                <span className="hero-rotator__item">אופנועים</span>
                <span className="hero-rotator__item" aria-hidden>
                  שרידי רכבים,
                </span>
              </span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-stone-200 leading-relaxed max-w-lg">
            בכל מצב, בכל הארץ. צוות מקצועי, פינוי מיידי, תשלום
            במקום וכל הערבויות הכספיות הנדרשות. מעל 5,000 כלי רכב עוברים אצלנו בשנה.
          </p>

          <p className="mt-8 text-base font-semibold text-white">
            יש לכם רכב למכירה? נסגור עסקה תוך דקות.
          </p>

          <div className="mt-5 flex flex-row gap-2.5 sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex flex-1 sm:flex-none items-center justify-center gap-2 sm:gap-2.5 overflow-hidden whitespace-nowrap rounded-full bg-[var(--brand-gold)] px-4 py-3 text-sm font-bold text-stone-900 shadow-lg shadow-[var(--brand-gold)]/30 ring-1 ring-inset ring-white/20 transition-all duration-300 hover:bg-[var(--brand-gold-light)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--brand-gold)]/40 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 sm:px-8 sm:py-4 sm:text-base"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                aria-hidden
              />
              <Icon.Whatsapp className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                <span className="sm:hidden">וואטסאפ</span>
                <span className="hidden sm:inline">דברו איתנו בוואטסאפ</span>
              </span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex flex-1 sm:flex-none items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 sm:px-8 sm:py-4 sm:text-base"
            >
              <Icon.Phone className="h-5 w-5 shrink-0 text-[var(--brand-gold-light)] transition-transform duration-300 group-hover:-rotate-12" />
              <span>
                <span className="sm:hidden">חייגו</span>
                <span className="hidden sm:inline">חייגו: {PHONE}</span>
              </span>
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-300">
            * פינוי מיידי בכל הארץ • תשלום במזומן או בהעברה • זמני תגובה ופינוי מהירים
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature Row — "למה דרייב אין?"                                   */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    Icon: Icon.Clock,
    title: "זמני תגובה ופינוי מהירים",
    desc: "זמינות מלאה בנייד, בוואטסאפ ובמייל – כולל סופי שבוע",
  },
  {
    Icon: Icon.Wrecker,
    title: "פינוי וגרירה מכל נקודה",
    desc: "מערך גרירה ושינוע עצמאי לכל סוגי הרכבים",
  },
  {
    Icon: Icon.Map,
    title: "קונים בכל הארץ",
    desc: "פריסה ארצית מצפון ועד דרום, ללא תוספת תשלום",
  },
  {
    Icon: Icon.Cash,
    title: "תשלום במקום",
    desc: "מחירים הוגנים, מזומן או העברה בנקאית מיידית",
  },
  {
    Icon: Icon.Shield,
    title: "כל הערבויות הכספיות",
    desc: "חברה רשומה עם ערבויות בנקאיות מלאות לכל עסקה",
  },
  {
    Icon: Icon.Globe,
    title: "סחר בארץ ובחו״ל",
    desc: "קשרים מסחריים ענפים עם סוחרים, מוסכים ומפרקים",
  },
];

function FeatureRow() {
  return (
    <section className="bg-stone-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            למה דווקא <span className="text-[var(--brand-brown)]">דרייב אין?</span>
          </h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
          {FEATURES.map(({ Icon: I, title, desc }) => (
            <div key={title} className="text-center px-2">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-stone-200 text-[var(--brand-brown)]">
                <I className="h-9 w-9" />
              </div>
              <h3 className="text-sm md:text-base font-bold leading-snug">{title}</h3>
              <p className="mt-1.5 text-xs md:text-sm text-stone-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                             */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold)]">
            אודות החברה
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            דרייב אין ס.ע – הכתובת שלכם לקנייה ומכירה של שרידי רכבים
          </h2>
          <div className="gold-divider mt-5 w-20" />

          <div className="mt-6 space-y-4 text-stone-700 leading-relaxed text-[17px]">
            <p>
              <strong>דרייב אין ס.ע בע״מ</strong> הינה חברה ישראלית עצמאית הפועלת
              בתחום הרכב, ומתמחה בקנייה ומכירה של רכבי שרידים, משאיות, רכבים
              מסחריים ואופנועים – בין אם לצורכי תיקון והחזרה לכביש ובין אם לצורכי
              פירוק וניצול חלקים.
            </p>
            <p>
              החברה מבוססת על ניסיון מקצועי של למעלה מ־15 שנים, דורות אחורה בענף
              הרכב, תוך היכרות עמוקה עם עולם השרידים, הלוגיסטיקה, הסחר והתפעול מול
              כלל הגורמים המקצועיים בענף – מוסכים, מפרקים, סוחרים, חברות ביטוח,
              חברות ליסינג, יבואנים, ולקוחות פרטיים בארץ ובחו״ל.
            </p>
            <p>
              אנו מאמינים בעבודה מקצועית, שקופה ומהירה – מקבלים פנייה, נותנים
              הצעה, סוגרים עסקה.
            </p>
          </div>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-brown)] px-6 py-3 font-semibold text-white hover:bg-[var(--brand-brown-dark)] transition-colors"
          >
            לשירותים שלנו
            <Icon.ChevronDown className="h-4 w-4 -rotate-90" />
          </a>
        </div>

        {/* Right column — stylized info card */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-stone-200">
            <Image
              src="/images/yard_aerial1.jpg"
              alt="מבט אווירי על מתחם דרייב אין מלא בכלי רכב"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-6">
              <p className="text-white text-lg font-bold">
                מעל 5,000 כלי רכב בשנה
              </p>
              <p className="text-stone-200 text-sm">
                שירות מקצועי בכל רחבי הארץ
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -start-6 hidden md:block rounded-xl bg-[var(--brand-gold)] px-6 py-4 shadow-lg">
            <p className="text-3xl font-extrabold text-stone-900 leading-none">15+</p>
            <p className="text-sm font-semibold text-stone-900">שנות ניסיון</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    Icon: Icon.Wrecker,
    title: "שרידי רכבים פרטיים",
    desc: "רכבים לאחר תאונה, רכבי שרידים וכלי רכב בכל מצב – גם ללא רישוי או ביטוח",
  },
  {
    Icon: Icon.Truck,
    title: "משאיות בכל הגדלים",
    desc: "קונים משאיות לתיקון או לפירוק – משאיות קלות, כבדות ובכל הסיווגים",
  },
  {
    Icon: Icon.Van,
    title: "רכבים מסחריים",
    desc: "טנדרים, ואנים ורכבים מסחריים – לכל מטרה. רכבי ליסינג והשכרה לאחר תאונה",
  },
  {
    Icon: Icon.Motorcycle,
    title: "אופנועים וקטנועים",
    desc: "אופנועי שרידים, אופנועים אחרי תאונה ולפירוק – בכל מצב ובכל גודל",
  },
  {
    Icon: Icon.Scrap,
    title: "רכבים לסילוק לגריטה",
    desc: "רכבים ישנים שאינם בשימוש – פינוי מהיר ותשלום הוגן במקום",
  },
];

function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold)]">
            מה אנחנו קונים
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            השירותים שלנו
          </h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
          <p className="mt-5 max-w-2xl mx-auto text-stone-600 text-lg">
            קונים בכל הארץ • פינוי מיידי • תשלום במקום • כל הערבויות הכספיות
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map(({ Icon: I, title, desc }) => (
            <article
              key={title}
              className="group bg-white p-7 ring-1 ring-stone-200 hover:ring-[var(--brand-gold)] hover:-translate-y-1 transition-all duration-200 rounded-lg shadow-sm hover:shadow-lg"
            >
              <div className="mb-5 grid h-16 w-16 place-items-center rounded-lg bg-stone-50 text-[var(--brand-brown)] group-hover:bg-[var(--brand-gold)]/10">
                <I className="h-10 w-10" />
              </div>
              <div className="h-px w-10 bg-stone-200 mb-4" />
              <h3 className="text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats strip                                                       */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "20,000", unit: 'מ"ר', label: "מתחם תפעולי" },
  { value: "5,000+", unit: "בשנה", label: "כלי רכב עוברים אצלנו" },
  { value: "15+", unit: "שנים", label: "ניסיון בענף הרכב" },
  { value: "100%", unit: "", label: "שקיפות וערבויות מלאות" },
];

function Stats() {
  return (
    <section className="bg-[var(--brand-brown-dark)] py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center bg-[var(--brand-brown-dark)] px-4 py-9 text-center transition duration-200 hover:brightness-125"
            >
              <p className="flex items-baseline justify-center gap-2 leading-none">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand-gold-light)]">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-lg md:text-xl font-semibold text-[var(--brand-gold)]">
                    {s.unit}
                  </span>
                )}
              </p>
              <span className="mt-4 h-px w-10 bg-[var(--brand-gold)]/40" />
              <p className="mt-4 text-sm md:text-base text-stone-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Compound showcase — full-bleed aerial of the yard                 */
/* ------------------------------------------------------------------ */

function Compound() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-900">
      <Image
        src="/images/yard_aerial2.jpg"
        alt="צילום אוויר של מתחם דרייב אין - מאות כלי רכב לשרידים ולפירוק"
        fill
        className="object-cover object-center -z-10"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-l from-stone-900/90 via-stone-900/60 to-stone-900/30"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold-light)]">
            המתחם שלנו
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            מתחם תפעולי של 20,000 מ״ר
          </h2>
          <div className="gold-divider mt-5 w-20" />
          <p className="mt-6 text-lg text-stone-200 leading-relaxed">
            מאות כלי רכב נכנסים ויוצאים מהמתחם שלנו מדי חודש – שרידים, משאיות,
            מסחריים ואופנועים. תשתית, לוגיסטיקה וצוות מקצועי שמאפשרים לנו לתת לכם
            מענה מהיר, הוגן ומסודר בכל רחבי הארץ.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="text-3xl font-extrabold text-[var(--brand-gold-light)] leading-none">
                20,000 <span className="text-xl">מ״ר</span>
              </p>
              <p className="mt-1.5 text-sm text-stone-300">מתחם תפעולי</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[var(--brand-gold-light)] leading-none">
                5,000+
              </p>
              <p className="mt-1.5 text-sm text-stone-300">כלי רכב בשנה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process                                                           */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    n: 1,
    title: "יוצרים איתנו קשר",
    desc: "בנייד / וואטסאפ / מייל – או משאירים פנייה באתר ואנו חוזרים אליכם",
  },
  {
    n: 2,
    title: "מקבלים הצעת מחיר",
    desc: "לא מושכים אתכם. תקבלו הצעה הוגנת תוך זמן קצר – לרוב מיד אחרי השיחה",
  },
  {
    n: 3,
    title: "מתאמים הגעה",
    desc: "נציג מטעמנו מגיע אליכם בזמן שמתאים לכם, מבצע בדיקה נוספת בזמן אמת",
  },
  {
    n: 4,
    title: "נפגשים, משלמים, גוררים",
    desc: "לאחר שנסכם על סכום הוגן, נשלם לכם במזומן או בהעברה ונגרור את הרכב מהמקום",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            תהליך עבודה ב־4 שלבים פשוטים
          </h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* dashed connector (visual only, hidden on small) */}
          <div
            className="hidden lg:block absolute top-12 inset-x-12 border-t-2 border-dashed border-stone-300 -z-10"
            aria-hidden
          />
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="relative mx-auto mb-5 h-24 w-24">
                <span className="absolute inset-0 grid place-items-center text-7xl font-extrabold text-[var(--brand-gold)] leading-none">
                  {s.n}
                </span>
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-stone-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Buy / Sell two-column                                             */
/* ------------------------------------------------------------------ */

const BUY_LIST = [
  "רכבים פרטיים לאחר תאונה / רכבי שרידים",
  "רכבים לפירוק בכל מצב (גם ללא רישוי / ביטוח)",
  "משאיות בכל הגדלים – לתיקון או לפירוק",
  "רכבים מסחריים, טנדרים וואנים",
  "אופנועים וקטנועים – אחרי תאונה / לפירוק",
  "רכבי ליסינג והשכרה לאחר תאונה",
  "רכבים ישנים / כלי רכב לסילוק לגריטה",
];

const SELL_LIST = [
  "רכבי שרידים לתיקון – למוסכים ולסוחרים",
  "רכבים לפירוק – למפרקים מורשים",
  "משאיות ורכבים מסחריים – לתיקון או פירוק",
  "אופנועי שרידים ולפירוק",
  "רכבי טרייד־אין במגוון רחב",
  "פלטפורמת מכירה מסודרת ושקופה",
  "סחר בארץ ובחו״ל מול לקוחות מקצועיים",
];

function BuyOrSell() {
  return (
    <section className="bg-stone-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 md:p-10 rounded-2xl ring-1 ring-stone-200 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold)]">
            מה אנחנו קונים?
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">
            כל סוגי הרכב, בכל מצב
          </h3>
          <div className="gold-divider mt-4 w-16" />
          <ul className="mt-6 space-y-3">
            {BUY_LIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-brown)] shrink-0">
                  <Icon.Check className="h-3 w-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-stone-900 text-white p-8 md:p-10 rounded-2xl shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold-light)]">
            מה אנחנו מוכרים?
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">
            פלטפורמה מסודרת לסוחרים ולמוסכים
          </h3>
          <div className="gold-divider mt-4 w-16" />
          <ul className="mt-6 space-y-3">
            {SELL_LIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-200">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--brand-gold)]/25 text-[var(--brand-gold-light)] shrink-0">
                  <Icon.Check className="h-3 w-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ — native <details>/<summary>, no JS required                  */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "איך עובד תהליך המכירה?",
    a: "התהליך פשוט מאוד: יוצרים איתנו קשר טלפונית או בוואטסאפ, מוסרים פרטים בסיסיים על הרכב (יצרן, דגם, שנה, מצב), אנחנו נותנים הצעת מחיר עוד באותה שיחה. אם מסכימים – נשלח גרר אליכם, נבדוק את הרכב במקום, נשלם ונגרור. הכל בתוך 24 שעות.",
  },
  {
    q: "האם יש עלויות נלוות למכירה?",
    a: "אין שום עלות נלווית. הגרירה, השינוע והפינוי הם על חשבוננו. הסכום שמוסכם בטלפון – הוא הסכום שתקבלו לידיים. אין הפתעות.",
  },
  {
    q: "כמה זמן לוקח התהליך מקבלת הצעה ועד תשלום?",
    a: "ברוב המקרים אנחנו סוגרים את העסקה תוך פחות מ־24 שעות מרגע הפנייה. במקרים דחופים – אפילו תוך כמה שעות. זמני התגובה והפינוי שלנו מהירים.",
  },
  {
    q: "אילו רכבים מתאימים לקנייה?",
    a: "אנחנו קונים את כל סוגי הרכב: רכבים פרטיים אחרי תאונה, רכבים לפירוק בכל מצב, משאיות בכל הגדלים, רכבים מסחריים, טנדרים, אופנועים, קטנועים, וגם רכבים ישנים לסילוק לגריטה. גם רכבים ללא רישוי וללא ביטוח.",
  },
  {
    q: "האם אתם פועלים בכל הארץ?",
    a: "כן. יש לנו מערך גרירה ושינוע עצמאי שפועל בכל רחבי הארץ – מצפון ועד דרום. אין צורך להביא את הרכב למקום שלנו, אנחנו מגיעים אליכם.",
  },
  {
    q: "האם החברה מוסמכת ומפוקחת?",
    a: "בהחלט. דרייב אין ס.ע בע״מ היא חברה רשומה ופעילה בענף הרכב מעל 15 שנים, עם כל הערבויות הכספיות הנדרשות וקשרי עבודה עם חברות ביטוח, ליסינג, יבואנים, מוסכים ומפרקים מורשים.",
  },
];

function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            שאלות ותשובות
          </h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
        </div>

        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group bg-stone-50 rounded-lg ring-1 ring-stone-200 open:ring-[var(--brand-gold)] open:bg-white transition-all"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-bold text-stone-900 text-base md:text-lg">
                <span>{f.q}</span>
                <Icon.ChevronDown className="h-5 w-5 text-[var(--brand-gold)] transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-5 pb-5 text-stone-700 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact form                                                      */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-stone-900 py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--brand-gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-brown) 0, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — invite copy */}
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold-light)]">
            יצירת קשר
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
            יש לכם רכב, משאית, מסחרי או אופנוע למכירה?
          </h2>
          <p className="mt-5 text-lg text-stone-300 leading-relaxed">
            השאירו פרטים ונחזור אליכם תוך זמן קצר עם הצעת מחיר הוגנת.
            בזמני תגובה ופינוי מהירים – מקבלים פנייה, נותנים הצעה, סוגרים עסקה.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-4 group"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold-light)] group-hover:bg-[var(--brand-gold)] group-hover:text-stone-900 transition-colors">
                <Icon.Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-400">טלפון</p>
                <p className="font-bold text-white">{PHONE}</p>
              </div>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold-light)] group-hover:bg-[var(--brand-gold)] group-hover:text-stone-900 transition-colors">
                <Icon.Whatsapp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-400">וואטסאפ</p>
                <p className="font-bold text-white">{PHONE}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 group"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold-light)] group-hover:bg-[var(--brand-gold)] group-hover:text-stone-900 transition-colors">
                <Icon.Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-400">מייל</p>
                <p className="font-bold text-white break-all">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold-light)]">
                <Icon.Pin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-stone-400">כתובת המשרד</p>
                <p className="font-bold text-white">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form card */}
        <form
          action={`mailto:${EMAIL}`}
          method="post"
          encType="text/plain"
          className="bg-white p-7 md:p-9 rounded-2xl shadow-2xl space-y-4 text-stone-900"
        >
          <h3 className="text-xl font-extrabold">השאירו פרטים ונחזור אליכם</h3>
          <div className="gold-divider w-16" />

          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
              שם מלא *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="הזינו את שמכם"
              className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
              טלפון *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="050-1234567"
              className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="vehicle" className="block text-sm font-semibold mb-1.5">
              סוג הרכב
            </label>
            <select
              id="vehicle"
              name="vehicle"
              defaultValue=""
              className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-transparent"
            >
              <option value="" disabled>
                בחרו סוג רכב
              </option>
              <option value="private">רכב פרטי / שרידים</option>
              <option value="truck">משאית</option>
              <option value="commercial">רכב מסחרי / טנדר</option>
              <option value="motorcycle">אופנוע / קטנוע</option>
              <option value="scrap">רכב לגריטה</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
              פרטים נוספים
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="ספרו לנו על הרכב – יצרן, דגם, שנה, מצב..."
              className="w-full rounded-md border border-stone-300 bg-stone-50 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-transparent resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[var(--brand-gold)] px-6 py-3.5 font-bold text-stone-900 text-base hover:bg-[var(--brand-gold-light)] transition-colors shadow-md"
          >
            שלחו פרטים – נחזור אליכם תוך זמן קצר
          </button>
          <p className="text-xs text-stone-500 text-center">
            או חייגו ישירות:{" "}
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[var(--brand-brown)]">
              {PHONE}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Image
            src="/images/logo.JPG"
            alt="Drive In ס.ע"
            width={180}
            height={70}
            className="h-14 w-auto bg-stone-100 p-1.5 rounded"
          />
          <p className="mt-5 text-sm leading-relaxed max-w-md">
            דרייב אין ס.ע בע״מ – הכתובת שלכם לקנייה ומכירה של שרידי רכבים,
            משאיות, רכבים מסחריים ואופנועים לתיקון ולפירוק.
          </p>
          <p className="mt-4 text-xs text-stone-500">
            פלטפורמה ייעודית לסוחרים, מוסכים, מפרקים ולקוחות פרטיים בארץ ובחו״ל.
          </p>
        </div>

        <div>
          <p className="font-bold text-white mb-4">ניווט מהיר</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-[var(--brand-gold-light)] transition-colors">
                אודות החברה
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--brand-gold-light)] transition-colors">
                השירותים שלנו
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-[var(--brand-gold-light)] transition-colors">
                תהליך העבודה
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[var(--brand-gold-light)] transition-colors">
                שאלות ותשובות
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--brand-gold-light)] transition-colors">
                יצירת קשר
              </a>
            </li>
            <li>
              <a href="/accessibility" className="hover:text-[var(--brand-gold-light)] transition-colors">
                הצהרת נגישות
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white mb-4">פרטי התקשרות</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon.Phone className="h-4 w-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon.Whatsapp className="h-4 w-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon.Mail className="h-4 w-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon.Pin className="h-4 w-4 mt-0.5 text-[var(--brand-gold)] shrink-0" />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} דרייב אין ס.ע בע״מ. כל הזכויות שמורות.</p>
          <p>Drive In S.O LTD – קונים ומוכרים שרידי רכבים, משאיות, מסחריות ואופנועים</p>
        </div>
      </div>
    </footer>
  );
}
