import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">03</span>
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Experience</h2>
        <span className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="relative border-l border-border pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.company} delay={i * 0.06} className="pb-12 last:pb-0">
            <span className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-background bg-accent-pale">
              <Briefcase size={8} className="text-background opacity-0" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
              <span className="font-mono text-xs text-muted-foreground/70">{job.dates}</span>
            </div>
            <p className="mb-3 text-sm italic text-muted-foreground">
              {job.company} &mdash; {job.location}
            </p>
            <ul className="space-y-1.5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-pale" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
