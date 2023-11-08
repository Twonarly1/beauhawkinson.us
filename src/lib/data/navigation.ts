import app from "lib/config/app";
import { AiFillProfile as ResumeIcon } from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaRainbow,
  FaCode,
  FaHome,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { IconType } from "react-icons";

export type LinkItem = {
  name: string;
  href: string;
  isExternal?: boolean;
  icon?: IconType;
  onClick?: () => void;
};

export const SOCIAL_LINKS: LinkItem[] = [
  { name: "GitHub", icon: FaGithub, href: app.github, isExternal: true },
  // { name: "X", icon: FaXTwitter, href: app.twitter, isExternal: true },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: app.linkedin,
    isExternal: true,
  },
  { name: "Resume", icon: ResumeIcon, href: app.resume, isExternal: true },
];

export const NAV_LINKS: LinkItem[] = [
  { name: "Home", icon: FaHome, href: "/" },
  { name: "Projects", icon: FaCode, href: "/projects" },
  { name: "Nfts", icon: FaRainbow, href: "/nfts/bhawkinson.eth" },
];
