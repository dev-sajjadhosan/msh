import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectVideo from "@/components/custom/project/project_video";
import ProjectPop from "@/components/custom/project/project_pop";
import {
  ArrowLeft,
  Bug,
  ChartNoAxesGantt,
  Construction,
  Eye,
  Home,
  Link2,
  Loader,
  MirrorRectangular,
  Share2,
  StarPlus,
} from "lucide-react";
import { TbBrandGithub, TbBrandReact, TbGitFork } from "react-icons/tb";
import { VscRepo } from "react-icons/vsc";

interface ProjectData {
  id: string;
  title: string;
  description: string;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Replace with server-side DB fetch or API call
  // const project = await getProjectFromDb(id);
  const project: ProjectData = {
    id,
    title: "Censura",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo dicta velit enim quas nostrum. Error beatae dolorum consequatur pariatur.",
  };

  return (
    <main className="h-screen w-full bg-background p-13 font-mono flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Construction size={45} />
        <h3 className="text-xl">Construction Mode</h3>
        <p className="text-sm w-8/12 text-center capitalize">
          Hey, Their we are currently working on other project. The project you
          want to see? you can use the button blow or visit the home page
          project section to see them.
        </p>
        <p className="text-md">Thank You!</p>

        <div className="flex items-center gap-3 mt-3">
          <Button variant={"outline"}>
            <Home /> Home
          </Button>
          <Button variant={"ghost"}>
            <TbBrandGithub /> Github Repository
          </Button>
        </div>
      </div>
    </main>
  );
}
