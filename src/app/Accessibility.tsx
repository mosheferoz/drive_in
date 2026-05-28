"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Accessibility widget — תפריט נגישות                                */
/*  Native, no third-party overlay. Settings persist in localStorage   */
/*  and are applied to <html> before paint by the inline script in      */
/*  layout.tsx (keep STORAGE_KEY + applySettings in sync with it).      */
/* ------------------------------------------------------------------ */

export const STORAGE_KEY = "drivein-a11y";

type Contrast = "none" | "dark" | "light";

type Settings = {
  fontScale: number; // 1 = 100%
  lineSpacing: 0 | 1 | 2;
  contrast: Contrast;
  grayscale: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  readableFont: boolean;
  bigCursor: boolean;
  stopMotion: boolean;
  readingGuide: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  lineSpacing: 0,
  contrast: "none",
  grayscale: false,
  highlightLinks: false,
  highlightHeadings: false,
  readableFont: false,
  bigCursor: false,
  stopMotion: false,
  readingGuide: false,
};

const FONT_MIN = 1;
const FONT_MAX = 1.6;
const FONT_STEP = 0.1;

/** Apply settings to the document. Mirrors the inline script in layout.tsx. */
export function applySettings(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = `${Math.round(s.fontScale * 100)}%`;
  const cl = root.classList;
  cl.toggle("acc-contrast-dark", s.contrast === "dark");
  cl.toggle("acc-contrast-light", s.contrast === "light");
  cl.toggle("acc-grayscale", s.grayscale);
  cl.toggle("acc-links", s.highlightLinks);
  cl.toggle("acc-headings", s.highlightHeadings);
  cl.toggle("acc-readable", s.readableFont);
  cl.toggle("acc-cursor", s.bigCursor);
  cl.toggle("acc-no-motion", s.stopMotion);
  cl.toggle("acc-spacing-1", s.lineSpacing === 1);
  cl.toggle("acc-spacing-2", s.lineSpacing === 2);
}

function readSettings(): Settings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return DEFAULTS;
  }
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */

function AccessibilityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 6.69 10 7.71 10 8.83V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 6.9 6.9h-3.07z" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  UI building blocks                                                */
/* ------------------------------------------------------------------ */

function ToggleButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-right text-sm font-semibold transition-colors " +
        (active
          ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/15 text-[var(--brand-brown-dark)]"
          : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50")
      }
    >
      <span>{label}</span>
      <span
        aria-hidden
        className={
          "grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold " +
          (active
            ? "border-[var(--brand-gold)] bg-[var(--brand-gold)] text-stone-900"
            : "border-stone-300 text-transparent")
        }
      >
        ✓
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Widget                                                            */
/* ------------------------------------------------------------------ */

