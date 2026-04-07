"use client";

import { useEffect, useRef } from "react";
import { scramble, magneticEffect } from "@/lib/animations";
import Link from "next/link";
import { TechnicalMap } from "@/components/shared/technical-map";
import { Link as Github, Link2 as Linkedin, Book as Twitter, Send, FileText } from "lucide-react";

export default function ContactSection() {
  const title1Ref = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const socRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Scramble on hover
    const t1 = title1Ref.current;
    if (t1) {
        const handleEnter = () => scramble(t1, "GOT AN IDEA?", 600);
        t1.addEventListener("mouseenter", handleEnter);
        return () => t1.removeEventListener("mouseenter", handleEnter);
    }
  }, []);

  useEffect(() => {
    let cleanups: (() => void)[] = [];
    if (btn1Ref.current) cleanups.push(magneticEffect(btn1Ref.current, 0.38));
    if (btn2Ref.current) cleanups.push(magneticEffect(btn2Ref.current, 0.38));
    socRefs.current.forEach(s => {
        if (s) cleanups.push(magneticEffect(s, 0.42));
    });
    return () => cleanups.forEach(c => c());
  }, []);

  const socials = [
    { name: "GitHub", href: "https://github.com/sajjadhosan", icon: <Github size={14} /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/sajjadhosan", icon: <Linkedin size={14} /> },
    { name: "Twitter", href: "https://twitter.com/sajjadhosan", icon: <Twitter size={14} /> },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-14 border-t border-border bg-card text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(200,255,0,0.05),transparent_70%)]" />
      
      {/* HUD Map Component */}
      <div className="max-w-[1200px] mx-auto text-left mb-24">
         <TechnicalMap />
      </div>

      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-9.5 flex items-center justify-center gap-3">
        <span className="sn text-[0.58rem] text-muted">06</span>
        Contact
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="cb text-[clamp(2.8rem,9vw,9rem)] font-extrabold tracking-[-0.045em] leading-[0.95] mb-8.5 relative">
        <div ref={title1Ref} className="tl block overflow-hidden"><span>Got an <span className="text-accent italic font-normal">idea?</span></span></div>
        <div className="tl block overflow-hidden"><span>Let's build it.</span></div>
      </div>

      <p className="cs font-mono text-[0.78rem] text-muted max-w-[420px] mx-auto mb-12 leading-[1.9] relative">
        Open to freelance projects, full-time roles, and interesting collaborations. If you have something worth building — let's talk.
      </p>

      <div className="bts flex flex-wrap justify-center gap-3.5 relative">
        <Link
          ref={btn1Ref}
          href="mailto:sajjad@example.com" 
          className="group btn btn-a inline-flex items-center gap-3 px-9.5 py-5 bg-accent text-black font-mono text-[0.72rem] font-bold tracking-widest uppercase relative overflow-hidden transition-colors"
        >
          <Send size={16} className="relative z-10" />
          <span className="relative z-10">Send Email</span>
          <span className="absolute inset-0 bg-[#d4ff33] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        </Link>
        <Link
          ref={btn2Ref}
          href="#" 
          className="group btn btn-b inline-flex items-center gap-3 px-9.5 py-5 border border-border text-foreground font-mono text-[0.72rem] font-bold tracking-widest uppercase relative overflow-hidden transition-all hover:border-accent hover:text-accent"
        >
          <FileText size={16} className="relative z-10" />
          <span className="relative z-10">View Resume</span>
          <span className="absolute inset-0 bg-[rgba(200,255,0,0.07)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        </Link>
      </div>

      {/* Highlighted Social Labels with Icons */}
      <div className="socs flex justify-center flex-wrap gap-x-10 gap-y-6 mt-24 relative">
        {socials.map((soc, i) => (
          <a 
            key={soc.name} 
            ref={el => { socRefs.current[i] = el }} 
            href={soc.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="soc font-mono text-[0.7rem] text-white hover:text-accent tracking-[0.2em] uppercase flex items-center gap-2.5 transition-all group"
          >
            <div className="p-2.5 border border-border rounded-xl group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500 scale-100 group-hover:scale-110">
               {soc.icon}
            </div>
            <span className="relative overflow-hidden group-hover:text-accent font-bold">
               {soc.name}
               <span className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
