"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { X, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setIsOpen(true);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      // 1. Morph BG (Liquid fill)
      tl.to(pathRef.current, {
        attr: { d: "M 0 0 V 100 H 100 V 0 Z" },
        duration: 1.1,
        ease: "power4.inOut"
      });
      // 2. Reveal Content (Starts after 0.6s of morph)
      tl.fromTo(".sidebar-item", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
        "-=0.5"
      );
    } else {
      // 1. Hide Content Fast
      tl.to(".sidebar-item", {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.in"
      });
      // 2. Morph BG back (Liquid shrink)
      tl.to(pathRef.current, {
        attr: { d: "M 100 0 V 100 H 100 V 0 Z" }, // Shrink right
        duration: 0.9,
        ease: "power4.inOut"
      }, "-=0.2");
    }
  }, [isOpen]);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-20 right-8 z-150 pointer-events-auto"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-4 bg-card/40 backdrop-blur-md border border-accent/20 px-3 py-5 rounded-full hover:border-accent/50 transition-all hover:shadow-[0_0_20px_rgba(200,255,0,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="flex flex-col gap-1.5 items-end relative z-10">
                <span className="w-6 h-[2px] bg-accent rounded-full transition-all group-hover:w-5" />
                <span className="w-4 h-[2px] bg-accent rounded-full transition-all group-hover:w-6" />
                <span className="w-5 h-[2px] bg-accent rounded-full transition-all group-hover:w-4" />
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] pointer-events-none"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
              onClick={closeSidebar}
            />

            <div
              ref={sidebarRef}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[450px] pointer-events-auto overflow-hidden"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  ref={pathRef}
                  d="M 100 0 V 100 H 100 V 0 Z"
                  fill="var(--card)"
                />
              </svg>

              <div className="relative z-10 h-full flex flex-col p-12 md:p-16">
                <button
                  onClick={closeSidebar}
                  className="self-end p-2 hover:bg-white/5 rounded-full transition-colors text-accent flex items-center gap-3 group"
                >
                  
                  <X size={28} />
                </button>

                <div className="flex flex-col gap-1.5 mb-7">
                  <span className="font-mono text-[0.65rem] text-accent tracking-[0.2em] uppercase">
                    Navigation
                  </span>
                  <div className="h-px w-12 bg-accent opacity-30" />
                </div>

                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeSidebar}
                      className="sidebar-item font-syne text-[clamp(2.5rem,6vw,3rem)] font-extrabold text-foreground/40 hover:text-accent transition-all hover:translate-x-4 flex items-center gap-4 group leading-none"
                    >
                      <span className="text-xl font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        /
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-12 flex flex-col gap-10">
                  <div className="flex gap-4">
                    {/* Social links implementation stays same but with refined styling */}
                    {[
                      { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, href: "#" },
                      { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: "#" },
                      { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "#" },
                      { icon: <Mail size={18} />, href: "#" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="sidebar-item p-3.5 rounded-full border border-white/5 hover:border-accent/40 hover:text-accent transition-all duration-500 hover:bg-accent/5 backdrop-blur-sm"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <div className="sidebar-item flex flex-col gap-2">
                    <div className="font-mono text-[0.6rem] text-accent/50 tracking-[0.2em] uppercase">Origin</div>
                    <div className="font-mono text-[0.65rem] text-muted-foreground tracking-widest uppercase">
                      Based in Rangpur, BD — UTC+6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