export default function Accessibility() {
  const [open, setOpen] = useState(false);
  // Lazy initializer reads localStorage on the client and DEFAULTS on the
  // server (readSettings guards `window`), avoiding a setState-in-effect.
  const [settings, setSettings] = useState<Settings>(readSettings);

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Apply + persist whenever settings change (also runs once on mount).
  useEffect(() => {
    applySettings(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* storage may be unavailable (private mode) — settings still apply live */
    }
  }, [settings]);

  const update = useCallback(
    (patch: Partial<Settings>) => setSettings((prev) => ({ ...prev, ...patch })),
    []
  );

  const reset = useCallback(() => setSettings(DEFAULTS), []);

  // Reading guide — a horizontal band that tracks the pointer. Managed as a
  // standalone DOM node (appended to <body>, outside #acc-canvas) so it is
  // unaffected by the visual filters and needs no hydration handling.
  useEffect(() => {
    if (!settings.readingGuide) return;
    const guide = document.createElement("div");
    guide.className = "acc-reading-guide";
    guide.setAttribute("aria-hidden", "true");
    guide.style.top = "50%";
    document.body.appendChild(guide);
    const move = (e: PointerEvent) => {
      guide.style.top = `${e.clientY}px`;
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      guide.remove();
    };
  }, [settings.readingGuide]);

  // Panel: Esc to close, return focus to trigger, basic focus trap.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => !el.hasAttribute("disabled"));

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onClickOutside = (e: MouseEvent) => {
      if (
        panel &&
        !panel.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const closeAndRestore = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const fontPct = Math.round(settings.fontScale * 100);

  return (
    <>
      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="פתיחת תפריט נגישות"
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-brown)] text-white shadow-xl shadow-black/30 ring-2 ring-white/30 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-gold)]"
      >
        <AccessibilityIcon className="h-8 w-8" />
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-modal="true"
          aria-label="תפריט נגישות"
          dir="rtl"
          className="fixed bottom-24 right-6 z-[71] flex max-h-[80vh] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-white text-stone-900 shadow-2xl ring-1 ring-stone-200"
        >
          <div className="flex items-center justify-between gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3">
            <h2 className="flex items-center gap-2 text-base font-extrabold text-[var(--brand-brown-dark)]">
              <AccessibilityIcon className="h-5 w-5 text-[var(--brand-brown)]" />
              תפריט נגישות
            </h2>
            <button
              type="button"
              onClick={closeAndRestore}
              aria-label="סגירת תפריט הנגישות"
              className="grid h-8 w-8 place-items-center rounded-full text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-4">
            {/* Font size */}
            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-stone-500">
                גודל טקסט
              </legend>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    update({
                      fontScale: Math.max(
                        FONT_MIN,
                        Math.round((settings.fontScale - FONT_STEP) * 10) / 10
                      ),
                    })
                  }
                  disabled={settings.fontScale <= FONT_MIN}
                  aria-label="הקטנת גודל הטקסט"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-stone-200 bg-white text-lg font-bold text-stone-700 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A−
                </button>
                <span
                  className="flex-1 rounded-lg bg-stone-100 py-2 text-center text-sm font-bold tabular-nums"
                  aria-live="polite"
                >
                  {fontPct}%
                </span>
                <button
                  type="button"
                  onClick={() =>
                    update({
                      fontScale: Math.min(
                        FONT_MAX,
                        Math.round((settings.fontScale + FONT_STEP) * 10) / 10
                      ),
                    })
                  }
                  disabled={settings.fontScale >= FONT_MAX}
                  aria-label="הגדלת גודל הטקסט"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-stone-200 bg-white text-lg font-bold text-stone-700 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A+
                </button>
              </div>
            </fieldset>

            {/* Line spacing */}
            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-stone-500">
                ריווח שורות
              </legend>
              <div className="grid grid-cols-3 gap-2" role="group">
                {(
                  [
                    [0, "רגיל"],
                    [1, "בינוני"],
                    [2, "רחב"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update({ lineSpacing: value })}
                    aria-pressed={settings.lineSpacing === value}
                    className={
                      "rounded-lg border px-2 py-2 text-sm font-semibold transition-colors " +
                      (settings.lineSpacing === value
                        ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/15 text-[var(--brand-brown-dark)]"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50")
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Contrast */}
            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-stone-500">
                ניגודיות צבעים
              </legend>
              <div className="grid grid-cols-3 gap-2" role="group">
                {(
                  [
                    ["none", "רגיל"],
                    ["dark", "כהה"],
                    ["light", "בהיר"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update({ contrast: value })}
                    aria-pressed={settings.contrast === value}
                    className={
                      "rounded-lg border px-2 py-2 text-sm font-semibold transition-colors " +
                      (settings.contrast === value
                        ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/15 text-[var(--brand-brown-dark)]"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50")
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Toggles */}
            <fieldset>
              <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-stone-500">
                התאמות תצוגה
              </legend>
              <div className="grid grid-cols-1 gap-2">
                <ToggleButton
                  active={settings.grayscale}
                  label="גווני אפור"
                  onClick={() => update({ grayscale: !settings.grayscale })}
                />
                <ToggleButton
                  active={settings.highlightLinks}
                  label="הדגשת קישורים"
                  onClick={() =>
                    update({ highlightLinks: !settings.highlightLinks })
                  }
                />
                <ToggleButton
                  active={settings.highlightHeadings}
                  label="הדגשת כותרות"
                  onClick={() =>
                    update({ highlightHeadings: !settings.highlightHeadings })
                  }
                />
                <ToggleButton
                  active={settings.readableFont}
                  label="גופן קריא"
                  onClick={() => update({ readableFont: !settings.readableFont })}
                />
                <ToggleButton
                  active={settings.bigCursor}
                  label="סמן עכבר גדול"
                  onClick={() => update({ bigCursor: !settings.bigCursor })}
                />
                <ToggleButton
                  active={settings.stopMotion}
                  label="עצירת אנימציות"
                  onClick={() => update({ stopMotion: !settings.stopMotion })}
                />
                <ToggleButton
                  active={settings.readingGuide}
                  label="מדריך קריאה"
                  onClick={() => update({ readingGuide: !settings.readingGuide })}
                />
              </div>
            </fieldset>

            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-bold text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
            >
              איפוס הגדרות הנגישות
            </button>
          </div>

          <div className="border-t border-stone-200 bg-stone-50 px-4 py-3 text-center text-xs text-stone-500">
            <Link
              href="/accessibility"
              className="font-semibold text-[var(--brand-brown)] underline underline-offset-2 hover:text-[var(--brand-brown-dark)]"
            >
              להצהרת הנגישות המלאה
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
