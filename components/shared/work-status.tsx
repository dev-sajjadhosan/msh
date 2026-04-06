import { Badge } from "../ui/badge";

export default function WorkStatus() {
  return (
    <Badge className="flex items-center gap-2">
      <div className="flex items-center justify-center relative size-3">
        <div className="absolute bg-green-700 w-full h-full rounded-full animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-green-500 " />
      </div>
      Open For Work
    </Badge>
  );
}
