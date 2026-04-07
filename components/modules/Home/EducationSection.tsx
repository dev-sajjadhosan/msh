"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Nilphamari Govt. College",
    period: "2018 — 2020",
    location: "Nilphamari, Bangladesh",
    description:
      "Completed the Business Studies curriculum. Currently on a self-directed path toward Computer Engineering, building the professional foundation necessary to resume formal academic degrees.",
    achievements: ["Self-Taught Engineering", "Pivot to Full-Stack"],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-32 px-6 md:px-14 border-t border-border bg-bg"
    >
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">05</span>
        Education
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="eg grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-24">
        <div className="es">
          <div className="st text-[clamp(2.8rem,7vw,4rem)] font-extrabold tracking-[-0.035em] leading-none mb-6">
            <div className="tl block overflow-hidden">
              <span>
                Acade<span className="text-accent italic">mic</span>
              </span>
            </div>
            <div className="tl block overflow-hidden">
              <span>Pathway</span>
            </div>
          </div>
          <p className="sd font-mono text-[0.75rem] text-muted leading-[1.8] max-w-[400px] mb-10">
            My journey is defined by resilience. While my formal studies were
            paused due to family responsibilities, I have dedicated myself to a
            rigorous self-taught curriculum in Computer Engineering to build a
            future in the tech industry.
          </p>

          <div className="stats grid grid-cols-1 gap-4">
            <div className="stat p-8 border border-accent/20 bg-accent/5 rounded-3xl flex items-center gap-6">
              <div className="p-4 bg-accent text-black rounded-2xl">
                <Award size={24} />
              </div>
              <div>
                <div className="font-mono text-sm text-accent tracking-widest uppercase mb-1">
                  Continuous Learning
                </div>
                <p className="font-mono text-xs text-muted">
                  Constantly updating my knowledge with the latest industry
                  standards and certifications.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="exs space-y-12">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="ex group relative pl-8 md:pl-12 py-2"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-accent/30 transition-colors" />
              <div className="absolute left-[-4px] top-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 shadow-[0_0_10px_rgba(200,255,0,0.5)]" />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <span className="font-mono text-[0.6rem] text-accent border border-accent/20 px-3 py-1 rounded-full uppercase tracking-tighter flex items-center gap-2">
                   <Calendar size={10} /> {edu.period}
                </span>
                <span className="font-mono text-[0.6rem] text-muted uppercase tracking-tighter flex items-center gap-2">
                   <MapPin size={10} /> {edu.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-accent transition-colors">
                {edu.degree}
              </h3>
              <div className="font-mono text-sm text-accent/80 mb-4 flex items-center gap-2">
                <GraduationCap size={14} /> {edu.institution}
              </div>
              
              <p className="font-mono text-[0.78rem] text-neutral-500 leading-relaxed mb-6 max-w-2xl">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((ach) => (
                  <span key={ach} className="px-3 py-1 bg-white/2 border border-white/5 rounded font-mono text-[0.55rem] text-white/50 lowercase">
                    {ach}
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
