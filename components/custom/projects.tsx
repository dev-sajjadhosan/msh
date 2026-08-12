import ProjectShowCase from "./project_showcase";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-15 w-full">
        <h3 className="text-xl font-medium">My Projects</h3>
        <ProjectShowCase />
      </div>
    </>
  );
}
