import { Button } from "@/components/ui/button";
import ProjectShowCase from "./project_showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-15 w-full">
        <Tabs defaultValue="account" className="w-full">
          <div className="flex items-center justify-between gap-7 w-full">
            <h3 className="text-xl font-medium">My Projects</h3>
            <TabsList variant={"line"}>
              <TabsTrigger value="account">Client</TabsTrigger>
              <TabsTrigger value="password">Server</TabsTrigger>
              <TabsTrigger value="iot">Iot & Robotic</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="account">
            <ProjectShowCase />
          </TabsContent>
          <TabsContent value="password">
            <ProjectShowCase />
          </TabsContent>
        </Tabs>
        <Link href={"/projects"}>
          <Button variant={"outline"}>View More Projects</Button>
        </Link>
      </div>
    </>
  );
}
