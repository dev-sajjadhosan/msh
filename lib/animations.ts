import { gsap } from "gsap";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?";

export function scramble(el: HTMLElement, final: string, ms = 1000, delay = 0) {
  const len = final.length;
  let f = 0;
  const tf = Math.round(ms / 16);
  let df = Math.round(delay / 16);

  const t = setInterval(() => {
    if (df-- > 0) return;
    f++;
    const p = f / tf;
    const rv = Math.floor(p * len);
    let o = "";
    for (let i = 0; i < len; i++) {
      const c = final[i];
      if (c === " ") {
        o += " ";
        continue;
      }
      if (c === "\n") {
        o += "\n";
        continue;
      }
      o += i < rv ? c : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    }
    el.textContent = o;
    if (f >= tf) {
      el.textContent = final;
      clearInterval(t);
    }
  }, 16);

  return () => clearInterval(t);
}

export function splitChars(el: HTMLElement) {
  const txt = el.textContent?.trim() || "";
  el.innerHTML = "";
  return [...txt].map((c) => {
    const s = document.createElement("span");
    s.textContent = c === " " ? "\u00a0" : c;
    s.style.display = "inline-block";
    el.appendChild(s);
    return s;
  });
}

export function magneticEffect(el: HTMLElement, strength = 0.4) {
    const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
            x: (e.clientX - r.left - r.width / 2) * strength,
            y: (e.clientY - r.top - r.height / 2) * strength,
            duration: 0.38,
            ease: "power2.out"
        });
    };
    
    const reset = () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.45)"
        });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    
    return () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", reset);
    };
}
