"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  city: string;
  vehicle: string;
  text: string;
};

// Order in source = order on the timeline (first card on the right in RTL).
const TESTIMONIALS: Testimonial[] = [
  {
    name: "אלון",
    city: "תל אביב",
    vehicle: "משאית לפירוק",
    text: "מכרתי משאית ישנה אחרי שהמנוע נשרף. דרייב אין הגיעו תוך שעות, נתנו הצעה הוגנת ושילמו במזומן במקום. שירות סופר מקצועי, ממליץ בחום.",
  },
  {
    name: "מירב",
    city: "ראשון לציון",
    vehicle: "רכב פרטי אחרי תאונה",
    text: "אחרי תאונה לא ידעתי מה לעשות עם הרכב. פניתי לדרייב אין והם לקחו את הכל עליהם – הגיעו עם גרר, שילמו במקום, ואני קיבלתי את הכסף תוך כמה שעות.",
  },
  {
    name: "יוסי",
    city: "חיפה",
    vehicle: "בעל מוסך",
    text: "מוסך עובד איתם כבר שנתיים. הכי מקצועיים בשוק, הכי מהירים, ותמיד עומדים בדיבור. אם אתם בענף הרכב – אין למה לחפש מישהו אחר.",
  },
  {
    name: "דניאל",
    city: "באר שבע",
    vehicle: "אופנוע אחרי תאונה",
    text: "האופנוע שלי ניזוק קשה בתאונה ובכל מקום אחר ניסו למשוך אותי במחיר. בדרייב אין קיבלתי הצעה ישרה תוך דקות והעסקה נסגרה באותו יום. מומלצים בלי סוף.",
  },
  {
    name: "שירן",
    city: "נתניה",
    vehicle: "רכב לגריטה",
    text: "רכב ישן שתפס חניה שנים שלמות. תיאמתי איתם בוואטסאפ, למחרת הגיע גרר, פינו הכל וקיבלתי תשלום הוגן. נוח, מהיר ובלי כאב ראש.",
  },
  {
    name: "אבי",
    city: "ירושלים",
    vehicle: "רכב מסחרי",
    text: "מכרתי ואן מסחרי של העסק אחרי תאונה. הצוות מקצועי, אדיב, וטיפלו בכל הניירת מול חברת הביטוח. הכל היה שקוף מההתחלה ועד הסוף.",
  },
  {
    name: "רונן",
    city: "אשדוד",
    vehicle: "סוחר רכב",
    text: "כסוחר אני מעריך אנשים שעומדים במילה. דרייב אין נותנים מחירים אמיתיים, סוגרים מהר ולא מתחכמים. שיתוף פעולה מצוין שנמשך כבר תקופה ארוכה.",
  },
  {
    name: "נטלי",
    city: "פתח תקווה",
    vehicle: "רכב ללא רישוי",
    text: "הרכב היה בלי רישוי ובלי ביטוח והייתי בטוחה שאף אחד לא ייקח אותו. בדרייב אין לא עשו מזה עניין – הגיעו, גררו ושילמו. שירות אמין ומסודר.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--brand-gold)]" aria-label="5 מתוך 5 כוכבים">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M12 2l2.92 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.08-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
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
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const layout = useRef({ perView: 1, pageCount: 1, rtl: true });
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);

  // Measure how many cards fit per view (1 / 2 / 3 across breakpoints) and how
  // many pages that yields. Cached in a ref so the scroll handler stays cheap
  // instead of re-reading computed styles every frame.
  const recompute = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !first) return;
    const cs = getComputedStyle(track);
    const gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;
    const cardWidth = first.getBoundingClientRect().width;
    const perView = Math.max(
      1,
      Math.round((track.clientWidth + gap) / (cardWidth + gap))
    );
    const count = Math.max(1, Math.ceil(TESTIMONIALS.length / perView));
    layout.current = { perView, pageCount: count, rtl: cs.direction === "rtl" };
    setPageCount(count);
  }, []);

  // Bring the first card of `target` to the track's start edge. Measuring the
  // right edge in RTL and scrolling by a relative delta keeps this correct
  // regardless of how the browser signs scrollLeft in RTL.
  const scrollToPage = useCallback((target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const { perView, pageCount: count, rtl } = layout.current;
    const clamped = Math.max(0, Math.min(target, count - 1));
    const card = track.children[
      Math.min(clamped * perView, TESTIMONIALS.length - 1)
    ] as HTMLElement | undefined;
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = rtl
      ? cardRect.right - trackRect.right
      : cardRect.left - trackRect.left;
    track.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  // Active page = the page whose first card sits closest to the start edge.
  // Reaches 0 at the start and pageCount-1 at the end, so the dots and arrows
  // reflect both extremes (a center-based check never could).
  const syncPage = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { perView, pageCount: count, rtl } = layout.current;
    const trackRect = track.getBoundingClientRect();
    const trackStart = rtl ? trackRect.right : trackRect.left;
    let best = 0;
    let min = Infinity;
    for (let p = 0; p < count; p++) {
      const child = track.children[
        Math.min(p * perView, TESTIMONIALS.length - 1)
      ] as HTMLElement | undefined;
      if (!child) continue;
      const r = child.getBoundingClientRect();
      const cardStart = rtl ? r.right : r.left;
      const d = Math.abs(cardStart - trackStart);
      if (d < min) {
        min = d;
        best = p;
      }
    }
    setPage(best);
  }, []);

  // Re-measure on mount and whenever the breakpoint (perView) changes.
  useEffect(() => {
    recompute();
    syncPage();
    const onResize = () => {
      recompute();
      syncPage();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recompute, syncPage]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncPage, { passive: true });
    return () => track.removeEventListener("scroll", syncPage);
  }, [syncPage]);

  // Gentle autoplay — wraps at the end, pauses on interaction, respects
  // reduced-motion.
  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      scrollToPage((page + 1) % layout.current.pageCount);
    }, 6000);
    return () => window.clearInterval(id);
  }, [page, paused, scrollToPage]);

  return (
    <section className="bg-stone-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold)]">
            לקוחות מספרים
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            לקוחות ממליצים
          </h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name + t.city}
                className="relative flex min-w-0 shrink-0 grow-0 basis-full snap-start flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:basis-[calc((100%-1.25rem)/2)] md:basis-[calc((100%-2.5rem)/3)] lg:basis-[calc((100%-3.75rem)/4)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute start-5 top-5 h-9 w-9 text-[var(--brand-gold)]/20"
                  aria-hidden
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5c0-1.83 1.5-3.33 3.33-3.33H10V6H7.17zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5c0-1.83 1.5-3.33 3.33-3.33H20V6h-2.83z" />
                </svg>
                <Stars />
                <p className="mt-4 flex-1 leading-relaxed text-stone-700">
                  {t.text}
                </p>
                <div className="mt-6 border-t border-stone-200 pt-5">
                  <p className="font-bold text-[var(--brand-brown)]">{t.name}</p>
                  <p className="text-sm text-stone-500">
                    {t.city} • {t.vehicle}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Controls — RTL: previous on the right, next on the left */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => scrollToPage(page - 1)}
              disabled={page === 0}
              aria-label="המלצה קודמת"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--brand-brown)] shadow-sm ring-1 ring-stone-200 transition-all hover:bg-[var(--brand-gold)] hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[var(--brand-brown)]"
            >
              <Chevron className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToPage(i)}
                  aria-label={`מעבר לעמוד ${i + 1}`}
                  aria-current={page === i}
                  className={
                    page === i
                      ? "h-2.5 w-6 rounded-full bg-[var(--brand-gold)] transition-all"
                      : "h-2.5 w-2.5 rounded-full bg-stone-300 transition-all hover:bg-stone-400"
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToPage(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="המלצה הבאה"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--brand-brown)] shadow-sm ring-1 ring-stone-200 transition-all hover:bg-[var(--brand-gold)] hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[var(--brand-brown)]"
            >
              <Chevron className="h-5 w-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
