"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const links = [
    { label: t("about"), href: "#about" },
    { label: t("stack"), href: "#stack" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("achievements"), href: "#achievements" },
    { label: t("contact"), href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group relative flex flex-col w-fit text-foreground"
        >
          <span className="text-sm font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            {t("brandName")}
          </span>

          <span className="mt-1 flex items-center gap-0.5">
            <span className="h-0.5 w-7 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
            <span className="h-px w-4 bg-border" />
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
          <LangToggle />

          <Button asChild size="sm">
            <a href="/Halim_Shabalout_CV.pdf" download>
              <Download size={15} />
              {t("resume")}
            </a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LangToggle />

          <button
            type="button"
            aria-label={t("toggleMenu")}
            aria-expanded={open}
            className="text-foreground"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border bg-background/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            <Button asChild size="sm" className="w-fit">
              <a href="/Halim_Shabalout_CV.pdf" download>
                <Download size={15} />
                {t("resume")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
