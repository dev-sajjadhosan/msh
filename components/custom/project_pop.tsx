import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ReactNode, ElementType } from "react";
import Link from "next/link";

interface ProjectPopProps {
  btnChildren?: ReactNode;
  data?: string[];
  btnData?: ButtonDataProps[];
  popTitle?: string;
}

interface ButtonDataProps {
  title: string;
  icon: ElementType;
  link?: string;
  action?: () => void;
}

export default function ProjectPop({
  btnChildren,
  btnData,
  popTitle,
}: ProjectPopProps) {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          {btnChildren}
        </PopoverTrigger>
        <PopoverContent className={"font-mono"} align="end" side="top">
          <PopoverHeader>
            <PopoverTitle>{popTitle || "Popover Title Here"}</PopoverTitle>
          </PopoverHeader>
          <div className="flex flex-wrap items-center justify-center gap-2 p-3">
            {btnData?.map(({ icon: Icon, title, action, link }, idx) =>
              link ? (
                <Link key={idx} href={link}>
                  <Button variant={"outline"}>
                    {title} <Icon />
                  </Button>
                </Link>
              ) : (
                <Button key={idx} variant={"outline"} onClick={action}>
                  {title} <Icon />
                </Button>
              ),
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
