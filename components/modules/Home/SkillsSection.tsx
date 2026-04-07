"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { scramble } from "@/lib/animations";

const SKILLS = [
  {
    icon: "⚡",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect UIs with Next.js, React, TypeScript, TanStack Query & Form, Tailwind, shadcn/ui. Animation-obsessed.",
  },
  {
    icon: "🛠",
    title: "Backend Architecture",
    description:
      "RESTful APIs with Node.js & Express. Auth with Better Auth. Data modelling with Prisma + PostgreSQL.",
  },
  {
    icon: "🔐",
    title: "Auth & Payments",
    description:
      "Full auth flows — email verify, sessions, JWT. Stripe subscriptions, purchases, webhooks, & billing portals.",
  },
  {
    icon: "🚀",
    title: "DevOps & Deployment",
    description:
      "Vercel deployments, env management, Edge Runtime, CI/CD workflows, and production monitoring.",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-14 bg-card border-t border-b border-border"
    >
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">02</span>
        What I Do
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="st text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold tracking-[-0.035em] leading-none mb-18">
        <div className="tl block overflow-hidden">
          <span>
            Core <span className="text-accent italic">Skills</span>
          </span>
        </div>
      </div>

      <div className="skw grid grid-cols-1 md:grid-cols-2 gap-px bg-border/55 rounded-2xl">
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const titleRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (titleRef.current) {
      scramble(titleRef.current, skill.title.toUpperCase(), 380);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, delay: index * 0.09 }}
      onMouseEnter={handleMouseEnter}
      className="sk group bg-bg p-10 md:p-12 flex gap-6 hover:bg-[#0a0a10] transition-colors relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]" />

      <div className="ski w-[50px] h-[50px] border border-border flex items-center justify-center text-[1.4rem] shrink-0 transition-colors group-hover:border-accent">
        {skill.icon}
      </div>

      <div>
        <h3
          ref={titleRef}
          className="sk-t text-[1.05rem] font-bold tracking-[-0.02em] mb-2 group-hover:text-accent transition-colors"
        >
          {skill.title}
        </h3>
        <p className="sk-d font-mono text-xs text-muted leading-[1.75]">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}
