import {
  FaDiscord,
  FaFacebook,
  FaGithubAlt,
  FaLinkedinIn,
  FaReddit,
} from "react-icons/fa6";

interface SocialProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const socials: SocialProps[] = [
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
