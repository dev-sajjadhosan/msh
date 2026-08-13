import AboutMe from "@/components/custom/about_me";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import Projects from "@/components/custom/project/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between font-mono max-w-4xl mx-auto h-full p-5">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
