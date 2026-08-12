"use client";

import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <Reveal className="mb-12 flex items-center gap-4">
        <span aria-hidden="true" className="font-mono text-sm text-accent">
          05
        </span>

        <h2
          id="achievements-title"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Achievements
        </h2>

        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </Reveal>

      <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
        {achievements.map((achievement) => (
          <motion.article
            key={achievement.text}
            variants={revealItem}
            className="flex gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
            >
              <Trophy size={16} />
            </span>

            <p className="text-[14.5px] leading-relaxed text-muted-foreground">
              {achievement.text}
            </p>
          </motion.article>
        ))}
      </RevealGroup>
    </section>
  );
}
