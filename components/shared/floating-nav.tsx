"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (direction: 'top' | 'bottom') => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(direction === 'top' ? 0 : 'max', {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: direction === 'top' ? 0 : document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-24 right-8 z-[9000] flex flex-col gap-2 items-center"
        >
          <button
            onClick={() => scrollTo('top')}
            className="group flex items-center justify-center size-9 bg-card border border-border rounded-full text-muted-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-xl cursor-none"
            title="Jump to Top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollTo('bottom')}
            className="group flex items-center justify-center size-9 bg-card border border-border rounded-full text-muted-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-xl cursor-none"
            title="Jump to Bottom"
          >
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Quick Nav Indicator */}
          <div className="flex flex-col items-center gap-1.5 mt-2 opacity-30 select-none">
             <div className="w-px h-10 bg-accent" />
             <span className="font-mono text-[0.5rem] text-accent font-bold uppercase vertical-text tracking-[0.2em]">Quick_Nav</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
