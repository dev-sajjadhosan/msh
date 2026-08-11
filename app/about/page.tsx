// export default function AboutPage() {
//   return (
//     <>
//       <div className="flex flex-col h-screen font-mono w-4xl mx-auto p-20">
//         <h1 className="text-xl font-bold">About Page</h1>

//         <div className="mt-5 flex flex-col gap-5">
//           <p className="text-lg">Hey there! I am Mohammad Sajjad Hosan,</p>

//           <p className="text-md">
//             a passionate Full Stack Developer with a love for creating
//             innovative solutions. With a strong background in both front-end and
//             back-end development, I enjoy building seamless user experiences and
//             robust applications. My journey in the tech world has been driven by
//             curiosity and a desire to continuously learn and grow.
//           </p>
//           <p className="text-md">
//             Not only that when I start working with my father on repairing
//             electronic devices, then it got my attention how hardware and
//             software communicate with each other.
//           </p>

//           <p className="text-md">
//             So, from that time I started to learn programming. And then I find
//             web development. The starting of my device was just an phone and it
//             was very fun and interesting. So, because of my interest in
//             programming, I started to learn web development and then I find
//             myself in the world of programming. And now <b>Alhamdulillah</b>, I
//             am a Full Stack Developer.
//           </p>

//           <p className="text-md">
//             I am always eager to take on new challenges and explore emerging
//             technologies. Whether it&apos;s developing web applications,
//             optimizing performance, or implemening cutting-edge features, I am
//             committed to delivering high-quality solutions.
//           </p>
//           <p className="text-md">
//             Also When I&apos;m not coding, you can find me exploring the latest
//             tech trends, experimenting with new frameworks, or contributing to
//             open-source projects. I believe in the power of technology to
//             transform lives and am dedicated to making a positive impact through
//             my work.
//           </p>

//           <p className="text-md">
//             But, not just that I spend my time on technologies, I also work on
//             servicing and repairing electronic devices. Explore new electronics
//             components, digital modules and micro-controllers. Try to build my
//             own projects.
//           </p>
//           <p className="text-md">
//             Currently, I am working on Arduino and ESP32. To Know -
//             <br />
//             <ul>
//               <li>- How they work?</li>
//               <li>- How to program them?</li>
//               <li>- How to communicate with other devices?</li>
//               <li>- How to control other devices with them ?</li>
//               <li>- And many more...</li>
//             </ul>
//           </p>

//           <p className="text-md">
//             Let&apos;s connect and collaborate! If you&apos;re looking for a
//             passionate and skilled Full Stack Developer to bring your ideas to
//             life, feel free to reach out. I&apos;m always excited to discuss new
//             projects, share knowledge, and contribute to the tech community.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Code2,
  ShieldHalf,
  Gamepad2,
  BookOpen,
  Wrench,
  AudioLines,
  Heart,
  MessageCircle,
  Milestone,
} from "lucide-react";
import {
  FaAt,
  FaDiscord,
  FaFacebook,
  FaGithubAlt,
  FaLinkedinIn,
  FaMailchimp,
  FaReddit,
  FaYoutube,
} from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";

const hobbies = [
  {
    icon: Wrench,
    title: "Electronics Tinkering",
    description: "Repairing devices, prototyping with Arduino & ESP32.",
  },
  {
    icon: ShieldHalf,
    title: "Creativity ",
    description: "Exploring ideas, project and creative and smooth UI/UX.",
  },
  {
    icon: Code2,
    title: "Side Projects",
    description: "Building small tools and experiments outside work.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Unwinding with strategy and problem-solving games.",
  },
  {
    icon: BookOpen,
    title: "Tech Reading",
    description: "Following new frameworks, CS fundamentals, and blogs.",
  },
  {
    icon: Cpu,
    title: "Hardware Exploration",
    description: "Digital modules, sensors, and microcontroller projects.",
  },
];

