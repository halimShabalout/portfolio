"use client";

import { skills } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="stack" className="grid-texture border-y border-border bg-muted/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">02</span>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Tech Stack</h2>
          <span className="h-px flex-1 bg-border" />
        </Reveal>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {skills.map((group) => (
            <motion.div key={group.category} variants={revealItem}>
              <Card className="h-full p-5 transition-colors hover:border-accent/50">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-pale">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="mono">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
