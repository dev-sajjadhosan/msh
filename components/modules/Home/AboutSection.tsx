"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const containerRef = useRef(null);
  const stsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (stsRef.current) {
      ScrollTrigger.create({
        trigger: stsRef.current,
        start: "top 82%",
        once: true,
        onEnter() {
          const counts = stsRef.current?.querySelectorAll("[data-count]");
          counts?.forEach((el) => {
            const element = el as HTMLElement;
            const t = parseInt(element.dataset.count || "0");
            const v = { n: 0 };
            gsap.to(v, {
              n: t,
              duration: 1.6,
              ease: "power2.out",
              onUpdate() {
                element.textContent = Math.round(v.n) + "+";
              },
            });
          });
        },
      });
    }
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 px-6 md:px-14 border-t border-border">
      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-4 flex items-center gap-3">
        <span className="sn text-[0.58rem] text-muted">01</span>
        About Me
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div
        ref={containerRef}
        className="ag grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-start"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="av relative group"
        >
          {/* Animated Rotating Border Engine */}
          <div className="absolute inset-[-4px] overflow-hidden rounded-[1.35rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div 
               animate={{ rotate: [0, 360] }}
               transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,var(--accent)_30%,transparent_60%,var(--accent)_90%,transparent_100%)] blur-[25px] opacity-60"
            />
            <motion.div 
               animate={{ rotate: [360, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,var(--accent)_40%,transparent_70%,var(--accent)_100%)] blur-[40px] opacity-30"
            />
          </div>

          <div className="af aspect-3/4 bg-card border border-border relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-[rgba(200,255,0,0.05)] to-transparent" />

            {/* Corners */}
            <div className="fc tl absolute top-0 left-0 w-[22px] h-[22px] border-t-2 border-l-2 border-accent rounded-tl-2xl" />
            <div className="fc br absolute bottom-0 right-0 w-[22px] h-[22px] border-b-2 border-r-2 border-accent rounded-br-2xl" />

            <div className="afi absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="ava w-24 h-24 rounded-full border-2 border-[rgba(200,255,0,0.35)] bg-[radial-gradient(circle_at_30%_30%,rgba(200,255,0,0.1),transparent)] flex items-center justify-center overflow-hidden">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                   <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                   <circle cx="12" cy="12" r="4" />
                   <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="ft font-mono text-[0.62rem] text-muted tracking-[0.1em]">
                // sajjad.dev
              </div>
            </div>
          </div>
          <div className="badge absolute bottom-[7px] right-[7px] bg-accent/90 text-black px-4.5 py-3.5 font-mono text-[0.66rem] font-bold tracking-[0.08em] uppercase rounded-br-2xl">
            Open to Hire
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="st text-[clamp(2.8rem,7vw,4rem)] font-extrabold tracking-[-0.035em] leading-none mb-15">
            <div className="tl block overflow-hidden">
              <span>Coding the</span>
            </div>
            <div className="tl block overflow-hidden">
              <span className="text-accent italic">Web.</span>
            </div>
          </div>

          <div className="ac space-y-5">
            <p className="font-mono text-[1rem] text-muted leading-[1.95]">
              I'm a{" "}
              <strong className="text-foreground font-normal">
                full-stack developer
              </strong>{" "}
              from Bangladesh, obsessively passionate about building products at
              the intersection of{" "}
              <strong className="text-foreground font-normal">
                performance, beautiful UI, and solid engineering.
              </strong>
            </p>
            <p className="font-mono text-[1rem] text-muted leading-[1.95]">
              Currently deep in the build of{" "}
              <strong className="text-foreground font-normal text-white">
                Censura
              </strong>{" "}
              — a cinematic media review & streaming platform on Next.js 15,
              Prisma, PostgreSQL, and Stripe. Every sprint is a chance to push
              the craft further.
            </p>
            <p className="font-mono text-[1rem] text-muted leading-[1.95]">
              When I'm not shipping features, I'm exploring{" "}
              <strong className="text-foreground font-normal text-white">
                PC hardware
              </strong>
              , chasing certifications, or plotting the next side project.
            </p>
          </div>

          <div
            ref={stsRef}
            className="sts grid grid-cols-2 gap-px bg-border border border-border mt-12 overflow-hidden rounded-2xl relative"
          >
            <div className="fc tl absolute top-0 left-0 w-[22px] h-[22px] border-t-2 border-l-2 border-accent rounded-tl-2xl" />
            <div className="fc br absolute bottom-0 right-0 w-[22px] h-[22px] border-b-2 border-r-2 border-accent rounded-br-2xl" />
            <Stat num="0" dataCount="3" label="Years Building" />
            <Stat num="0" dataCount="15" label="Projects Shipped" />
            <Stat num="∞" label="Bugs Squashed" />
            <Stat num="01" label="Goal: Ship Great Code" />
          </div>
       
        </motion.div>
      </div>
         <div className="mt-16 pt-16 border-t border-white/5">
             <div className="font-mono text-[0.62rem] text-accent tracking-[0.3em] uppercase mb-10 flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                Auxiliary Systems / Hobbies
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">🔋</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Rest & Recharge</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Peak-Performance Sleep</div>
                </div>
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">🔍</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Incurable Curiosity</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Exploring New Specs</div>
                </div>
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">🎨</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Creative Pursuit</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Objectively Unique UI</div>
                </div>
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">🤝</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Altruism</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Helping Others Grow</div>
                </div>
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">⚡</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Electronics</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Hardware Tinkering</div>
                </div>
                <div className="group cursor-none">
                   <div className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform">🏆</div>
                   <div className="font-mono text-[0.65rem] text-white uppercase tracking-widest mb-1">Level: Expert</div>
                   <div className="font-mono text-[0.55rem] text-muted uppercase">Ready for Challenges</div>
                </div>
             </div>
          </div>
    </section>
  );
}

function Stat({
  num,
  label,
  dataCount,
}: {
  num: string;
  label: string;
  dataCount?: string;
}) {
  return (
    <div className="ss bg-bg p-6.5 hover:bg-card transition-colors">
      <div
        className="ss-n text-[2.8rem] font-extrabold text-accent tracking-[-0.04em] leading-none"
        data-count={dataCount}
      >
        {num}
      </div>
      <div className="ss-l font-mono text-[0.65rem] text-muted tracking-[0.08em] uppercase mt-1">
        {label}
      </div>
    </div>
  );
}
