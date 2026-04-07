"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { scramble, magneticEffect } from "@/lib/animations";
import Link from "next/link";
import { Link as Github, Link2 as Linkedin, Book as Twitter, ArrowUpRight, Mail, MapPin, Clock, Play as Youtube, Camera as Instagram } from "lucide-react";

export default function Footer() {
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (logoRef.current) scramble(logoRef.current, "MSH.", 800);
    
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Asia/Dhaka", 
        hour12: true, 
        hour: "2-digit", 
        minute: "2-digit",
        second: "2-digit"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Apply magnetic effect to all links in the footer
    const links = document.querySelectorAll(".footer-link");
    links.forEach(link => magneticEffect(link as HTMLElement, 0.25));

    return () => clearInterval(interval);
  }, []);

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/sajjadhosan", icon: <Github size={18} /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/sajjadhosan", icon: <Linkedin size={18} /> },
    { name: "Twitter", href: "https://twitter.com/sajjadhosan", icon: <Twitter size={18} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={18} /> },
  ];

  return (
    <footer className="relative pt-32 pb-12 px-6 md:px-14 border-t border-border bg-bg overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute bottom-[-5%] left-[-2%] select-none pointer-events-none opacity-[0.02] text-[25vw] font-black leading-none tracking-tighter">
        SAJJAD
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div 
                ref={logoRef} 
                className="text-6xl font-black tracking-tighter text-accent mb-8 inline-block cursor-none"
              >
                MSH.
              </div>
              <p className="font-mono text-[0.85rem] text-muted leading-relaxed max-w-[360px] mb-12">
                Crafting digital experiences with a focuses on high-performance architecture, clean aesthetics, and human-centric engineering.
              </p>
              
              <div className="flex items-center gap-4 p-4 border border-border bg-card rounded-2xl w-fit group hover:border-accent transition-colors duration-500">
                 <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(200,255,0,0.5)]" />
                 <div className="font-mono text-[0.62rem] text-white tracking-[0.2em] uppercase">Ready for new challenges</div>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
             <div className="font-mono text-[0.62rem] text-accent tracking-[0.3em] uppercase mb-10 opacity-60">Navigation</div>
             <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="footer-link inline-flex items-center gap-1.5 font-syne text-[1.1rem] font-bold text-white hover:text-accent transition-colors group"
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-4">
             <div className="font-mono text-[0.62rem] text-accent tracking-[0.3em] uppercase mb-10 opacity-60">Let's Engineering</div>
             <div className="space-y-8">
                <a href="mailto:sajjad@example.com" className="footer-link flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-bg group-hover:border-accent transition-all duration-500">
                      <Mail size={18} />
                   </div>
                   <div>
                      <div className="font-mono text-[0.55rem] text-muted uppercase tracking-widest mb-1">Direct Contact</div>
                      <div className="font-syne text-[1rem] font-bold text-white">sajjad@example.com</div>
                   </div>
                </a>

                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted">
                      <MapPin size={18} />
                   </div>
                   <div>
                      <div className="font-mono text-[0.55rem] text-muted uppercase tracking-widest mb-1">Based In</div>
                      <div className="font-syne text-[1rem] font-bold text-white">Rangpur, BD</div>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                   {socialLinks.map((s) => (
                     <a 
                      key={s.name} 
                      href={s.href} 
                      className="footer-link w-11 h-11 bg-card border border-border rounded-xl flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                      title={s.name}
                     >
                        {s.icon}
                     </a>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3 font-mono text-[0.62rem] text-muted tracking-widest uppercase">
              <Clock size={12} className="text-accent" />
              Rangpur, BD — {time}
           </div>

           <div className="font-mono text-[0.62rem] text-muted tracking-widest uppercase">
              © {new Date().getFullYear()} Sajjad Hosan — Handcrafted with precision
           </div>

           <div className="flex items-center gap-6 font-mono text-[0.62rem] text-muted tracking-widest uppercase">
              <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
