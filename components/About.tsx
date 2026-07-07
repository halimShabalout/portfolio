import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { profile, education, languages } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-12 flex items-center gap-4">
        <span className="font-mono text-base text-accent">01</span>
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">About Me</h2>
        <span className="h-px flex-1 bg-border" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I enjoy solving real-world challenges through clean, maintainable code and scalable system design. From backend architecture to modern frontend interfaces, I focus on building reliable software that delivers an excellent user experience while continuously expanding my expertise in AI and modern web technologies.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 md:col-span-2">
          <Card className="p-5">
            <div className="mb-2 flex items-center gap-2 text-accent-pale">
              <GraduationCap size={18} />
              <span className="text-base font-medium">Education</span>
            </div>
            <p className="text-base font-semibold text-foreground">{education.school}</p>
            <p className="text-base text-muted-foreground">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/70">{education.dates}</p>
          </Card>

          <Card className="p-5">
            <div className="mb-3 flex items-center gap-2 text-accent-pale">
              <LanguagesIcon size={18} />
              <span className="text-base font-medium">Languages</span>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-base">
              {languages.map((l) => (
                <li key={l.name} className="text-muted-foreground">
                  {l.name}
                  <span className="block font-mono text-xs text-muted-foreground/70">{l.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
