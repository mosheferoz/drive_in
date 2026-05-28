import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Accessibility from "./Accessibility";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "דרייב אין ס.ע | קונים שרידי רכבים, משאיות, מסחריות ואופנועים",
  description:
    "דרייב אין – חברה ישראלית מובילה בקנייה ומכירה של שרידי רכבים, משאיות, רכבים מסחריים ואופנועים לתיקון ולפירוק. מעל 15 שנות ניסיון, 20,000 מ\"ר מתחם תפעולי, פינוי מיידי ותשלום במקום.",
  keywords: [
    "קניית שרידי רכב",
    "קניית רכב לפירוק",
    "קניית משאיות",
    "קניית אופנועים",
    "דרייב אין",
    "Drive In",
    "רכב שרידים",
    "רכבים מסחריים",
  ],
};

// Applies persisted accessibility settings to <html> before paint, so users
// who rely on them never see a flash of the default styling on load/navigation.
// Mirror this with applySettings() in Accessibility.tsx.
const a11yBootScript = `(function(){try{var s=JSON.parse(localStorage.getItem('drivein-a11y')||'{}');var r=document.documentElement,c=r.classList;if(s.fontScale)r.style.fontSize=Math.round(s.fontScale*100)+'%';c.toggle('acc-contrast-dark',s.contrast==='dark');c.toggle('acc-contrast-light',s.contrast==='light');c.toggle('acc-grayscale',!!s.grayscale);c.toggle('acc-links',!!s.highlightLinks);c.toggle('acc-headings',!!s.highlightHeadings);c.toggle('acc-readable',!!s.readableFont);c.toggle('acc-cursor',!!s.bigCursor);c.toggle('acc-no-motion',!!s.stopMotion);c.toggle('acc-spacing-1',s.lineSpacing===1);c.toggle('acc-spacing-2',s.lineSpacing===2);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-stone-900">
        <script dangerouslySetInnerHTML={{ __html: a11yBootScript }} />

        <a href="#main-content" className="skip-link">
          דילוג לתוכן הראשי
        </a>

        {/* Page content. Visual a11y filters (grayscale/contrast) are scoped to
            this wrapper, so the fixed buttons below stay anchored to the viewport. */}
        <div id="acc-canvas" className="flex flex-1 flex-col">
          {children}
        </div>

        {/* Floating actions — outside #acc-canvas so they are never re-based by
            a CSS filter (which would break position:fixed). */}
        <a
          href="https://wa.me/972503428013"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="צרו קשר בוואטסאפ"
          className="fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.518 5.275l-.999 3.648 3.97-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </a>

        <Accessibility />
      </body>
    </html>
  );
}
