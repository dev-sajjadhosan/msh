"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Globe, Sparkles } from "lucide-react";

const CURRENT_FOCUS = [
  {
    role: "Independent Full-Stack Developer",
    company: "Freelance & Open Source",
    period: "2023 — Present",
    desc: "Dedicated to crafting high-end, performance-driven digital products. Currently focusing on building modern SaaS architectures, exploring advanced animation patterns, and contributing to the JavaScript ecosystem.",
    tech: ["Next.js", "TypeScript", "Node.js", "System Design"],
    link: "#"
  },
  {
    role: "Project Engineering",
    company: "Self-Initiatives",
    period: "Continuous",
    desc: "Developing a suite of specialized web tools (Censura, LinksNest, etc.) to solve real-world problems while maintaining a focus on premium user experience and technical excellence.",
    tech: ["Full-Stack", "UI/UX", "DevOps"],
    link: "#"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 md:px-14 border-t border-border">
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">06</span>
        Professional
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="eg grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-24">
        <div className="es">
          <div className="st text-[clamp(2.8rem,7vw,4rem)] font-extrabold tracking-[-0.035em] leading-none mb-6">
            <div className="tl block overflow-hidden"><span>Curr<span className="text-accent italic">ent</span></span></div>
            <div className="tl block overflow-hidden"><span>Focus</span></div>
          </div>
          <p className="sd font-mono text-[0.75rem] text-muted leading-[1.8] max-w-[400px] mb-10">
            While I'm constantly evolving, my focus remains on building production-grade applications that push the boundaries of what's possible on the web.
          </p>
          
          <div className="stats grid grid-cols-2 gap-4">
             <div className="stat p-6 border border-border bg-card rounded-2xl">
                <div className="text-3xl font-extrabold text-white mb-2">15+</div>
                <div className="font-mono text-[0.55rem] text-muted uppercase tracking-widest">Completed Projects</div>
             </div>
             <div className="stat p-6 border border-border bg-card rounded-2xl text-accent">
                <div className="text-3xl font-extrabold mb-2">∞</div>
                <div className="font-mono text-[0.55rem] text-muted uppercase tracking-widest">Commitment to Quality</div>
             </div>
          </div>
          <div className="mt-13 p-11 border border-dashed border-accent/20 bg-accent/5 rounded-3xl flex items-center gap-6">
             <div className="p-5 bg-accent text-black rounded-2xl">
                <Sparkles size={24} />
             </div>
             <div>
                <div className="font-mono text-sm text-accent tracking-widest uppercase mb-1">Open for Collaboration</div>
                <p className="font-mono text-sm text-muted">Currently available for freelance projects and full-time opportunities.</p>
             </div>
          </div>
        </div>

        <div className="exs space-y-12">
          {CURRENT_FOCUS.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="ex group relative pl-8 md:pl-12 py-2"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-accent/30 transition-colors" />
              <div className="absolute left-[-4px] top-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 shadow-[0_0_10px_rgba(200,255,0,0.5)]" />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <span className="font-mono text-[0.6rem] text-accent border border-accent/20 px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-2">
                   <Calendar size={10} /> {exp.period}
                </span>
                <span className="font-mono text-[0.6rem] text-muted uppercase tracking-tighter flex items-center gap-2">
                   <Globe size={10} /> {exp.company}
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-accent transition-colors">
                {exp.role}
              </h3>
              
              <p className="font-mono text-[0.78rem] text-muted leading-relaxed mb-8 max-w-2xl">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/2 border border-white/5 rounded font-mono text-[0.55rem] text-white/50 lowercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
