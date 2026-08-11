"use client";

import { TbHammer, TbMoon, TbMoon2 } from "react-icons/tb";
import { Badge } from "../ui/badge";
import { TPBtn } from "./tp_btn";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Badge className="p-3" variant={"secondary"}>
          msh
        </Badge>
        <div className="flex items-center gap-2">
          <Button size={"icon"} variant={"ghost"}>
            <TbMoon />
          </Button>
          <Button size={"icon"} variant={"ghost"}>
            <TbHammer />
          </Button>
          <Badge className="p-3" variant={"secondary"}>
            {/* <span className="w-3 h-3"></span> */}
            <span className="bg-blue-500 animate-ping w-1 h-1 rounded-full mr-1.5" />
            Open to Work{" "}
          </Badge>
        </div>
      </div>
    </>
  );
}
