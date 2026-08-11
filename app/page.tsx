import AboutMe from "@/components/custom/about_me";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
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
      <Hero />
      <AboutMe />
    </div>
  );
}
