import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <Reveal className="mb-12 flex items-center gap-4">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          03
        </span>

        <h2
          id="experience-title"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Experience
        </h2>

        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="relative border-l border-border pl-8">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.role}-${job.company}`}
            delay={index * 0.06}
            className="pb-12 last:pb-0"
          >
            <article className="relative">
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-accent-pale"
              >
                <Briefcase size={8} className="text-background opacity-0" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                </h3>

                <span className="font-mono text-xs text-muted-foreground/70">
                  {job.dates}
                </span>
              </div>

              <p className="mb-3 text-sm italic text-muted-foreground">
                {job.company} &mdash; {job.location}
              </p>

              <ul className="space-y-1.5">
                {job.points.map((point) => (
                  <li
                    key={point}
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
