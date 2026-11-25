"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
] as const;

export function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLanguageChange = (
    language: (typeof languages)[number]["code"],
  ) => {
    setOpen(false);

    if (language === locale) return;

    router.replace(pathname, { locale: language });
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-2 rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <Languages size={17} />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-36 rounded-lg border border-border bg-background p-1 shadow-lg"
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              role="menuitemradio"
              aria-checked={locale === item.code}
              onClick={() => handleLanguageChange(item.code)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <span>{item.label}</span>

              {locale === item.code && (
                <Check size={15} className="text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
