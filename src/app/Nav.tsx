"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

// Order in source = order in RTL flex right-to-left.
// First item appears on the RIGHT, last item appears on the LEFT.
const NAV_ITEMS: NavItem[] = [
  { id: "top", label: "דף הבית" },
  { id: "about", label: "אודות" },
  { id: "services", label: "השירותים שלנו" },
  { id: "process", label: "תהליך העבודה" },
  { id: "faq", label: "שאלות נפוצות" },
  { id: "contact", label: "יצירת קשר" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Track which section is in view. The section closest to the top
    // of the viewport (offset by the sticky header) wins.
    const HEADER_OFFSET = 120;

    const onScroll = () => {
      let current = sections[0].id;
      const scrollPos = window.scrollY + HEADER_OFFSET;
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActiveId(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update the URL hash without an extra jump
        history.replaceState(null, "", `#${id}`);
      }
    };

  return (
    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-stone-700">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleClick(item.id)}
            className={
              isActive
                ? "text-[var(--brand-brown)] border-b-2 border-[var(--brand-gold)] pb-1 transition-colors"
                : "hover:text-[var(--brand-brown)] border-b-2 border-transparent pb-1 transition-colors"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
