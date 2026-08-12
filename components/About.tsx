import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { profile, education, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/ui/card";

export default function About() {
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
          About Me
        </h2>

        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="text-base leading-relaxed text-muted-foreground">
            <p>{profile.summary}</p>

            <p className="mt-6">
              I enjoy solving real-world challenges through clean, maintainable
              code and scalable system design. From backend architecture to
              modern frontend interfaces, I focus on building reliable software
              that delivers an excellent user experience while continuously
              expanding my expertise in AI and modern web technologies.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 md:col-span-2">
          <Card className="p-5">
            <div className="mb-2 flex items-center gap-2 text-accent-pale">
              <GraduationCap size={18} aria-hidden="true" />

              <h3 className="text-base font-medium">Education</h3>
            </div>

            <p className="text-base font-semibold text-foreground">
              {education.school}
            </p>

            <p className="text-base text-muted-foreground">
              {education.degree}
            </p>

            <p className="mt-1 font-mono text-xs text-muted-foreground/70">
              {education.dates}
            </p>
          </Card>

          <Card className="p-5">
            <div className="mb-3 flex items-center gap-2 text-accent-pale">
              <LanguagesIcon size={18} aria-hidden="true" />

              <h3 className="text-base font-medium">Languages</h3>
            </div>

            <ul className="grid grid-cols-2 gap-y-2 text-base">
              {languages.map((language) => (
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
