"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { TechItem } from "@/types/tech_types";
import { Tech } from "./tech_skills";

// Helper function to color-code progress badges
const getBadgeVariant = (label: string) => {
  switch (label.toLowerCase()) {
    case "advanced":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "intermediate":
      return "bg-sky-500/10 text-sky-500 border-sky-500/20";
    case "basic":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function TechStackGrid() {
  return (
    <ul className="flex flex-col gap-7 list-none p-0 w-full h-full">
      {Tech.map(({ name, techs }, catIdx) => (
        <li
          key={catIdx}
          className="group relative flex flex-col justify-between"
        >
          <div>
            {/* Category Title */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium tracking-wide text-foreground">
                {name || "Unknown"}
              </h3>
              <Badge variant={"outline"}>
                {techs.length < 10 ? "0" + techs.length : techs.length}
              </Badge>
            </div>

            {/* Tech Badges Grid */}
            <div className="grid grid-cols-3 gap-2">
              {techs.map((tech: TechItem, techIdx: number) => {
                const isLinkable = Boolean(tech.link && tech.link !== "#");

                const CardWrapper = isLinkable ? Link : "div";

                return (
                  <CardWrapper
                    key={techIdx}
                    href={tech.link || "#"}
                    target={isLinkable ? "_blank" : undefined}
                    rel={isLinkable ? "noopener noreferrer" : undefined}
                    className="group/item relative p-3 rounded-lg border bg-background/60 hover:bg-accent/40 hover:border-primary/40 transition-all duration-200 flex flex-col justify-between gap-2 overflow-hidden"
                  >
                    {/* Top Header: Icon & External Link Indicator */}
                    <div className="flex items-center justify-between w-full">
                      {tech.progress_label && (
                        <Badge variant="outline" className={``}>
                          {tech.progress_label}
                        </Badge>
                      )}
                      {isLinkable && (
                        <ExternalLink className=" size-4 text-muted-foreground/40 group-hover/item:text-primary transition-colors" />
                      )}
                    </div>

                    {/* Tech Name & Progress Badge */}
                    <div className="space-y-1 mt-1">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-muted/60 group-hover/item:bg-background transition-colors">
                          <Icon
                            icon={tech.icon.replace("tb:", "tabler:")}
                            className="w-5 h-5 text-foreground/80 group-hover/item:text-primary transition-colors"
                          />
                        </div>
                        <h4 className="text-xs font-medium text-foreground truncate group-hover/item:text-primary transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
