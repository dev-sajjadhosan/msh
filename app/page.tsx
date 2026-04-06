"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Changa_One } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Home from "@/components/modules/Home/Home";

const changaOne = Changa_One({
  subsets: ["latin"],
  weight: "400",
});

const MOTIVATIONAL_TEXT =
  "Thank you for visit my portfolio. This is not as good as other creative developer. But i am on the way to chace them. I hope you will be their for cheare me or help me to clam the hill";

export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLHeadingElement>(null);
  const alaikumRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial Reveal: Big "Portfolio" centered
    tl.fromTo(
      portfolioRef.current,
      { opacity: 0, scale: 1.5, y: 0 },
      { opacity: 1, scale: 1, duration: 1.8, ease: "power4.out" },
    );

    // 2. Shrink Portfolio and move UP to make space
    tl.to(
      portfolioRef.current,
      {
        scale: 0.35,
        y: -50,
        x: -200,
        duration: 1.2,
        //   fontFamily: "font-sans"
        ease: "expo.inOut",
      },
      "+=0.3",
    );

    // 3. Reveal "Assalamu Alaikum" below the small Portfolio
    tl.fromTo(
      alaikumRef.current,
      { opacity: 0, y: 0, scale: 0.9 },
      {
        opacity: 1,
        y: -80,
        x: -167,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );

    // 4. Reveal Paragraph below Assalamu Alaikum
    tl.fromTo(
      paraRef.current,
      { opacity: 0, y: 0, filter: "blur(8px)" },
      {
        opacity: 1,
        y: -60,
        x: 13,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    );

    // 5. Show Loading Counter on Bottom-Right
    tl.fromTo(
      counterRef.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          const countObj = { val: 0 };
          gsap.to(countObj, {
            val: 100,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: function () {
              setCount(Math.floor(countObj.val));
            },
            onComplete: () => {
              setIsFinished(true);
            },
          });
        },
      },
      "-=0.3",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center h-screen w-full`}
    >
      {/* <div className="z-10 flex flex-col items-center max-w-4xl px-6">
        <h1
          ref={portfolioRef}
          className={`${changaOne.className} text-7xl md:text-9xl tracking-tighter`}
        >
          Portfolio
        </h1>
        <h2
          ref={alaikumRef}
          style={{ opacity: 0 }}
          className="text-md font-light tracking-wide"
        >
          Hey Their, Assalamu Alaikum!
        </h2>

        <p
          ref={paraRef}
          style={{ opacity: 0 }}
          className="font-light leading-relaxed max-w-2xl text-muted-foreground px-4"
        >
          {MOTIVATIONAL_TEXT}
        </p>
        <div
          ref={counterRef}
          style={{ perspective: "1000px", opacity: 0 }}
          className="flex flex-col items-end gap-1 z-20 w-full"
        >
          <div className="flex items-end gap-1">
            <span className="text-3xl tracking-tighter">{count}</span>
            <span className="text-sm text-muted-foreground">%</span>
          </div>
          <h1 className="text-xs text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
            Establishing Connection
          </h1>
        </div>
      </div>

      <AnimatePresence>
        {isFinished && ( */}
          {/* <motion.div
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 right-0 bottom-0  bg-background z-100 h-full w-full"
          > */}
            <Home />
          {/* </motion.div> */}
        {/* )}
      </AnimatePresence> */}
    </div>
  );
}
