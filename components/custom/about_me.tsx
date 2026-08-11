import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-15 w-3xl">
        <h2 className="text-xl font-bold">About Me</h2>
        <p className="text-md text-center">
          Sharing Who I am, and creating is where I am at my best. Because,
          I&apos;ve been on both sides of creation and thinking creatively to
          deliver useful and beautiful products and solve problems. So, That I
          also can be a port of the creative community.
        </p>
        <p className="text-md text-center mt-3">
          I love to spend my time on learning from others | know about new
          technologies | explore creative ideas ,designs and systems && not only
          that, I also work on servicing and repairing electronic devices.
        </p>
        {/* <p className="text-md text-center mt-3">
          Not only that, Beside the tech field, I work on servicing and reparing
          electronic devices and love to explore the electronics.
          <br />
          What grabs my attention is:
          <br />
          - how they work?
          <br />- how hardware and software communicate with each other?
        </p> */}

        <div className="flex justify-end w-full mt-3">
          <Link href="/about">
            <Button variant={"ghost"} size={"sm"}>
              More About Me <ArrowBigRightDash />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
