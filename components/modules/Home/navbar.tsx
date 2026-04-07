"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { magneticEffect } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const talkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const updateTime = () => {
      const now = new Date();
      setTime(
        now
          .toLocaleTimeString("en-US", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
          .replace(/^0/, ""),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    window.addEventListener("scroll", handleScroll);

    // Apply magnetic effects
    let cleanups: (() => void)[] = [];
    if (logoRef.current) cleanups.push(magneticEffect(logoRef.current, 0.4));
    if (talkRef.current) cleanups.push(magneticEffect(talkRef.current, 0.5));
    linksRef.current.forEach((l) => {
      if (l) cleanups.push(magneticEffect(l, 0.42));
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-100 px-6 py-6 md:px-12 flex items-center justify-between transition-all duration-300 mix-blend-difference",
        scrolled && "py-4",
      )}
    >
      <div className="flex items-center gap-12">
        <Link
          ref={logoRef}
          href="#hero"
          className="text-xl font-extrabold tracking-tighter flex items-center gap-1 group text-white font-mono"
        >
          MSH<span className="text-accent">.</span>DEV
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="">Available for hire</span>
      </div>
      {/* 
      <ul className="hidden md:flex items-center gap-10 list-none">
        {NAV_LINKS.map((link, i) => (
          <li key={link.label}>
            <Link
              ref={el => { linksRef.current[i] = el }}
              href={link.href}
              className="font-mono text-[0.68rem] text-white/45 hover:text-white tracking-widest uppercase transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul> */}

      <div className="flex items-center gap-8">
        <div className="hidden sm:flex flex-col items-end font-mono">
          <Badge className="text-[0.72rem] tracking-widest">{time}</Badge>
          {/* <div className="text-[0.55rem] text-white/40 tracking-[0.2em] uppercase origin-right">Rangpur, BD</div> */}
        </div>
        <Link
          ref={talkRef}
          href="#contact"
          className="group font-mono text-[0.68rem] text-white px-5 py-2.5 uppercase tracking-widest border border-white/20 relative overflow-hidden transition-all hover:text-black hover:border-accent"
        >
          <span className="relative z-10">Let's Talk</span>
          <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        </Link>
      </div>
    </nav>
  );
}
