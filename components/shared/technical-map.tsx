"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Compass, Cpu, Maximize2, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TechnicalMap() {
  const location = "Rangpur, Bangladesh";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <Card className="relative w-full aspect-video md:aspect-[21/9] bg-card border-border overflow-hidden group shadow-2xl rounded-[2rem]">
      {/* Real Map Iframe with Dark Mode Filter */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Real Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={mapUrl}
          className="grayscale dark:invert-[0.9] dark:hue-rotate-[180deg] opacity-60 dark:opacity-40 transition-all duration-700 group-hover:opacity-80 dark:group-hover:opacity-60 group-hover:grayscale-0"
        />
      </div>

      {/* Premium HUD Overlay */}
      <CardContent className="absolute inset-0 z-10 p-0 pointer-events-none">
        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        {/* Top HUD Line */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-card/80 to-transparent flex items-start justify-between p-8">
           <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 <span className="font-mono text-[0.65rem] text-accent font-bold tracking-[0.2em] uppercase">Live_Satellite_Feed</span>
              </div>
              <Badge variant="outline" className="bg-card/50 backdrop-blur-md border-accent/20 text-[0.55rem] font-mono tracking-widest uppercase py-0.5">
                 Status: Operational // Rangpur_Sector_7
              </Badge>
           </div>

           <div className="flex gap-2 pointer-events-auto">
              <button className="p-2 bg-card/80 border border-border rounded-lg hover:border-accent hover:text-accent transition-all">
                 <Layers size={14} />
              </button>
              <button className="p-2 bg-card/80 border border-border rounded-lg hover:border-accent hover:text-accent transition-all">
                 <Maximize2 size={14} />
              </button>
           </div>
        </div>

        {/* The Targeting Reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="w-48 h-48 border border-accent/20 rounded-full border-dashed"
           />
           <div className="absolute w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border-t-2 border-l-2 border-accent w-3 h-3 top-0 left-0" />
              <div className="absolute inset-0 border-t-2 border-r-2 border-accent w-3 h-3 top-0 right-0" />
              <div className="absolute inset-0 border-b-2 border-l-2 border-accent w-3 h-3 bottom-0 left-0" />
              <div className="absolute inset-0 border-b-2 border-r-2 border-accent w-3 h-3 bottom-0 right-0" />
              <MapPin size={24} className="text-accent animate-bounce" />
           </div>
        </div>

        {/* Bottom Data Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-card/90 to-transparent p-8 flex items-end justify-between">
           <div className="space-y-3">
              <div className="flex items-center gap-4">
                 <div className="flex flex-col">
                    <span className="font-mono text-[0.5rem] text-muted uppercase tracking-widest">LATITUDE</span>
                    <span className="font-mono text-[0.8rem] font-bold text-foreground">25.748512</span>
                 </div>
                 <div className="w-px h-6 bg-border" />
                 <div className="flex flex-col">
                    <span className="font-mono text-[0.5rem] text-muted uppercase tracking-widest">LONGITUDE</span>
                    <span className="font-mono text-[0.8rem] font-bold text-foreground">89.250314</span>
                 </div>
              </div>
              <div className="font-mono text-[0.6rem] text-muted uppercase tracking-[0.3em]">
                 Base_Identification: MSH_ENGINEERING_HUB
              </div>
           </div>

           <div className="flex items-center gap-6 opacity-60">
              <div className="flex flex-col items-end gap-1">
                 <Compass size={16} className="text-accent animate-[spin_4s_linear_infinite]" />
                 <span className="font-mono text-[0.55rem] text-muted tracking-widest">NNE // 12°</span>
              </div>
              <Globe size={24} className="text-muted" />
           </div>
        </div>
      </CardContent>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-2 h-2 border-t-2 border-l-2 border-accent/40" />
      <div className="absolute bottom-10 right-10 w-2 h-2 border-b-2 border-r-2 border-accent/40" />
    </Card>
  );
}
