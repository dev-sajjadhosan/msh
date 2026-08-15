import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Hammer } from "lucide-react";

export default function ProjectEmptyCard() {
  return (
    <>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Hammer />
          </EmptyMedia>
          <EmptyTitle>No Project Available</EmptyTitle>
          <EmptyDescription className="w-3xl ">
            Currently, working on. From next time before start the project I
            will add the project here then working with it. So, feel free to see
            them and give feedback.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </>
  );
}
