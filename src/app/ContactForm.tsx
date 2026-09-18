"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgzqwdb";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  officePhone,
  officePhoneTel,
}: {
  officePhone: string;
  officePhoneTel: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-7 md:p-9 rounded-2xl shadow-2xl text-stone-900 text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-brown)] mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
            aria-hidden
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold">תודה רבה!</h3>
        <p className="mt-3 text-stone-600 leading-relaxed max-w-xs">
          הפרטים התקבלו בהצלחה. נחזור אליכם תוך זמן קצר עם הצעת מחיר הוגנת.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md bg-[var(--brand-brown)] px-6 py-3 font-semibold text-white hover:bg-[var(--brand-brown-dark)] transition-colors"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-7 md:p-9 rounded-2xl shadow-2xl space-y-4 text-stone-900"
    >
      <h3 className="text-xl font-extrabold">השאירו פרטים ונחזור אליכם</h3>
      <div className="gold-divider w-16" />

      {/* Subject line for the email Formspree sends to the inbox */}
      <input type="hidden" name="_subject" value="פנייה חדשה מאתר דרייב אין" />
      {/* Honeypot field to reduce spam (hidden from real users) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

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
          <option value="רכב פרטי / שרידים">רכב פרטי / שרידים</option>
          <option value="משאית">משאית</option>
          <option value="רכב מסחרי / טנדר">רכב מסחרי / טנדר</option>
          <option value="אופנוע / קטנוע">אופנוע / קטנוע</option>
          <option value="רכב לגריטה">רכב לגריטה</option>
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
        disabled={status === "submitting"}
        className="w-full rounded-md gold-surface px-6 py-3.5 font-bold text-stone-900 text-base transition-[filter] shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting"
          ? "שולח..."
          : "שלחו פרטים – נחזור אליכם תוך זמן קצר"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center font-semibold">
          אירעה שגיאה בשליחה. נסו שוב או חייגו ישירות:{" "}
          <a href={`tel:${officePhoneTel}`} className="underline">
            {officePhone}
          </a>
        </p>
      )}

      <p className="text-xs text-stone-500 text-center">
        או חייגו ישירות:{" "}
        <a
          href={`tel:${officePhoneTel}`}
          className="font-semibold text-[var(--brand-brown)]"
        >
          {officePhone}
        </a>
      </p>
    </form>
  );
}
