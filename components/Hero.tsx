"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-texture relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium text-mint"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {profile.status} &middot; Jeddah, KSA
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-xl font-medium text-accent-pale sm:text-2xl">
            {profile.title} &middot; {profile.subtitle}
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {profile.heroBio}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/Halim_Shabalout_CV.pdf" download>
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* terminal signature — always dark, in both themes */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-accent/30 bg-navy-900 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-navy-600 bg-navy-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-[#6e93b8]">profile.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-[#cfe0ee]">
              <code>
                <span className="text-[#e8a23d]">const</span> engineer = {"{"}
                {"\n"}
                {"  "}name: <span className="text-[#6fcf97]">&quot;Halim Shabalout&quot;</span>,{"\n"}
                {"  "}role: <span className="text-[#6fcf97]">&quot;Full-Stack Engineer&quot;</span>,{"\n"}
                {"  "}experience: <span className="text-[#6fcf97]">&quot;4+ years&quot;</span>,{"\n"}
                {"  "}stack: [<span className="text-[#6fcf97]">&quot;React&quot;</span>,{" "}
                <span className="text-[#6fcf97]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[#6fcf97]">&quot;NestJS&quot;</span>],{"\n"}
                {"  "}location: <span className="text-[#6fcf97]">&quot;Jeddah, KSA&quot;</span>,{"\n"}
                {"  "}status: <span className="text-[#6fcf97]">&quot;Open to work&quot;</span>,{"\n"}
                {"};"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
