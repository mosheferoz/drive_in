import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של אתר דרייב אין ס.ע – רמת ההנגשה, אופן השימוש בתפריט הנגישות, מגבלות ידועות ופרטי רכז הנגישות לפנייה ובקשות.",
  alternates: { canonical: "/accessibility" },
};

const PHONE = "050-3428013";
const PHONE_TEL = "+972503428013";
const EMAIL = "Driveinltd@gmail.com";
const ADDRESS = "רחוב אנוש 2, ראשון לציון";
const UPDATED = "28 במאי 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-extrabold text-[var(--brand-brown-dark)]">
        {title}
      </h2>
      <div className="gold-divider mt-3 w-16" />
      <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
        {children}
      </div>
    </section>
  );
}

export default function AccessibilityStatement() {
  return (
    <main id="main-content" className="flex-1 bg-stone-50">
      {/* Top bar */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="דרייב אין – חזרה לדף הבית">
            <Image
              src="/images/logo.JPG"
              alt="Drive In ס.ע"
              width={140}
              height={56}
              className="h-11 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="rounded-md bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold)]">
          נגישות
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
          הצהרת נגישות
        </h1>
        <div className="gold-divider mt-4 w-24" />
        <p className="mt-5 text-[17px] leading-relaxed text-stone-700">
          חברת <strong>דרייב אין ס.ע בע״מ</strong> רואה חשיבות רבה במתן שירות
          שוויוני לכלל הלקוחות, ופועלת להנגשת האתר שלה כדי לאפשר שימוש נוח ויעיל
          גם לאנשים עם מוגבלות. אנו משקיעים מאמצים ומשאבים בהנגשת האתר מתוך
          אמונה שלכל אדם מגיעה הזכות לחיות בכבוד, בשוויון ובעצמאות.
        </p>

        <Section title="רמת ההנגשה באתר">
          <p>
            האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
            נגישות לשירות), התשע״ג–2013, ועומד בדרישות התקן הישראלי{" "}
            <strong>ת״י 5568</strong> לנגישות תכנים באינטרנט ברמה{" "}
            <strong>AA</strong>, המבוסס על הנחיות <strong>WCAG 2.0</strong>{" "}
            הבינלאומיות.
          </p>
        </Section>

        <Section title="כיצד עובד תפריט הנגישות באתר">
          <p>
            בכל עמודי האתר מופיע <strong>כפתור נגישות</strong> בפינה התחתונה.
            לחיצה עליו פותחת תפריט המאפשר להתאים את האתר לצרכים אישיים. בין
            ההתאמות הקיימות:
          </p>
          <ul className="list-disc space-y-1.5 pr-5">
            <li>הגדלה והקטנה של גודל הטקסט</li>
            <li>הגדלת ריווח השורות</li>
            <li>ניגודיות צבעים גבוהה (תצוגה כהה או בהירה)</li>
            <li>תצוגה בגווני אפור</li>
            <li>הדגשת קישורים והדגשת כותרות</li>
            <li>החלפה לגופן קריא</li>
            <li>סמן עכבר מוגדל</li>
            <li>עצירת אנימציות ותנועה באתר</li>
            <li>מדריך קריאה לליווי הטקסט</li>
          </ul>
          <p>
            ההגדרות נשמרות בדפדפן וממשיכות לפעול גם במעבר בין עמודי האתר. ניתן
            לאפס את כל ההגדרות בכל עת באמצעות כפתור “איפוס הגדרות הנגישות”
            שבתפריט.
          </p>
          <p>
            בנוסף, האתר תומך בניווט מלא באמצעות מקלדת (מקש <kbd>Tab</kbd>{" "}
            למעבר בין הרכיבים ו־<kbd>Enter</kbd> להפעלה), כולל קישור “דילוג
            לתוכן” המופיע בלחיצה על <kbd>Tab</kbd> בתחילת העמוד, ומותאם לטכנולוגיות
            מסייעות וקוראי מסך.
          </p>
        </Section>

        <Section title="מגבלות ידועות בנגישות">
          <p>
            למרות מאמצינו להנגיש את כלל הדפים והרכיבים באתר, ייתכן שיימצאו חלקים
            או תכנים שטרם הונגשו במלואם, או שאינם נגישים בשל מגבלה טכנולוגית.
            אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף כחלק ממחויבותנו לאפשר
            שימוש לכלל האוכלוסייה.
          </p>
          <p>
            אם נתקלתם ברכיב או בתוכן שאינו נגיש, נשמח שתפנו אלינו ונעשה כל מאמץ
            לתקן זאת בהקדם.
          </p>
        </Section>

        <Section title="פניות בנושא נגישות – רכז הנגישות">
          <p>
            נתקלתם בבעיה בנושא נגישות באתר? יש לכם הצעה לשיפור או בקשה? נשמח לקבל
            את פנייתכם. ניתן ליצור קשר עם רכז הנגישות של החברה בכל אחת מהדרכים
            הבאות:
          </p>
          <ul className="mt-2 space-y-2.5">
            <li>
              <span className="font-semibold text-stone-900">טלפון:</span>{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-semibold text-[var(--brand-brown)] underline underline-offset-2"
              >
                {PHONE}
              </a>
            </li>
            <li>
              <span className="font-semibold text-stone-900">דוא״ל:</span>{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-[var(--brand-brown)] underline underline-offset-2 break-all"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-stone-900">כתובת:</span>{" "}
              {ADDRESS}
            </li>
          </ul>
          <p className="text-sm text-stone-500">
            בפנייתכם נשמח שתפרטו את הבעיה שבה נתקלתם, את העמוד שבו אירעה, ואת
            סוג הדפדפן והמכשיר שבהם השתמשתם – פרטים אלו יסייעו לנו לטפל בפנייה
            במהירות וביעילות.
          </p>
        </Section>

        <Section title="עדכון ההצהרה">
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך {UPDATED}.</p>
        </Section>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-brown)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--brand-brown-dark)]"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </article>
    </main>
  );
}
