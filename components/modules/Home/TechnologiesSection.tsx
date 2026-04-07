"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ExternalLink, Zap, Terminal, Cpu } from "lucide-react";
import { magneticEffect } from "@/lib/animations";

const STACK_1 = [
  "Next.js 15", "TypeScript", "React", "Node.js", "Express", 
  "Prisma ORM", "PostgreSQL", "Stripe", "Tailwind CSS", "Zod", 
  "shadcn/ui", "TanStack Query"
];

const STACK_2 = [
  "Git & GitHub", "Vercel", "Better Auth", "TanStack Form", "HTML5", 
  "CSS3", "REST APIs", "JWT Auth", "Docker", "Linux", 
  "Figma", "VS Code"
];

const CATEGORIZED_TECH = [
  // Frontend
  { 
    name: "Next.js", icon: "▲", category: "frontend",
    exp: 95, love: "Architecting performance-first Next.js applications with the App Router and SSR.",
    projects: ["Censura", "Portfolio V2", "LinksNest"],
    features: ["Server Components", "Streaming", "Edge Runtime"]
  },
  { 
    name: "React", icon: "⚛", category: "frontend",
    exp: 98, love: "Building complex UIs with custom hooks and high-performance state patterns.",
    projects: ["All Front-end Projects"],
    features: ["Hooks", "Concurrent Mode", "Virtual DOM"]
  },
  { 
    name: "TypeScript", icon: "🔷", category: "frontend",
    exp: 92, love: "Type-safe development processes to eliminate runtime errors before deployment.",
    projects: ["Censura", "SaaS Boilerplate"],
    features: ["Type Safety", "Interfaces", "Generics"]
  },
  { 
    name: "Tailwind", icon: "🌊", category: "frontend",
    exp: 99, love: "Mastering utility-first styling for lightning-fast responsive UI development.",
    projects: ["Censura", "Portfolio", "LinksNest"],
    features: ["JIT Compiler", "Custom Themes", "Responsive Grid"]
  },
  { 
    name: "shadcn/ui", icon: "✨", category: "frontend",
    exp: 97, love: "The gold standard for accessible, beautiful components. It saves weeks of dev time.",
    projects: ["Censura", "SaaS Dashboards"],
    features: ["Radix UI", "Accessibility", "Tailwind Integration"]
  },
  { 
    name: "TanStack", icon: "📦", category: "frontend",
    exp: 94, love: "Robust state management for complex data fetching and form handling.",
    projects: ["Censura", "LinksNest"],
    features: ["Query", "Form", "Table"]
  },
  { 
    name: "Framer Motion", icon: "🪄", category: "frontend",
    exp: 90, love: "Crafting production-grade web animations that are both smooth and declarative.",
    projects: ["Portfolio", "HUD Modules"],
    features: ["Layout Transitions", "Gestures", "Variants"]
  },
  { 
    name: "GSAP", icon: "🟢", category: "frontend",
    exp: 88, love: "High-end scroll-triggered animations and complex timeline orchestrations.",
    projects: ["Portfolio Hero", "About Section"],
    features: ["ScrollTrigger", "Draggable", "Flip Plugin"]
  },
  { 
    name: "HTML5", icon: "🔥", category: "frontend",
    exp: 99, love: "Semantic structure as the foundation for all modern web experiences.",
    projects: ["All Projects"],
    features: ["Semantics", "SEO", "Accessibility"]
  },
  { 
    name: "CSS3", icon: "🎨", category: "frontend",
    exp: 95, love: "Mastering layout engines, variables, and complex animations.",
    projects: ["Custom Projects"],
    features: ["Flexbox", "CSS Grid", "Variables"]
  },
  { 
    name: "Figma", icon: "🎨", category: "frontend",
    exp: 82, love: "Translating designer vision into pixel-perfect technical implementation.",
    projects: ["UI Designs"],
    features: ["Auto-Layout", "Prototyping", "Design Systems"]
  },
  
  // Backend
  { 
    name: "Node.js", icon: "🟢", category: "backend",
    exp: 88, love: "High-performance event-driven backend systems for scalable architectures.",
    projects: ["Auth API", "Chat Engine"],
    features: ["Non-blocking I/O", "Worker Threads", "Fastify"]
  },
  { 
    name: "Express", icon: "🚂", category: "backend",
    exp: 92, love: "Minimalist and flexible routing for high-speed RESTful API development.",
    projects: ["Censura API", "Social Backend"],
    features: ["Middleware", "Routing", "Performance"]
  },
  { 
    name: "Prisma", icon: "◼", category: "backend",
    exp: 90, love: "Deep-level database modeling and type-safe query engineering.",
    projects: ["Censura", "Platform API"],
    features: ["Migrations", "Schema Sync", "Typed Queries"]
  },
  { 
    name: "PostgreSQL", icon: "🐘", category: "backend",
    exp: 85, love: "Robust, reliable, and powerful. My go-to for production-grade structured data.",
    projects: ["Censura", "Platform DB"],
    features: ["Relational Data", "JSONB", "Indexing"]
  },
  { 
    name: "Zod", icon: "✅", category: "backend",
    exp: 95, love: "Indestructible runtime validation that integrates perfectly with TypeScript.",
    projects: ["Censura", "Input Security"],
    features: ["Inference", "Validation", "Native TS"]
  },
  { 
    name: "Better Auth", icon: "🔐", category: "backend",
    exp: 88, love: "Sophisticated modern auth workflows with deep Next.js integration.",
    projects: ["Censura", "SaaS Pro"],
    features: ["MFA", "OAuth", "Role Access"]
  },
  { 
    name: "Stripe", icon: "💳", category: "backend",
    exp: 80, love: "Complex financial infrastructure for subscription-based business models.",
    projects: ["Censura Billing", "SaaS"],
    features: ["Webhooks", "Billing Portal", "Checkout"]
  },
  { 
    name: "REST APIs", icon: "🌐", category: "backend",
    exp: 94, love: "Architecting clean, scalable, and well-documented API surfaces.",
    projects: ["Linktree Clone", "Chat System"],
    features: ["REST Patterns", "Status Codes", "Versioning"]
  },
  { 
    name: "JWT Auth", icon: "🔑", category: "backend",
    exp: 90, love: "Securing stateless authentication across distributed web systems.",
    projects: ["Auth Project", "Legacy Systems"],
    features: ["Token Rotations", "Verification", "Cookies"]
  },

  // Tools
  { 
    name: "Vercel", icon: "🚀", category: "tools",
    exp: 95, love: "Production deployment, edge analytics, and infrastructure as code.",
    projects: ["All Prod Projects"],
    features: ["Analytics", "Previews", "Edge Config"]
  },
  { 
    name: "Docker", icon: "🐳", category: "tools",
    exp: 75, love: "DevOps container orchestration for cross-platform consistency.",
    projects: ["Microservices", "Legacy System"],
    features: ["Containers", "Images", "Composability"]
  },
  { 
    name: "Linux", icon: "🐧", category: "tools",
    exp: 85, love: "Professional development environment and server management.",
    projects: ["Server Deployment", "Hosting"],
    features: ["Bash", "Cron", "Permissions"]
  },
  { 
    name: "Git / GitHub", icon: "🐙", category: "tools",
    exp: 94, love: "Version control as the foundation for collaboration and CI/CD.",
    projects: ["All Workflows"],
    features: ["Actions", "Branching", "Code Review"]
  },
  { 
    name: "VS Code", icon: "💻", category: "tools",
    exp: 98, love: "A highly optimized environment for professional software engineering.",
    projects: ["All Daily Work"],
    features: ["Extensions", "Debugging", "Terminal"]
  },
];

