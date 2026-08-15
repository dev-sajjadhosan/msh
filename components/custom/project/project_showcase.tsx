import Image from "next/image";
import { Card, CardContent } from "../../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import image1 from "../../../public/image_1.jpg";
import { Badge } from "../../ui/badge";
import {
  ArrowBigRightDash,
  Bug,
  ChartNoAxesGantt,
  Eye,
  Link2,
  Loader,
  MirrorRectangular,
  PlayCircle,
  Share2,
  StarPlus,
  Video,
} from "lucide-react";
import { TbBrandReact, TbGitFork } from "react-icons/tb";
import { Button } from "../../ui/button";
import { VscRepo } from "react-icons/vsc";
import ProjectPop from "./project_pop";
import ProjectVideo from "./project_video";
import ProjectEmptyCard from "./project_empty";

const data = Array.from({ length: 0 });

export default function ProjectShowCase() {
  return (
    <>
      <>
        {data.length <= 0 ? (
          <div className="my-11">
            <ProjectEmptyCard />
          </div>
        ) : (
          <div className="w-full h-full grid grid-cols-2 mt-5">
            {data.map((item, idx) => (
              <Dialog key={idx}>
                <DialogTrigger>
                  <Card className={"w-full h-full rounded-none"}>
                    <CardContent className="flex items-center justify-center">
                      <Image
                        src={image1.src}
                        alt={idx.toString()}
                        width={300}
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent
                  className={"sm:min-w-3xl h-10/12 font-mono flex flex-col"}
                  showCloseButton={false}
                >
                  <DialogHeader className="flex-row items-center justify-between w-full">
                    <DialogTitle>##</DialogTitle>
                    <div className="flex items-center gap-1">
                      <Badge variant={"outline"} className="py-3">
                        <Eye /> 000
                      </Badge>
                      <Badge variant={"outline"} className="py-3">
                        <StarPlus /> 000
                      </Badge>
                      <Badge variant={"outline"} className="py-3">
                        <TbGitFork /> 00
                      </Badge>
                    </div>
                  </DialogHeader>

                  <div className="mt-2 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-5 w-full">
                      <div className="w-lg h-40 border-4 rounded-xl p-1 flex items-center justify-center">
                        <ProjectVideo />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between w-full">
                          <h1 className="text-xl">Censura</h1>
                          <Badge variant={"outline"}>v0</Badge>
                        </div>
                        <Badge variant={"secondary"}>
                          Movie and Media Platform
                        </Badge>
                        <p className="mt-1 text-xs leading-4.5">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Molestiae illo dicta velit enim quas nostrum.
                          Error beatae dolorum consequatur pariatur.
                        </p>
                        <div className="flex items-center justify-end gap-1 mt-2">
                          <Badge className="p-3" variant={"outline"}>
                            <Loader className="animate-spin" />
                          </Badge>
                          <Badge className="p-3" variant={"outline"}>
                            Complete
                          </Badge>
                          <Badge className="p-3" variant={"secondary"}>
                            Open-Source
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-7 mt-5 w-full">
                      <div className="w-full h-full">
                        <h3 className="text-lg font-medium">Technologies</h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-3">
                          {[
                            "react",
                            "tailwindcss",
                            "shadcnUI",
                            "react icons",
                            "motion",
                            "express",
                            "better auth",
                            "postgresql",
                            "prisma",
                            "vercel",
                            "vscode",
                            "claude",
                            "gemini",
                          ].map((item, idx) => (
                            <Badge
                              variant={"outline"}
                              key={idx}
                              className="p-3.5 capitalize"
                            >
                              <TbBrandReact size={27} strokeWidth={1} /> {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <h3 className="text-lg">Features</h3>
                        <ul className="list-disc ml-7 mt-2 space-y-1">
                          <li>Quick and Smart Authentication.</li>
                          <li>Search AI And RAG support.</li>
                          <li>get flavor recommendation by AI.</li>
                          <li>Easy Sync with any device.</li>
                          <li>Smart Bookmark and Wishlist with AI.</li>
                          <li>Smart Bookmark and Wishlist with AI.</li>
                        </ul>
                      </div>
                    </div>
                    <div className=" flex items-center justify-end gap-2.5">
                      <Button variant={"outline"}>
                        Find <Bug />
                      </Button>
                      <ProjectPop
                        popTitle="Project Repositories"
                        btnChildren={
                          <>
                            View <VscRepo />
                          </>
                        }
                        btnData={[
                          {
                            icon: MirrorRectangular,
                            title: "Clint Side",
                            link: "#",
                          },
                          {
                            icon: MirrorRectangular,
                            title: "Server Side",
                            link: "#",
                          },
                        ]}
                      />
                      <ProjectPop
                        popTitle="Project Live Links"
                        btnChildren={
                          <>
                            Live <Link2 />
                          </>
                        }
                        btnData={[
                          {
                            icon: MirrorRectangular,
                            title: "Clint",
                            link: "#",
                          },
                          {
                            icon: MirrorRectangular,
                            title: "Server",
                            link: "#",
                          },
                        ]}
                      />
                      <Button variant={"outline"} disabled>
                        Share <Share2 />
                      </Button>
                      <Button variant={"outline"} disabled>
                        More <ChartNoAxesGantt />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </>
    </>
  );
}
