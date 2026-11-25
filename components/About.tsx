
"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { education, languages, profile } from "@/lib/data";
import type { LanguageItem, TranslatedEducation} from "@/lib/types";

export default function About() {
  const t = useTranslations("About");

  // Translation fallback helper
  const getTranslation = (key: string, fallback: string): string => {
    return t.has(key) ? t(key) : fallback;
  };

  // Education translations
  const translatedEducation = t.has("education")
    ? (t.raw("education") as Partial<TranslatedEducation>)
    : undefined;

  // Languages translations
  const translatedLanguages = t.has("languages.items")
    ? (t.raw("languages.items") as LanguageItem[])
    : undefined;

  const languageItems = Array.isArray(translatedLanguages)
    ? translatedLanguages
    : languages;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <Reveal className="mb-12 flex items-center gap-4">
        <span aria-hidden="true" className="font-mono text-base text-accent">
          01
        </span>

        <h2
          id="about-title"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          {getTranslation("title", "About")}
        </h2>

        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="text-base leading-relaxed text-muted-foreground">
            <p>{getTranslation("summary", profile.summary)}</p>

            <p className="mt-6">
              {getTranslation("description", profile.heroBio)}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 md:col-span-2">
          <Card className="p-5">
            <div className="mb-2 flex items-center gap-2 text-accent-pale">
              <GraduationCap size={18} aria-hidden="true" />

              <h3 className="text-base font-medium">
                {translatedEducation?.title ||
                  (t.has("education.title")
                    ? t("education.title")
                    : "Education")}
              </h3>
            </div>

            <p className="text-base font-semibold text-foreground">
              {translatedEducation?.school || education.school}
            </p>

            <p className="text-base text-muted-foreground">
              {translatedEducation?.degree || education.degree}
            </p>

            <p className="mt-1 font-mono text-xs text-muted-foreground/70">
              {translatedEducation?.dates || education.dates}
            </p>
          </Card>

          <Card className="p-5">
            <div className="mb-3 flex items-center gap-2 text-accent-pale">
              <LanguagesIcon size={18} aria-hidden="true" />

              <h3 className="text-base font-medium">
                {t.has("languages.title")
                  ? t("languages.title")
                  : "Languages"}
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-y-2 text-base">
              {languageItems.map((language) => (
                <li key={language.name} className="text-muted-foreground">
                  <span>{language.name}</span>

                  <span className="block font-mono text-xs text-muted-foreground/70">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
