"use client";

import { Briefcase, ExternalLink, FolderKanban } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/data";
import type { TranslatedJob } from "@/lib/types";

type ProjectType = "product" | "personal" | "private";

type ExperienceProject = {
  name: string;
  description: string;
  url: string | null;
  type: ProjectType;
};

type ExtendedTranslatedJob = TranslatedJob & {
  projects?: ExperienceProject[];
};

const projectTypeFallback: Record<ProjectType, string> = {
  product: "Product",
  personal: "Personal Project",
  private: "Private Project",
};

const isProjectType = (type: string): type is ProjectType =>
  type in projectTypeFallback;

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      {/* Section Heading */}
      <Reveal className="mb-12 flex items-center gap-4">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          03
        </span>

        <h2
          id="experience-title"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          {t("title")}
        </h2>

        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </Reveal>

      {/* Experience Timeline */}
      <div className="relative border-l border-border pl-8">
        {experience.map((job, index) => {
          const jobKey = {
            "Freelance Developer & Independent Projects": "freelance",
            "Software Engineer": "aarti",
            "Project Manager": "paracim",
            "Full-Stack Developer": "logicalDefense",
          }[job.role];

          const translatedJob = jobKey
            ? (t.raw(`jobs.${jobKey}`) as ExtendedTranslatedJob)
            : undefined;

          // Translated content with data fallback
          const role = translatedJob?.role || job.role;
          const company = translatedJob?.company || job.company;
          const location = translatedJob?.location || job.location;
          const dates = translatedJob?.dates || job.dates;
          const points = translatedJob?.points || job.points;

          // Company and project links come from lib/data.ts
          const website = job.website;

          // Projects can be translated or fall back to lib/data.ts
          const projects = translatedJob?.projects || job.projects;

          return (
            <Reveal
              key={`${job.role}-${job.company}`}
              delay={index * 0.06}
              className="pb-12 last:pb-0"
            >
              <article className="relative">
                {/* Timeline Marker */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.05rem] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-accent-pale"
                >
                  <Briefcase size={8} className="text-background opacity-0" />
                </span>

                {/* Role and Dates */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {role}
                  </h3>

                  <span className="font-mono text-xs text-muted-foreground/70">
                    {dates}
                  </span>
                </div>

                {/* Company and Location */}
                <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm italic text-muted-foreground">
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company} website (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      {company}
                      <ExternalLink size={12} className="shrink-0 not-italic" />
                    </a>
                  ) : (
                    <span>{company}</span>
                  )}

                  <span aria-hidden="true">&mdash;</span>
                  <span>{location}</span>
                </div>

                {/* Responsibilities and Achievements */}
                <ul className="space-y-1.5">
                  {points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-pale"
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Related Projects */}
                {projects && projects.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <FolderKanban size={15} className="text-accent" />

                      <span>
                        {t.has("projectsTitle")
                          ? t("projectsTitle")
                          : "Related Projects"}
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {projects.map((project) => (
                        <div
                          key={project.name}
                          className="rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-accent/30"
                        >
                          {/* Project Name and Type */}
                          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-foreground">
                              {project.url ? (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                                >
                                  {project.name}
                                  <ExternalLink
                                    size={12}
                                    className="shrink-0"
                                  />
                                </a>
                              ) : (
                                project.name
                              )}
                            </h4>

                            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                              {t.has(`projectTypes.${project.type}`)
                                ? t(`projectTypes.${project.type}`)
                                : isProjectType(project.type)
                                  ? projectTypeFallback[project.type]
                                  : project.type}
                            </span>
                          </div>

                          {/* Project Description */}
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
