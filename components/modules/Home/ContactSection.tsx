"use client";

import { useEffect, useRef } from "react";
import { scramble, magneticEffect } from "@/lib/animations";
import Link from "next/link";
import { TechnicalMap } from "@/components/shared/technical-map";
import { Send, FileText } from "lucide-react";
import { GitHubCopilotDark, LinkedIn } from "@ridemountainpig/svgl-react";

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
    socRefs.current.forEach((s) => {
      if (s) cleanups.push(magneticEffect(s, 0.42));
    });
    return () => cleanups.forEach((c) => c());
  }, []);

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/dev-sajjadhosan",
      icon: <GitHubCopilotDark className="size-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/devsajjadhosan",
      icon: <LinkedIn className="size-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/MohammadSajjadHosan0",
      icon: (
        <svg  className="size-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-14 border-t border-border bg-card text-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(200,255,0,0.05),transparent_70%)]" />

      {/* HUD Map Component */}
      <div className="max-w-[1200px] mx-auto text-left mb-24">
        <TechnicalMap />
      </div>

      <div className="sl font-mono text-[0.66rem] text-accent tracking-[0.22em] uppercase mb-9.5 flex items-center justify-center gap-3">
        <span className="sn text-[0.58rem] text-muted">07</span>
        Contact
        <span className="ln flex-1 h-px bg-border max-w-[55px]" />
      </div>

      <div className="cb text-[clamp(2.8rem,9vw,9rem)] font-extrabold tracking-[-0.045em] leading-[0.95] mb-8.5 relative">
        <div ref={title1Ref} className="tl block overflow-hidden">
          <span>
            Got an <span className="text-accent italic font-normal">idea?</span>
          </span>
        </div>
        <div className="tl block overflow-hidden">
          <span>Let's build it.</span>
        </div>
      </div>

      <p className="cs font-mono text-[0.78rem] text-muted max-w-[420px] mx-auto mb-12 leading-[1.9] relative">
        Open to freelance projects, full-time roles, and interesting
        collaborations. If you have something worth building — let's talk.
      </p>

      {/* Direct Contact Info */}
      <div className="flex flex-col items-center gap-2 mb-12 font-mono text-[0.75rem] text-muted relative">
        <div className="flex items-center gap-4">
          <span className="text-accent uppercase tracking-widest text-[0.6rem]">
            Phone:
          </span>
          <span className="text-white">+880 1822398936</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-accent uppercase tracking-widest text-[0.6rem]">
            WhatsApp:
          </span>
          <span className="text-white">+880 1822398936</span>
        </div>
      </div>

      <div className="bts flex flex-wrap justify-center gap-3.5 relative">
        <Link
          ref={btn1Ref}
          href="mailto:devsajjadhosan@gmail.com"
          className="group btn btn-a inline-flex items-center gap-3 px-9.5 py-5 bg-accent text-black font-mono text-[0.72rem] font-bold tracking-widest uppercase relative overflow-hidden transition-colors"
        >
          <Send size={16} className="relative z-10" />
          <span className="relative z-10">Send Email</span>
          <span className="absolute inset-0 bg-[#d4ff33] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        </Link>
        <Link
          ref={btn2Ref}
          href="https://drive.google.com/file/d/1D0xhim0QunXEiFUuS5d51P22n44wmVB3/view?usp=drive_link"
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
            ref={(el) => {
              socRefs.current[i] = el;
            }}
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
