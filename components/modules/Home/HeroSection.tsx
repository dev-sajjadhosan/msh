"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scramble, splitChars, magneticEffect } from "@/lib/animations";
import { gsap } from "gsap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heyRef = useRef<HTMLSpanElement>(null);
  const hn1Ref = useRef<HTMLSpanElement>(null);
  const hn2Ref = useRef<HTMLSpanElement>(null);
  const hn3Ref = useRef<HTMLSpanElement>(null);
  const hdescRef = useRef<HTMLSpanElement>(null);
  const hbgRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const hbgX = useTransform(scrollY, [0, 800], [0, -120]);
  const avatarY = useTransform(scrollY, [0, 500], [0, 50]);

  // Coordinates Effect
  const [coords, setCoords] = useState({ lat: "23.81", lon: "90.41" });
  useEffect(() => {
    const interval = setInterval(() => {
      const lat = (23.8 + Math.random() * 0.02).toFixed(4);
      const lon = (90.4 + Math.random() * 0.02).toFixed(4);
      setCoords({ lat, lon });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 1. Scramble Eyebrow
    if (heyRef.current) {
      scramble(
        heyRef.current,
        "Professional Full-Stack Engineer — Bangladesh",
        1100,
      );
    }

    // 2. Name Reveal
    if (hn1Ref.current && hn2Ref.current && hn3Ref.current) {
      const c1 = splitChars(hn1Ref.current);
      const c2 = splitChars(hn2Ref.current);
      const c3 = splitChars(hn3Ref.current);

      gsap.from(c1, {
        y: "115%",
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.08,
      });
      gsap.from(c2, {
        y: "115%",
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.22,
      });
      gsap.from(c3, {
        y: "115%",
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.32,
      });
    }

    // 3. Desc Reveal
    if (hdescRef.current) {
      gsap.from(hdescRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.45,
      });
    }

    // 4. Periodic Background Scramble
    const interval = setInterval(() => {
      if (hbgRef.current) scramble(hbgRef.current, "MSH", 700);
    }, 5000);

    // 5. Magnetic Avatar
    if (avatarRef.current) {
      magneticEffect(avatarRef.current, 0.4);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="h-screen flex flex-col justify-end p-6 md:p-14 pb-18 md:pb-20 relative overflow-hidden mt-9"
    >
      {/* Background HUD Decor */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[350px] h-[350px] border border-white/5 border-dashed rounded-full pointer-events-none opacity-10 animate-[spin_30s_linear_infinite]" />

      {/* Hero Background Text */}
      <motion.div
        ref={hbgRef}
        style={{ x: hbgX }}
        onMouseEnter={() => {
          if (hbgRef.current) scramble(hbgRef.current, "MSH", 400);
        }}
        className="absolute bottom-[2%] left-[-2%] text-[clamp(8rem,28vw,35rem)] font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.06)] tracking-[-0.05em] leading-none pointer-events-auto hover:[-webkit-text-stroke:1px_rgba(200,255,0,0.15)] transition-all duration-700 cursor-none select-none italic z-0"
      >
        MSH
      </motion.div>

      {/* Premium Avatar HUD */}
      <motion.div
        ref={avatarRef}
        style={{ y: avatarY }}
        className="absolute right-[5%] md:right-[12.5%] top-[25%] md:top-[35%] z-20 cursor-none group"
      >
        <div className="relative">
          {/* HUD Rings */}
          <div className="absolute -inset-4 border border-accent/20 rounded-full animate-pulse transition-transform group-hover:scale-110" />
          <div className="absolute -inset-8 border border-foreground/5 rounded-full group-hover:border-accent/10 transition-colors" />
          <div className="absolute -top-12 -left-12 font-mono text-[0.5rem] text-accent/40 uppercase tracking-widest vertical-text select-none">
            Human_Engine v.1 // LOC_{coords.lat}N_{coords.lon}E
          </div>

          <Avatar className="size-48 md:size-64 border-2 border-accent grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_40px_rgba(200,255,0,0.1)] group-hover:shadow-[0_0_60px_rgba(200,255,0,0.2)]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
            <AvatarFallback className="bg-card text-accent font-black text-2xl">
              MSH
            </AvatarFallback>
          </Avatar>

          {/* Avatar Labels */}
          <div className="absolute -bottom-6 -right-6 bg-accent text-black px-4 py-1.5 font-mono text-[0.55rem] font-bold tracking-widest uppercase skew-x-[-12deg] shadow-lg">
            EST_199X
          </div>
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1200px]">
        <div className="h-ey font-mono text-[0.7rem] text-accent tracking-[0.25em] uppercase mb-1 flex items-center gap-3.5 overflow-hidden">
          <span className="block w-[30px] h-px bg-accent shrink-0" />
          <span ref={heyRef} className="ei block">
            Architecting Premium Digital Products
          </span>
        </div>

        <div className="h-name text-[clamp(4.5rem,14vw,8rem)] font-extrabold leading-[0.82] tracking-[-0.045em] overflow-hidden mb-6">
          <div className="wd block overflow-hidden">
            <span
              ref={hn1Ref}
              className="block group-hover:text-accent transition-colors"
            >
              MOHAMMAD
            </span>
          </div>
          <div className="wd block overflow-hidden">
            <span ref={hn2Ref} className="block">
              SAJJAD
            </span>
          </div>
          <div className="wd out block overflow-hidden text-transparent [-webkit-text-stroke:1px_rgba(240,240,245,0.15)]">
            <span ref={hn3Ref} className="block italic">
              HOSAIN
            </span>
          </div>
        </div>

        <div className="h-bot flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="h-desc max-w-[360px] font-mono text-sm text-muted-foreground leading-[1.8] overflow-hidden border-l border-accent/20 pl-6">
            <span ref={hdescRef} className="ei block">
              Specializing in building high-performance, scalable web
              experiences with a focus on premium aesthetics and human
              interaction.
            </span>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="h-avail flex items-center gap-3 font-mono text-[0.62rem] text-muted-foreground tracking-[0.15em] uppercase border border-border bg-card/50 px-6 py-3.5 rounded-full">
              <span className="pulse w-2 h-2 rounded-full bg-accent relative">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              </span>
              Operation Status: Open
            </div>

            <div className="h-scr flex flex-col items-center gap-3 font-mono text-[0.55rem] text-muted-foreground tracking-[0.3em] uppercase group cursor-none">
              <div className="vl w-px h-[60px] bg-linear-to-b from-accent to-transparent relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-white"
                />
              </div>
              <span className="group-hover:text-accent transition-colors">
                Initiate Scroll
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
