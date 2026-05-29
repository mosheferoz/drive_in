// Single source of truth for SEO. No production domain exists yet — update
// SITE_URL once the domain is live and canonical/OG/sitemap URLs follow.
export const SITE_URL = "https://www.drivein-sa.co.il";

export const siteConfig = {
  name: "דרייב אין ס.ע",
  legalName: "דרייב אין ס.ע בע״מ",
  alternateName: "Drive In S.O LTD",
  description:
    'דרייב אין – חברה ישראלית מובילה בקנייה ומכירה של שרידי רכבים, משאיות, רכבים מסחריים ואופנועים לתיקון ולפירוק. מעל 15 שנות ניסיון, 20,000 מ"ר מתחם תפעולי, פינוי מיידי ותשלום במקום.',
  phone: "+972503428013",
  email: "Driveinltd@gmail.com",
  streetAddress: "רחוב אנוש 2",
  city: "ראשון לציון",
  ogImage: "/images/hero_section.png",
  logo: "/images/logo.JPG",
} as const;

// schema.org AutoDealer — a salvage-vehicle dealership. Geo coordinates and
// opening hours are intentionally omitted rather than guessed; add them once
// the exact values are known.
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": `${SITE_URL}/#business`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.alternateName,
  description: siteConfig.description,
  url: SITE_URL,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${SITE_URL}${siteConfig.ogImage}`,
  logo: `${SITE_URL}${siteConfig.logo}`,
  priceRange: "₪₪",
  currenciesAccepted: "ILS",
  paymentAccepted: "מזומן, העברה בנקאית",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    addressCountry: "IL",
  },
  areaServed: { "@type": "Country", name: "ישראל" },
  knowsAbout: [
    "קניית שרידי רכב",
    "קניית רכב לפירוק",
    "קניית משאיות",
    "קניית רכבים מסחריים",
    "קניית אופנועים",
    "סילוק רכבים לגריטה",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  inLanguage: "he-IL",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export function buildFaqJsonLd(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
