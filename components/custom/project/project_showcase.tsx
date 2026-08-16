
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ProjectEmptyCard from "./project_empty";


// Sample array of projects
const projects = [
  { id: "censura", name: "Censura", thumbnail: "/image_1.jpg" },
  { id: "expense-tracker", name: "Expense Tracker", thumbnail: "/image_1.jpg" },
];

export default function ProjectShowCase() {
  if (projects.length <= 0) {
    return (
      <div className="my-11">
        <ProjectEmptyCard />
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6">
      <div className="w-full grid grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <Card className="w-full h-full rounded-none hover:border-primary transition-colors cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <span className="mt-4 font-mono font-medium">{project.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}