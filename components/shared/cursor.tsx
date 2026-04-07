"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<string>("advanced");
  const [isVisible, setIsVisible] = useState(false);

  const ringX = useSpring(0, { damping: 30, stiffness: 200 });
  const ringY = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const updateCursorSettings = () => {
       const type = document.documentElement.getAttribute("data-cursor") || "advanced";
       setCursorType(type);
       
       if (type === "default") {
          document.body.style.cursor = "auto";
          setIsVisible(false);
       } else {
          document.body.style.cursor = "none";
          setIsVisible(true);
       }
    };

    updateCursorSettings();

    // Create a MutationObserver to watch for attribute changes
    const observer = new MutationObserver(updateCursorSettings);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-cursor"] });

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseEnter = () => document.body.classList.add("hov");
    const handleMouseLeave = () => document.body.classList.remove("hov");

    window.addEventListener("mousemove", moveCursor);

    const refreshIteractives = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .pc, .sk, .tc');
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    refreshIteractives();
    
    // Refresh for dynamic content
    const interval = setInterval(refreshIteractives, 2000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [ringX, ringY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Dot/Core */}
      <div
        ref={cursorRef}
        id="cur"
        className="fixed w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9500] -translate-x-1/2 -translate-y-1/2 mix-blend-difference will-change-[left,top] transition-[width,height,opacity] duration-300"
      />

      {/* Ring / HUD Elements */}
      <AnimatePresence>
        {(cursorType === "advanced" || cursorType === "crosshair") && (
          <motion.div
            ref={ringRef}
            id="cur-ring"
            className="fixed pointer-events-none z-[9499] -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center transition-[width,height,border-radius] duration-500"
            style={{
              left: ringX,
              top: ringY,
              width: cursorType === "crosshair" ? 44 : 38,
              height: cursorType === "crosshair" ? 44 : 38,
              borderRadius: cursorType === "crosshair" ? "4px" : "50%",
              border: cursorType === "crosshair" ? "none" : "1px solid var(--accent)",
            }}
          >
            {cursorType === "crosshair" && (
              <div className="relative w-full h-full opacity-60">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent" />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-accent" />
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-accent" />
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-accent" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        body.hov #cur {
          width: ${cursorType === "simple" ? "32px" : "54px"};
          height: ${cursorType === "simple" ? "32px" : "54px"};
          opacity: 0.15;
        }
        body.hov #cur-ring {
          width: 64px !important;
          height: 64px !important;
          border-radius: 50% !important;
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}
