"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { scramble } from "@/lib/animations";
import { gsap } from "gsap";
import {
  X,
  ExternalLink,
  Play,
  Link as Github,
  Rocket,
  BookOpen,
  Target,
  AlertCircle,
} from "lucide-react";
import { magneticEffect } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const PROJECTS = [
  {
    id: "01",
    title: "Censura",
    description:
      "Cinematic media review & streaming platform with subscriptions, rentals, admin panel, and full auth flows.",
    mockup:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    video: "#",
    why: "I wanted to bridge the gap between static reviews and interactive streaming. Most platforms provide one or the other; Censura provides a unified cinematic ecosystem.",
    learnings:
      "Mastering Next.js 15 Server Components and complex Stripe webhook integrations for subscription lifecycles.",
    purpose:
      "To provide a production-grade template for independent filmmakers and reviewers to monetize and manage their catalogue.",
    tech: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    links: { live: "#", repo: "#" },
  },
  {
    id: "02",
    title: "LinksNest",
    description:
      "Linktree × Bitly hybrid with A/B traffic splitting, conditional links, expiry, and Link-in-Bio pages.",
    mockup:
      "https://images.unsplash.com/photo-1551288049-bbda3ec6b0a9?auto=format&fit=crop&q=80&w=1200",
    video: "#",
    why: "Universal link tools are either too simple or too expensive. LinksNest brings enterprise-grade analytics to casual creators.",
    learnings:
      "Deep dive into URL shortening logic, QR code generation, and real-time analytics aggregation using TanStack Query.",
    purpose:
      "Empowering small creators with professional marketing tools without the recurring SaaS tax.",
    tech: ["React", "Express", "Vercel", "Tailwind"],
    links: { live: "#", repo: "#" },
  },
  {
    id: "03",
    title: "Planora",
    description:
      "Event management platform with real-time scheduling, attendee management, and ticketing system.",
    mockup:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200",
    video: "#",
    why: "Managing events is a logistical nightmare. Planora centralizes the 'chaos' into a single intuitive dashboard.",
    learnings:
      "Handling real-time state synchronization for ticketing and building a dynamic floor-plan designer from scratch.",
    purpose:
      "Providing a robust, white-labeled solution for event organizers to handle ticketing without middle-man fees.",
    tech: ["Node.js", "Redux", "Zod", "Framer"],
    links: { live: "#", repo: "#" },
  },
  {
    id: "04",
    title: "CineVault",
    description:
      "Early prototype for curated cinema discovery with watchlists, reviews, and recommendation engine.",
    mockup:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    video: "#",
    why: "Finding 'what to watch' is often harder than watching itself. CineVault uses algorithmic discovery to solve choice-fatigue.",
    learnings:
      "Implementing complex filtering logic and integrating third-party movie databases with high performance.",
    purpose:
      "A personal playground for exploring state-driven UI patterns and cinematic data visualization.",
    tech: ["TypeScript", "GSAP", "Radix UI", "TanStack"],
    links: { live: "#", repo: "#" },
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-14 border-t border-border bg-card"
    >
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">04</span>
        Selected Work
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="st text-[clamp(2.8rem,7vw,4rem)] font-extrabold tracking-[-0.035em] leading-none mb-18">
        <div className="tl block overflow-hidden">
          <span>
            Engineering <span className="text-accent italic">Products</span>
          </span>
        </div>
      </div>

      <div className="pg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: dx * 6,
      rotateX: -dy * 6,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.65,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="pc bg-card border border-border rounded-2xl aspect-11/12 flex flex-col justify-end cursor-none group relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.mockup}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent group-hover:from-bg/90 transition-all duration-500" />
      </div>

      <div className="relative z-10 p-8 pt-0 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 perspective-1000">
        <div style={{ transform: 'translateZ(30px)' }} className="font-mono text-[0.6rem] text-accent tracking-[0.2em] uppercase mb-2 opacity-60">
          Project {project.id}
        </div>
        <h3 style={{ transform: 'translateZ(50px)' }} className="text-3xl font-extrabold tracking-tighter mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p style={{ transform: 'translateZ(20px)' }} className="font-mono text-[0.68rem] leading-relaxed line-clamp-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-all duration-500">
          {project.description}
        </p>
      </div>

      <div className="absolute top-6 right-6 z-20 flex gap-2">
        {project.tech.slice(0, 2).map((t: string) => (
          <Badge key={t} variant="outline" className="px-2 py-3">
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectOverlay({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (playBtnRef.current) magneticEffect(playBtnRef.current, 0.45);
    if (backBtnRef.current) magneticEffect(backBtnRef.current, 0.35);

    // Auto-scroll reveal
    gsap.from(".proj-content > *", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    });
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 100 }}
      className="fixed inset-0 z-2000 bg-bg flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side: Mockup & Video */}
      <div className="md:w-[60%] h-[45vh] md:h-full relative overflow-hidden bg-card border-r border-border">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={project.mockup}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-transform duration-1000 scale-105 hover:scale-100"
        />

        <button
          ref={playBtnRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 rounded-full border border-accent/30 bg-accent text-bg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Play className="size-11 text-black" />
        </button>

        <div className="absolute bottom-10 left-10 z-20">
          <div className="font-mono text-[0.6rem] text-accent tracking-[0.2em] uppercase mb-2">
            Technical Environment
          </div>
          <div className="flex gap-4">
            {project.tech.map((t: string) => (
              <Badge
                key={t}
                variant="outline"
                className="px-3 py-3 border border-white/10 font-mono text-[0.6rem] rounded-md"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Detailed Story */}
      <div
        ref={scrollRef}
        className="md:w-[50%] h-[55vh] md:h-full overflow-y-auto bg-card text-white relative p-10 md:p-16 custom-scrollbar"
      >
        <button
          ref={backBtnRef}
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full border border-border hover:text-accent hover:border-accent transition-all z-30"
        >
          <X size={20} />
        </button>

        <div className="space-y-16">
          {/* Header */}

          <div className="font-mono text-[0.7rem] text-accent tracking-[0.2em] uppercase mb-4">
            Case Study / 0{project.id}
          </div>
          <h2 className="text-6xl font-extrabold tracking-tighter leading-none mb-6">
            {project.title}
          </h2>
          <p className="font-mono text-[0.95rem]leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Reasoning */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
              <Rocket size={12} /> Why make this?
            </div>
            <p className="font-mono text-[0.85rem]  leading-[1.8] border-l-2 border-accent pl-6 italic">
              "{project.why}"
            </p>
          </div>

          {/* Learnings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
              <BookOpen size={12} /> What I learned
            </div>
            <div className="p-8 bg-bg border border-border rounded-xl font-mono text-[0.85rem]  leading-[1.8]">
              {project.learnings}
            </div>
          </div>

          {/* Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
              <Target size={12} /> Purpose
            </div>
            <p className="font-mono text-[0.85rem]  leading-relaxed">
              {project.purpose}
            </p>
          </div>

          {/* Navigation/Actions */}
          <div className="pt-10 flex gap-4">
            <Link
              href="#"
              className="flex-1 flex items-center justify-center gap-3 bg-accent text-black px-8 py-4 font-mono text-[0.7rem] font-bold tracking-widest uppercase hover:brightness-110 transition-all rounded-xl"
            >
              Launch <ExternalLink size={14} />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 border border-border px-8 py-4 font-mono text-[0.7rem] font-bold tracking-widest uppercase hover:bg-white/5 transition-all text-white rounded-xl"
            >
              <Github size={14} /> Repository
            </Link>
          </div>

          <div className="pb-10 pt-20 font-mono text-[0.55rem] text-muted text-center uppercase tracking-[0.2em] opacity-40">
            End of Project File // Sajjad.Dev_04
          </div>
        </div>
      </div>
    </motion.div>
  );
}
