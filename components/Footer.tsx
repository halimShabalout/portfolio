"use client";

import { useTranslations } from "next-intl";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");

  const getTranslation = (key: string, fallback: string): string => {
    return t.has(key) ? t(key) : fallback;
  };

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground/70 sm:flex-row">
        <p dir="ltr">
          &copy; {year} {getTranslation("name", profile.name)}.{" "}
          {getTranslation("copyright", "All rights reserved.")}
        </p>

        <p className="font-mono">
          {getTranslation("builtWith", "Built with Next.js & Tailwind CSS")}
        </p>
      </div>
    </footer>
  );
}
