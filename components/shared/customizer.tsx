"use client";

import { useState, useEffect } from "react";
import { Settings, Check, Palette, Type, Sun, Moon, Monitor, RotateCcw } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ACCENTS = [
  { name: "Lime", color: "#c8ff00" },
  { name: "Cyan", color: "#00f0ff" },
  { name: "Purple", color: "#bf00ff" },
  { name: "Rose", color: "#ff006e" },
  { name: "Orange", color: "#ff8800" },
];

const FONTS = [
  { name: "Syne Architect", value: "var(--font-syne)", type: "Premium" },
  { name: "Chakra Engine", value: "var(--font-gaming)", type: "Gaming" },
  { name: "Orbitron HUD", value: "Orbitron, sans-serif", type: "Gaming" }, // Adding Orbitron as a fallback or if I can add it
  { name: "Outfit Geometric", value: "var(--font-outfit)", type: "Modern" },
];

const CURSORS = [
  { name: "Classic", value: "default", type: "Standard" },
  { name: "Minimal", value: "simple", type: "Minimalist" },
  { name: "Engine", value: "advanced", type: "Dynamic" },
  { name: "Gaming", value: "crosshair", type: "Precision" },
];

const DEFAULT_ACCENT = "#c8ff00";
const DEFAULT_FONT = "var(--font-syne), var(--font-mono)";
const DEFAULT_CURSOR = "advanced";