const TABS = [
  { id: "all", label: "All Tech" },
  { id: "frontend", label: "Front-end" },
  { id: "backend", label: "Back-end" },
  { id: "tools", label: "Tools" },
];

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedTech, setSelectedTech] = useState<typeof CATEGORIZED_TECH[0] | null>(null);

  const filteredTech = activeTab === "all" 
    ? CATEGORIZED_TECH 
    : CATEGORIZED_TECH.filter(t => t.category === activeTab);

  return (
    <section id="technologies" className="py-32 px-6 md:px-14 border-t border-border overflow-hidden relative min-h-[900px]">
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">03</span>
        Stack
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="st text-[clamp(2.8rem,7vw,4rem)] font-extrabold tracking-[-0.035em] leading-none mb-18">
        <div className="tl block overflow-hidden"><span>Core <span className="text-accent italic">Engine</span></span></div>
      </div>

      <div className="space-y-px">
        <div className="mw border-t border-b overflow-hidden">
          <div className="mt animate-[mq_22s_linear_infinite]">
            {[...STACK_1, ...STACK_1, ...STACK_1].map((item, i) => (
              <span key={i} className="mi inline-flex items-center gap-2.5 px-7 py-4 font-mono text-[0.73rem] text-muted border-r border-border hover:text-accent transition-colors">
                <span className="md text-accent text-[0.45rem]">◆</span>{item}
              </span>
            ))}
          </div>
        </div>
        <div className="mw border-b overflow-hidden">
          <div className="mt animate-[mq_22s_linear_infinite_reverse]">
            {[...STACK_2, ...STACK_2, ...STACK_2].map((item, i) => (
              <span key={i} className="mi inline-flex items-center gap-2.5 px-7 py-4 font-mono text-[0.73rem] text-muted border-r border-border hover:text-accent transition-colors">
                <span className="md text-accent text-[0.45rem]">◆</span>{item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <AnimatePresence mode="wait">
          {!selectedTech ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Tab Bar */}
              <div className="tb flex flex-wrap gap-2 mb-10">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 font-mono text-[0.68rem] tracking-widest uppercase transition-all relative overflow-hidden border ${
                      activeTab === tab.id 
                        ? "bg-accent text-black border-accent" 
                        : "border-border text-muted hover:border-accent/40"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {filteredTech.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    layoutId={`tech-${tech.name}`}
                    onClick={() => setSelectedTech(tech)}
                    className="tc group bg-card p-7.5 flex flex-col items-center justify-center text-center transition-all relative overflow-hidden rounded-xl border border-border hover:border-accent/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,255,0,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="ico text-[1.7rem] block mb-2.5 relative z-10">{tech.icon}</span>
                    <span className="nm font-mono text-[0.64rem] text-muted group-hover:text-accent relative z-10 uppercase tracking-widest">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <TechHUD tech={selectedTech} onBack={() => setSelectedTech(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TechHUD({ tech, onBack }: { tech: any; onBack: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeBtnRef.current) magneticEffect(closeBtnRef.current, 0.45);
  }, []);

  return (
    <motion.div 
      key="hud"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hud-container w-full min-h-[500px] py-12 relative flex flex-col items-center justify-center"
    >
      <button 
        ref={closeBtnRef}
        onClick={onBack}
        className="absolute top-0 right-0 p-4 border border-border text-muted hover:border-accent hover:text-accent transition-all font-mono text-[0.65rem] tracking-widest uppercase flex items-center gap-2 group"
      >
        <X size={14} className="group-hover:rotate-90 transition-transform" />
        Return to Grid
      </button>

      {/* Background Decor */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="w-[600px] h-[600px] border border-accent rounded-full animate-pulse" />
        <div className="absolute w-[800px] h-px bg-accent" />
        <div className="absolute h-[800px] w-px bg-accent" />
      </div>

      <div className="flex flex-col items-center gap-16 relative w-full">
        {/* Central Core */}
        <div className="relative">
          <motion.div 
            layoutId={`tech-${tech.name}`}
            className="w-32 h-32 bg-card border-2 border-accent/20 rounded-2xl flex items-center justify-center text-[4rem] relative z-20"
            style={{ 
              boxShadow: `0 0 60px ${tech.category === 'frontend' ? 'rgba(0,255,150,0.15)' : tech.category === 'backend' ? 'rgba(0,100,255,0.15)' : 'rgba(200,255,0,0.15)'}`,
              borderColor: tech.category === 'frontend' ? 'rgba(0,255,150,0.3)' : tech.category === 'backend' ? 'rgba(0,100,255,0.3)' : 'rgba(200,255,0,0.3)'
            }}
          >
            <div className="absolute inset-0 border border-accent/50 animate-ping opacity-20 rounded-2xl" />
            <div className="absolute -inset-2 border border-accent/10 animate-[spin_10s_linear_infinite] rounded-3xl" />
            {tech.icon}
          </motion.div>
          <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-center">
            <h3 className="font-extrabold text-4xl tracking-tighter uppercase text-accent mb-1">{tech.name}</h3>
            <div className="font-mono text-[0.6rem] text-muted tracking-[0.3em] uppercase">Technological Core</div>
          </div>
        </div>

        {/* HUD Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
          {/* Module: Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="hud-mod p-8 bg-card/50 border border-border border-l-2 border-l-accent relative overflow-hidden group"
          >
            <div className="font-mono text-[0.55rem] text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
              <Terminal size={10} /> Runtime performance
            </div>
            <div className="text-3xl font-extrabold mb-2 text-white">{tech.exp}%</div>
            <div className="h-1 w-full bg-white/5 relative">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${tech.exp}%` }} 
                className="absolute inset-0 bg-accent" 
                transition={{ duration: 1.5, delay: 0.4 }} 
              />
            </div>
            <p className="mt-6 font-mono text-[0.7rem] text-muted leading-relaxed italic border-l border-white/10 pl-4">
              "{tech.love}"
            </p>
          </motion.div>

          {/* Module: Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="hud-mod p-8 bg-card/50 border border-border border-t-2 border-t-accent relative"
          >
            <div className="font-mono text-[0.55rem] text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
              <Cpu size={10} /> Structural features
            </div>
            <ul className="space-y-3">
               {tech.features.map((f: string, i: number) => (
                 <li key={f} className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
                   <span className="font-mono text-[0.65rem] text-white tracking-wider uppercase">{f}</span>
                   <span className="flex-1 border-b border-white/5 border-dotted" />
                   <span className="font-mono text-[0.55rem] text-accent">0{i+1}</span>
                 </li>
               ))}
            </ul>
          </motion.div>

          {/* Module: Projects */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }}
            className="hud-mod p-8 bg-card/50 border border-border border-r-2 border-r-accent relative"
          >
            <div className="font-mono text-[0.55rem] text-accent tracking-widest uppercase mb-6 flex items-center gap-2">
              <ExternalLink size={10} /> Deployment history
            </div>
            <div className="flex flex-col gap-4">
              {tech.projects.map((p: string) => (
                <div key={p} className="group cursor-pointer">
                  <div className="font-syne text-[0.9rem] font-bold text-white group-hover:text-accent transition-colors">{p}</div>
                  <div className="font-mono text-[0.55rem] text-muted tracking-widest uppercase mt-0.5">Production Entry</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
