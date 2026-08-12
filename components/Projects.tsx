"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="grid-texture border-y border-border bg-muted/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex items-center gap-4">
          <span aria-hidden="true" className="font-mono text-sm text-accent">
            04
          </span>

          <h2
            id="projects-title"
            className="text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Featured Projects
          </h2>

          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </Reveal>

        <RevealGroup
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {projects.map((project) => {
            const isActive = ["Live", "Active Development"].includes(
              project.status,
            );

            const card = (
              <motion.div
                variants={revealItem}
                whileHover={{ y: -4 }}
                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                  project.href
                    ? "border-border bg-card hover:border-accent/50"
                    : "border-accent/30 bg-gradient-to-br from-accent/10 to-transparent"
                }`}
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-foreground">
                    {project.name}
                  </h3>

                  {project.href ? (
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground/60 transition-colors group-hover:text-accent"
                    />
                  ) : (
                    <Sparkles
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-amber"
                    />
                  )}
                </div>

                <p className="mb-4 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="font-mono text-[11px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span
                  className={`inline-flex w-fit items-center gap-1.5 text-xs font-medium ${
                    isActive ? "text-mint" : "text-amber"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-mint" : "bg-amber"
                    }`}
                  />

                  {project.status}
                </span>
              </motion.div>
            );

            if (project.href) {
              return (
                <article key={project.name} className="h-full">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} project`}
                    className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {card}
                  </a>
                </article>
              );
            }

            return (
              <article key={project.name} className="h-full">
                {card}
              </article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
