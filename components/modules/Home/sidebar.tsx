"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setIsOpen(true);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!sidebarRef.current || !curveRef.current) return;

    // The user's specific path coordinates (adapted for left-to-right)
    const initialPath = "M 0 0 H 0 Q 0 50 0 100 H 0 z";
    const midPath = "M 0 0 H 50 Q 100 50 50 100 H 0 z";
    const endPath = "M 0 0 H 100 Q 100 50 100 100 H 0 z";

    if (isOpen) {
      // Open Timeline
      const tl = gsap.timeline();

      tl.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.1,
      })
        .to(curveRef.current, {
          attr: { d: midPath },
          duration: 0.4,
          ease: "power2.in",
        })
        .to(curveRef.current, {
          attr: { d: endPath },
          duration: 0.4,
          ease: "power2.out",
        });

      // Staggered nav links
      gsap.fromTo(
        navLinksRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.4,
        },
      );
    } else {
      // Close Timeline
      const tl = gsap.timeline();

      tl.to(curveRef.current, {
        attr: { d: midPath },
        duration: 0.3,
        ease: "power2.in",
      })
        .to(curveRef.current, {
          attr: { d: initialPath },
          duration: 0.4,
          ease: "power2.out",
        })
        .to(sidebarRef.current, {
          x: "-100%",
          duration: 0.1,
        });
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Menu Icon - Neon Style */}
      <div
        ref={menuIconRef}
        onClick={toggleSidebar}
        className="fixed top-10 right-10 z-100 w-16 h-16 bg-black border border-cyan-500/30 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
          <span
            className={`absolute h-[2px] w-6 bg-cyan-400 rounded-full transition-all duration-500 ease-in-out shadow-[0_0_8px_#22d3ee] ${isOpen ? "-rotate-45" : "translate-y-[-6px]"}`}
          ></span>
          <span
            className={`absolute h-[2px] w-4 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22d3ee] ${isOpen ? "opacity-0 translate-x-4" : "translate-x-1"}`}
          ></span>
          <span
            className={`absolute h-[2px] w-6 bg-cyan-400 rounded-full transition-all duration-500 ease-in-out shadow-[0_0_8px_#22d3ee] ${isOpen ? "rotate-45" : "translate-y-[6px]"}`}
          ></span>
        </div>
      </div>

      {/* Sidebar Overlay - Liquid Morph Styled */}
      <aside
        ref={sidebarRef}
        className="fixed inset-0 h-full w-[450px] z-90 -translate-x-full overflow-visible bg-transparent text-white"
      >
        {/* The Liquid SVG Container */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible uppercase">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="sidebarGrad"
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2" stop-color="rgb(255, 135, 9)" />
                <stop offset="0.7" stop-color="rgb(247, 189, 248)" />
              </linearGradient>
            </defs>
            <path
              ref={curveRef}
              d="M 0 0 H 0 Q 0 50 0 100 H 0 z"
              fill="url(#sidebarGrad)"
              className="drop-shadow-[15px_0_30px_rgba(255,135,9,0.3)]"
            />
          </svg>
        </div>

        {/* Navigation Content */}
        <div className="relative z-10 flex flex-col h-full p-20 justify-center">
          <div className="mb-12">
            <span className="text-cyan-500/60 uppercase tracking-[0.3em] text-[10px] font-bold">
              PORTFOLIO.NAV
            </span>
          </div>
          <nav className="flex flex-col space-y-8">
            {["Home", "Projects", "Services", "Insights", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  ref={(el) => {
                    navLinksRef.current[index] = el;
                  }}
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-5xl font-bold tracking-tighter hover:text-cyan-400 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee] transition-all duration-500 group-hover:w-full"></span>
                </a>
              ),
            )}
          </nav>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-80"
        />
      )}
    </>
  );
}
