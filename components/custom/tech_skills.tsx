import { TechStack } from "@/types/tech_types";
import { Badge } from "../ui/badge";
import TechStackGrid from "./tech_stack_grid";

export const Tech: TechStack = [
  {
    name: "Programming Languages",
    techs: [
      {
        name: "JavaScript",
        icon: "tb:brand-javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        progress_label: "Advanced",
      },
      {
        name: "TypeScript",
        icon: "tb:brand-typescript",
        link: "https://www.typescriptlang.org/",
        progress_label: "Intermediate",
      },
      {
        name: "HTML5 & CSS3",
        icon: "tb:brand-html5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        progress_label: "Advanced",
      },
      {
        name: "C",
        icon: "tb:brand-c",
        link: "https://en.cppreference.com/w/c",
        progress_label: "Basic",
      },
      {
        name: "C++",
        icon: "tb:brand-cpp",
        link: "https://isocpp.org/",
        progress_label: "Basic",
      },
      {
        name: "GoLang",
        icon: "tb:brand-golang",
        link: "https://go.dev/",
        progress_label: "Basic",
      },
    ],
  },
  {
    name: "Client-Side Frameworks & Tools",
    techs: [
      {
        name: "React JS",
        icon: "tb:brand-react",
        link: "https://react.dev/",
        progress_label: "Advanced",
      },
      {
        name: "Next.js",
        icon: "tb:brand-nextjs",
        link: "https://nextjs.org/",
        progress_label: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        icon: "tb:brand-tailwind",
        link: "https://tailwindcss.com/",
        progress_label: "Advanced",
      },
      {
        name: "Shadcn UI",
        icon: "tb:brand-ui-kits",
        link: "https://ui.shadcn.com/",
        progress_label: "Advanced",
      },
      {
        name: "Framer Motion",
        icon: "tb:brand-framer",
        link: "https://www.framer.com/motion/",
        progress_label: "Intermediate",
      },
    ],
  },
  {
    name: "Server-Side Frameworks & Tools",
    techs: [
      {
        name: "Node.js",
        icon: "tb:brand-nodejs",
        link: "https://nodejs.org/",
        progress_label: "Intermediate",
      },
      {
        name: "Express JS",
        icon: "tb:brand-express",
        link: "https://expressjs.com/",
        progress_label: "Intermediate",
      },
      {
        name: "Better Auth",
        icon: "tb:shield-lock",
        link: "https://www.better-auth.com/",
        progress_label: "Intermediate",
      },
      {
        name: "JWT",
        icon: "tb:key",
        link: "https://jwt.io/",
        progress_label: "Intermediate",
      },
      {
        name: "Firebase Auth",
        icon: "tb:brand-firebase",
        link: "https://firebase.google.com/products/auth",
        progress_label: "Intermediate",
      },
    ],
  },
  {
    name: "Database & ORM Tools",
    techs: [
      {
        name: "PostgreSQL",
        icon: "tb:brand-postgresql",
        link: "https://www.postgresql.org/",
        progress_label: "Intermediate",
      },
      {
        name: "Prisma ORM",
        icon: "tb:brand-prisma",
        link: "https://www.prisma.io/",
        progress_label: "Intermediate",
      },
      {
        name: "MongoDB",
        icon: "tb:brand-mongodb",
        link: "https://www.mongodb.com/",
        progress_label: "Intermediate",
      },
      {
        name: "SQL",
        icon: "tb:database",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
        progress_label: "Basic",
      },
    ],
  },
  //   {
  //     name: "IoT & Automation",
  //     techs: [
  //       {
  //         name: "Arduino / ESP32",
  //         icon: "tb:cpu",
  //         link: "https://www.arduino.cc/",
  //         progress_label: "Basic",
  //       },
  //       {
  //         name: "MQTT / WebSockets",
  //         icon: "tb:network",
  //         link: "https://mqtt.org/",
  //         progress_label: "Basic",
  //       },
  //     ],
  //   },
  {
    name: "Development & Productivity Tools",
    techs: [
      {
        name: "VS Code",
        icon: "tb:brand-vscode",
        link: "https://code.visualstudio.com/",
        progress_label: "Advanced",
      },
      {
        name: "Git & GitHub",
        icon: "tb:brand-github",
        link: "https://github.com/",
        progress_label: "Advanced",
      },
      {
        name: "Vercel",
        icon: "tb:brand-vercel",
        link: "https://vercel.com/",
        progress_label: "Advanced",
      },
      {
        name: "Railway",
        icon: "tb:server",
        link: "https://railway.app/",
        progress_label: "Intermediate",
      },
      {
        name: "Firebase",
        icon: "tb:brand-firebase",
        link: "https://firebase.google.com/",
        progress_label: "Intermediate",
      },
      {
        name: "Postman",
        icon: "tb:api",
        link: "https://www.postman.com/",
        progress_label: "Intermediate",
      },
      {
        name: "APIdog",
        icon: "tb:api-app",
        link: "https://apidog.com/",
        progress_label: "Intermediate",
      },
      {
        name: "Beekeeper Studio",
        icon: "tb:database-cog",
        link: "https://www.beekeeperstudio.io/",
        progress_label: "Intermediate",
      },
      {
        name: "Arduino IDE",
        icon: "tb:cpu",
        link: "https://www.arduino.cc/en/software",
        progress_label: "Basic",
      },
      {
        name: "Claude AI",
        icon: "tb:sparkles",
        link: "https://claude.ai/",
        progress_label: "Advanced",
      },
      {
        name: "Gemini AI",
        icon: "tb:sparkles",
        link: "https://gemini.google.com/",
        progress_label: "Advanced",
      },
      {
        name: "Brave",
        icon: "tb:brand-brave",
        link: "https://brave.com/",
        progress_label: "Advanced",
      },
      {
        name: "Chrome",
        icon: "tb:brand-chrome",
        link: "https://www.google.com/chrome/",
        progress_label: "Advanced",
      },
    ],
  },
];

export default function TechSkills() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 w-full mt-17">
        <h3 className="text-lg font-medium">My Magic Tools</h3>
        {/* <ul className="mt-9 grid grid-cols-2">
          {Tech.map(({ name, techs }, idx) => (
            <li key={idx} className="border p-7 flex flex-col gap-5">
              <h3 className="text-sm font-medium">{name || "Unknown"}</h3>
              <div className="flex flex-wrap gap-1.5">
                {techs.map(({ icon, link, name, progress_label }, idx) => (
                  <div key={idx} className="p-5 flex flex-col gap-1 border items-start">
                    <Badge className="text-[10px]" variant={'outline'}>
                      {progress_label}
                    </Badge>
                    <h2 className="text-sm">{name}</h2>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul> */}

        <TechStackGrid />
      </div>
    </>
  );
}
