"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const t = useTranslations("Contact");

  const getTranslation = (key: string, fallback: string): string => {
    return t.has(key) ? t(key) : fallback;
  };

  const getDynamicTranslation = (
    key: string,
    fallback: string,
    values: Record<string, string>,
  ): string => {
    return t.has(key) ? t(key, values) : fallback;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-75 w-150 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          06 &mdash; {getTranslation("label", "Contact")}
        </span>

        <h2
          id="contact-title"
          className="mt-3 text-3xl font-bold text-foreground sm:text-4xl"
        >
          {getTranslation("title", "Let's build something")}{" "}
          <span className="text-gradient">
            {getTranslation("highlight", "great together")}
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground">
          {getTranslation(
            "description",
            "Open to full-time software engineering roles. If you're hiring, or just want to talk about a project, my inbox is open.",
          )}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a
              href={`mailto:${profile.email}`}
              aria-label={getDynamicTranslation(
                "emailLabel",
                `Send email to ${profile.email}`,
                { email: profile.email },
              )}
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <a
            href={profile.github}
            dir="ltr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getTranslation(
              "githubLabel",
              "Visit Halim Shabalout on GitHub",
            )}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            dir="ltr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getTranslation(
              "linkedinLabel",
              "Visit Halim Shabalout on LinkedIn",
            )}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>

          <span dir="ltr" className="flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            {profile.phone}
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            {getTranslation("location", profile.location)}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
