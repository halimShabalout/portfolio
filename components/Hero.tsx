
"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const t = useTranslations("Hero");

  const getTranslation = (key: string, fallback: string): string => {
    return t.has(key) ? t(key) : fallback;
  };

  const name = getTranslation("name", profile.name);
  const title = getTranslation("title", profile.title);
  const subtitle = getTranslation("subtitle", profile.subtitle);
  const location = getTranslation("location", profile.location);
  const status = getTranslation("status", profile.status);
  const heroBio = getTranslation("heroBio", profile.heroBio);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grid-texture relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-105 w-105 rounded-full bg-accent/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-[320px] rounded-full bg-accent/10 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium text-mint"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-mint"
            />
            {status} &middot; {location}
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={item}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-medium text-accent-pale sm:text-2xl"
          >
            {title} &middot; {subtitle}
          </motion.p>

          <motion.p
            variants={item}
            dir="auto"
            className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground"
          >
            {heroBio}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#contact">{t("letsTalk")}</a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a
                href="/Halim_Shabalout_CV.pdf"
                download
                aria-label={t("downloadLabel")}
              >
                <Download size={16} aria-hidden="true" />
                {t("downloadCV")}
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("githubLabel")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={20} aria-hidden="true" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedinLabel")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label={t("emailLabel")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal signature */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          aria-hidden="true"
        >
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-accent/30 bg-navy-900 shadow-2xl shadow-black/40">
            {/* Terminal Header */}
            <div
              dir="ltr"
              className="flex items-center gap-2 border-b border-navy-600 bg-navy-800 px-4 py-3"
            >
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />

              <span className="ml-3 font-mono text-xs text-[#6e93b8]">
                profile.ts
              </span>
            </div>

            {/* Terminal Code */}
            <pre
              dir="ltr"
              className="overflow-x-auto p-5 text-left font-mono text-[13px] leading-7 text-[#cfe0ee]"
            >
              <code>
                <span className="text-[#e8a23d]">const</span> engineer = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-[#6fcf97]">&quot;{name}&quot;</span>,
                {"\n"}
                {"  "}role:{" "}
                <span className="text-[#6fcf97]">&quot;{title}&quot;</span>,
                {"\n"}
                {"  "}experience:{" "}
                <span className="text-[#6fcf97]">
                  &quot;{getTranslation("yearsOfExperience", profile.yearsOfExperience)}&quot;
                </span>
                ,
                {"\n"}
                {"  "}stack: [
                <span className="text-[#6fcf97]">&quot;React&quot;</span>,{" "}
                <span className="text-[#6fcf97]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[#6fcf97]">&quot;NestJS&quot;</span>],
                {"\n"}
                {"  "}location:{" "}
                <span className="text-[#6fcf97]">&quot;{location}&quot;</span>,
                {"\n"}
                {"  "}status:{" "}
                <span className="text-[#6fcf97]">&quot;{status}&quot;</span>,
                {"\n"}
                {"};"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={t("scrollLabel")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
      >
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