const socials = [
  {
    title: "github",
    icon: FaGithubAlt,
  },
  {
    title: "linkedin",
    icon: FaLinkedinIn,
  },
  {
    title: "discord",
    icon: FaDiscord,
  },
  {
    title: "reddit",
    icon: FaReddit,
  },
  {
    title: "Facebook",
    icon: FaFacebook,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-mono w-4xl mx-auto p-20">
      <div className="flex flex-col gap-1">
        <Avatar className="size-15 ring-2 ring-black/35 p-1">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-md font-medium">More About Me -</h1>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {/* Hook */}
        <p className="text-md  leading-7">
          Hey, I&apos;m <b>Mohammad Sajjad Hosan</b> — a self-taught Full Stack
          Developer who started out fixing circuit boards, and writing code.
        </p>

        {/* Origin story */}
        <section>
          <h2 className="font-medium text-md mb-2 flex items-center gap-2">
            <Milestone size={17} /> How I Got Here
          </h2>
          <p className="text-sm leading-6">
            It started with electronics. Working alongside my father repairing
            devices, I got curious about how hardware and software actually talk
            to each other. That question pulled me into programming — with
            nothing but a phone as my first &quot;dev machine.&quot; It was
            slow, it was fun, and it hooked me. From there I found web
            development, and <b>Alhamdulillah</b>, that curiosity turned into a
            career.
          </p>
        </section>

        {/* Current work */}
        <section>
          <h2 className="font-medium text-md mb-2 flex items-center gap-2">
            <Milestone size={17} /> What I Build Today
          </h2>
          <p className="text-sm leading-6">
            I work across the full stack —{" "}
            <b>Next.js, TypeScript, Prisma, and PostgreSQL</b> — designing and
            shipping production-grade web applications. I care about clean
            architecture, performance, and code that doesn&apos;t fall apart
            when it meets real users. Currently building <b>Censura</b>, and
            always exploring new frameworks and tools worth adopting.
          </p>
        </section>

        {/* Electronics / hardware */}
        <section>
          <h2 className="font-medium text-md mb-2 flex items-center gap-2">
            <Milestone size={17} /> Beyond the Screen
          </h2>
          <p className="text-sm  leading-6">
            Code isn&apos;t the whole story. I still repair and service
            electronics, and I&apos;m currently deep in <b>Arduino and ESP32</b>
            , learning:
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>How microcontrollers actually work</li>
            <li>How to program them</li>
            <li>How they communicate with other devices</li>
            <li>How to control hardware from code</li>
          </ul>
          <p className="text-sm mt-2  leading-6">
            Long term, this is building toward electronics engineering and
            ethical hacking — understanding systems from silicon to server.
          </p>
        </section>

        {/* Hobbies */}
        <section>
          <h2 className="font-medium text-md mb-2 flex items-center gap-2">
            <Wrench size={17} /> Outside of Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-3">
            {hobbies.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="border border-black/15 rounded-lg p-4 flex flex-col gap-2 hover:border-black/55 transition-colors"
              >
                <div className="flex items-end gap-2">
                  <div className="p-2 border border-black/15 rounded-lg">
                    <Icon size={13} />
                  </div>
                  <h3 className="font-medium text-sm">{title}</h3>
                </div>
                <p className="text-xs text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <h2 className="font-medium text-md mt-9 mb-2 flex items-center gap-2">
            <MessageCircle size={17} />
            Let&apos;s Connect
          </h2>
          <p className="text-sm">
            If you need a developer who can ship real products — or just want to
            talk hardware, security, or code — reach out. Always up for new
            projects and good conversations.
          </p>
          <div className="flex flex-col items-end justify-end gap-2 mt-5">
            <h2 className="text-xs">
              Want to connect? Here are some ways to reach me.
            </h2>
            <div className="flex items-center justify-end gap-2">
              {socials.map(({ title, icon: Icon }, idx) => (
                <Badge key={idx} className="p-4 capitalize" variant={"outline"}>
                  <Icon /> {title}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
