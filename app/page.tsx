import Header from "@/components/custom/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import { ImSpinner10 } from "react-icons/im";
import { TbBrandReddit, TbHash, TbMail } from "react-icons/tb";

const more_titls = [
  {
    title: "Creative Designer",
  },
  {
    title: "Knowledge Eager",
  },
  {
    title: "Arduino & Iot Programmer",
  },
  {
    title: "Problem Solver",
  },
  {
    title: "Diagram Designer",
  },
  {
    title: "Solo Creator",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between font-mono max-w-4xl mx-auto h-full p-5">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 w-full mt-10">
        <Avatar className="size-45 ring-2 ring-orange-500 p-1 relative">
          <span className="absolute top-4 right-0 size-8 bg-white rounded-full z-50 flex items-center justify-center animate-spin">
            <ImSpinner10 />
          </span>
          <AvatarImage src={"https://github.com/shadcn.png"} alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1.5 items-center">
          <h1 className="text-2xl">Mohammad Sajjad Hosan</h1>
          <Badge variant={"outline"} className="p-3">
            Full Stack Developer
          </Badge>
          <div className="flex items-center gap-3 mt-3.5">
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full"
            >
              <FaGithubAlt />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full"
            >
              <FaLinkedinIn />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full"
            >
              <TbMail />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon-lg"}
              className="rounded-full"
            >
              <TbBrandReddit />
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 w-3xl">
            {more_titls.map((item, index) => (
              <Badge key={index} variant={"secondary"} className="p-4">
                <TbHash /> {item?.title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