export default function Customizer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accent, setAccent] = useState(DEFAULT_ACCENT);
  const [font, setFont] = useState(DEFAULT_FONT);
  const [cursorType, setCursorType] = useState(DEFAULT_CURSOR);

  useEffect(() => {
    setMounted(true);
    const savedAccent = localStorage.getItem("portfolio-accent");
    const savedFont = localStorage.getItem("portfolio-font");
    const savedCursor = localStorage.getItem("portfolio-cursor");
    
    if (savedAccent) {
      setAccent(savedAccent);
      document.documentElement.style.setProperty("--accent", savedAccent);
      const r = parseInt(savedAccent.slice(1, 3), 16);
      const g = parseInt(savedAccent.slice(3, 5), 16);
      const b = parseInt(savedAccent.slice(5, 7), 16);
      document.documentElement.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    }
    if (savedFont) {
      setFont(savedFont);
      document.documentElement.style.setProperty("--font-syne", savedFont.split(',')[0]);
    }
    if (savedCursor) {
      setCursorType(savedCursor);
      document.documentElement.setAttribute("data-cursor", savedCursor);
    }
  }, []);

  const handleCursorChange = (type: string) => {
    setCursorType(type);
    document.documentElement.setAttribute("data-cursor", type);
    localStorage.setItem("portfolio-cursor", type);
  };

  const handleFontChange = (fontValue: string) => {
    setFont(fontValue);
    document.documentElement.style.setProperty("--font-syne", fontValue.split(',')[0]);
    localStorage.setItem("portfolio-font", fontValue);
  };

  const handleAccentChange = (color: string) => {
    setAccent(color);
    document.documentElement.style.setProperty("--accent", color);
    
    // Convert hex to RGB for CSS variables
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    document.documentElement.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    
    localStorage.setItem("portfolio-accent", color);
  };

  const handleReset = () => {
    handleAccentChange(DEFAULT_ACCENT);
    handleFontChange(DEFAULT_FONT);
    handleCursorChange(DEFAULT_CURSOR);
    setTheme("dark");
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-9999">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="size-9 bg-accent text-black hover:scale-110 active:scale-95 rounded-full"
          >
            <Settings className="animate-[spin_4s_linear_infinite]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="left" 
          align="center" 
          sideOffset={20}
          className="w-85 bg-card p-6 rounded-2xl max-h-[88vh] overflow-y-auto custom-scrollbar"
        >
          <div className="space-y-8">
            {/* Header HUD Style */}
            <div className="flex items-center justify-between border-b border-border pb-6 mb-2">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 text-accent rounded-xl border border-accent/20">
                    <Palette size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.7rem] text-foreground font-bold uppercase tracking-widest leading-none">Customizer</div>
                    <div className="font-mono text-[0.5rem] text-muted uppercase tracking-[0.25em] mt-1.5 opacity-50">Interface_Update_v2.1</div>
                  </div>
               </div>
               <Button 
                 variant="ghost" 
                 size="icon" 
                 onClick={handleReset}
                 className="h-8 w-8 hover:bg-accent/10 hover:text-accent rounded-lg cursor-none"
                 title="Reset to Factory Defaults"
               >
                 <RotateCcw size={14} />
               </Button>
            </div>

            {/* Typography Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-5">
                <Label className="font-mono text-[0.62rem] text-accent tracking-[0.25em] uppercase">Core Typeface</Label>
                <span className="font-mono text-[0.5rem] text-muted uppercase tracking-widest bg-border px-2 py-0.5 rounded">Select Mode</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {FONTS.map((innerFont) => (
                  <button
                    key={innerFont.value}
                    onClick={() => handleFontChange(innerFont.value)}
                    className={cn(
                      "flex flex-col items-start gap-2 p-4 border rounded-2xl transition-all cursor-none relative group overflow-hidden",
                      font === innerFont.value 
                        ? "bg-accent/10 border-accent/40 text-accent" 
                        : "bg-surface/30 border-border text-muted hover:border-accent/20 hover:bg-surface/50"
                    )}
                  >
                    <div className="font-mono text-[0.5rem] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{innerFont.type}</div>
                    <div 
                      className="text-[0.8rem] font-bold tracking-tight leading-none truncate w-full"
                      style={{ fontFamily: innerFont.value }}
                    >
                      {innerFont.name.split(' ')[0]}
                    </div>
                    {font === innerFont.value && (
                      <div className="absolute top-2 right-2">
                        <Check size={10} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent swatches */}
            <div className="space-y-4">
              <Label className="font-mono text-[0.62rem] text-accent tracking-[0.25em] uppercase mb-5 block">Primary Flux</Label>
              <div className="flex flex-wrap gap-4">
                {ACCENTS.map((item) => (
                  <button
                    key={item.color}
                    onClick={() => handleAccentChange(item.color)}
                    className="group relative cursor-none"
                  >
                    <div 
                      className={cn(
                        "w-11 h-11 rounded-2xl transition-all duration-500 border-2",
                        accent === item.color ? "border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "border-transparent scale-100 hover:scale-105"
                      )}
                      style={{ backgroundColor: item.color }}
                    />
                    {accent === item.color && (
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Cursor Selection */}
            <div className="space-y-4">
              <Label className="font-mono text-[0.62rem] text-accent tracking-[0.25em] uppercase mb-5 block">Cursor Module</Label>
              <div className="grid grid-cols-2 gap-2.5">
                {CURSORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => handleCursorChange(c.value)}
                    className={cn(
                      "flex flex-col items-start gap-2 p-4 border rounded-2xl transition-all cursor-none relative group overflow-hidden",
                      cursorType === c.value 
                        ? "bg-accent/10 border-accent/40 text-accent font-bold" 
                        : "bg-surface/30 border-border text-muted hover:border-accent/20"
                    )}
                  >
                    <div className="font-mono text-[0.5rem] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{c.type}</div>
                    <div className="text-[0.75rem] font-bold tracking-tight leading-none truncate w-full">{c.name}</div>
                    {cursorType === c.value && (
                      <div className="absolute top-2 right-2">
                         <Check size={10} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Lighting Selection */}
            <div>
              <Label className="font-mono text-[0.62rem] text-accent tracking-[0.25em] uppercase mb-5 block">Light Environment</Label>
              <RadioGroup 
                value={theme} 
                onValueChange={setTheme}
                className="grid grid-cols-2 gap-2.5"
              >
                  {[
                    { id: "light", icon: <Sun size={16} />, label: "Daylight" },
                    { id: "dark", icon: <Moon size={16} />, label: "Darkroom" },
                  ].map((m) => (
                    <div key={m.id} className="w-full">
                      <RadioGroupItem
                        value={m.id}
                        id={`theme-${m.id}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`theme-${m.id}`}
                        className={cn(
                          "flex items-center justify-center gap-3 py-4 border rounded-2xl transition-all cursor-none w-full",
                          theme === m.id 
                            ? "bg-accent/10 border-accent/40 text-accent font-bold" 
                            : "bg-surface/30 border-border text-muted hover:border-accent/20"
                        )}
                      >
                        {m.icon}
                        <span className="font-mono text-[0.65rem] uppercase tracking-widest">{m.label}</span>
                      </Label>
                    </div>
                  ))}
              </RadioGroup>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
            <span className="font-mono text-[0.5rem] text-muted/40 uppercase tracking-[0.2em]">Ready_To_Sync</span>
            <span className="font-mono text-[0.5rem] text-muted/40 uppercase tracking-[0.2em]">MSH_v.1</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
