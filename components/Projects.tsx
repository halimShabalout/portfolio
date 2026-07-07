"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Projects() {

  return (
    <section id="projects" className="grid-texture border-y border-border bg-muted/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">04</span>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Featured Projects</h2>
          <span className="h-px flex-1 bg-border" />
        </Reveal>

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {projects.map((p) => {
            const isActive = ["Live", "Active Development"].includes(p.status);

            const card = (
              <motion.div
                variants={revealItem}
                whileHover={{ y: -4 }}
                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-colors ${p.href
                  ? "border-border bg-card hover:border-accent/50"
                  : "border-accent/30 bg-gradient-to-br from-accent/10 to-transparent"
                  }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
                  {p.href ? (
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted-foreground/60 transition-colors group-hover:text-accent"
                    />
                  ) : (
                    <Sparkles size={18} className="shrink-0 text-amber" />
                  )}
                </div>

                <p className="mb-4 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span
                  className={`inline-flex w-fit items-center gap-1.5 text-xs font-medium ${isActive ? "text-mint" : "text-amber"
                    }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-mint" : "bg-amber"
                      }`}
                  />
                  {p.status}
                </span>
              </motion.div>
            );

            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="block h-full">
                {card}
              </a>
            ) : (
              <div key={p.name} className="h-full">
                {card}
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
