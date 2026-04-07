"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Cpu, Radio, ShieldCheck } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Initializing_Engine");

  const statuses = [
    "Initializing_System",
    "Loading_Neural_Assets",
    "Optimizing_Layouts",
    "Syncing_Databases",
    "Finalizing_Interface",
    "System_Ready"
  ];

  useEffect(() => {
    const v = { n: 0 };
    gsap.to(v, {
      n: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate() {
        const val = Math.round(v.n);
        setCount(val);
        const statusIdx = Math.min(Math.floor((val / 100) * statuses.length), statuses.length - 1);
        setStatus(statuses[statusIdx]);
      },
      onComplete() {
        gsap.to("#loader", {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          duration: 1.2,
          ease: "expo.inOut",
          delay: 0.15,
          onComplete() {
            onComplete();
          },
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* Background Graphic elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
         <span className="text-[35vw] font-black tracking-tighter leading-none select-none text-foreground">PORTFOLIO</span>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center">
         {/* Circular Indicator */}
         <div className="relative w-40 h-40 md:w-56 md:h-56 mb-12 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 scale-100 transition-transform">
               <circle 
                  cx="50%" cy="50%" r="42%" 
                  className="stroke-white/5 fill-none stroke-[2px]" 
               />
               <motion.circle 
                  cx="50%" cy="50%" r="42%" 
                  className="stroke-accent fill-none stroke-[2px]" 
                  style={{ 
                    pathLength: count / 100,
                    filter: "drop-shadow(0 0 8px var(--accent))"
                  }} 
               />
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="font-mono text-3xl font-bold text-foreground tracking-widest leading-none">
                  {count.toString().padStart(2, "0")}
                  <span className="text-accent text-sm ml-1">%</span>
               </span>
               <div className="w-10 h-px bg-accent/20 mt-3" />
            </div>

            {/* Orbiting element - Positioned outside the ring to prevent overlap */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-10px] md:inset-[-15px]"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_12px_var(--accent)]" />
            </motion.div>
         </div>

         {/* Status Text Block */}
         <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
               <div className="flex items-center gap-1.5 font-mono text-[0.62rem] text-accent tracking-[0.25em] uppercase font-bold">
                  <Cpu size={12} className="animate-pulse" />
                  {status}
               </div>
            </div>

            {/* Progressive Bar */}
            <div className="w-[280px] h-1 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
               <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${count}%` }}
                  className="h-full bg-accent relative"
               >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
               </motion.div>
            </div>

            {/* Bottom Indicators */}
            <div className="flex gap-8 mt-6">
               <div className="flex items-center gap-2 font-mono text-[0.5rem] text-muted-foreground uppercase tracking-widest">
                  <Radio size={10} className="text-accent" />
                  Uplink_Active
               </div>
               <div className="flex items-center gap-2 font-mono text-[0.5rem] text-muted-foreground uppercase tracking-widest">
                  <ShieldCheck size={10} className="text-accent" />
                  Secure_Init
               </div>
            </div>
         </div>
      </div>

      {/* Floating HUD Labels (Top Left/Bottom Right) */}
      <div className="absolute top-12 left-12 font-mono text-[0.55rem] text-foreground/40 uppercase tracking-[0.4em] opacity-40">
         UNIT_LOAD_v1.0 // BOOT_SEQUENCE
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[0.55rem] text-foreground/40 uppercase tracking-[0.4em] opacity-40">
         RANGPUR_SECTOR_VII // NET_BD
      </div>

      {/* Scanning Line Sweep */}
      <motion.div 
         animate={{ top: ["-10%", "110%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-[100px] bg-linear-to-b from-transparent via-accent/[0.04] to-transparent pointer-events-none"
      />
    </div>
  );
}
