"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

const tabsArray = [
  {
    title: "Server",
    icon: "",
    id: 0,
  },
  {
    title: "Client",
    icon: "",
    id: 1,
  },
  {
    title: "Iot/Automation",
    icon: "",
    id: 2,
  },
];

export default function ProjectsClientPage() {
  return (
    <>
      <div className="flex flex-col h-screen w-4xl mx-auto font-mono p-9">
        {/* <h3 className="text-lg font-medium">My Projects</h3> */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {tabsArray.map((item, idx) => (
                <Badge key={idx} variant={"ghost"} className="p-3">
                  {item.title}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Button variant={"outline"} size={"xs"}>
                New
              </Button>
              <Button variant={"outline"} size={"xs"}>
                Working
              </Button>
              <Button variant={"outline"} size={"xs"}>
                Working
              </Button>
            </div>
          </div>
          <div className="mt-5 p-5">
            <div className="grid grid-cols-2">
              {Array.from({ length: 6 }).map((item, idx) => (
                <Link key={idx} href={`projects/${idx + 1}`}>
                  <div className="w-full h-70 border flex items-center justify-center">
                    Project {idx + 1}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
