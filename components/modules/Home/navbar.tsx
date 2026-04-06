import WorkStatus from "@/components/shared/work-status";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between w-9/12 mx-auto">
      <h1 className="text-lg font-mono">Msh</h1>
      <WorkStatus />
      <Badge className="text-xs py-3 px-3">10:10:01 PM</Badge>
    </header>
  );
}
