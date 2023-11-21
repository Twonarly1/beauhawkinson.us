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
  imageSrc?: string;
  icon?: IconType;
  onClick?: () => void;
};

export const SOCIAL_LINKS: LinkItem[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    imageSrc: "/beau-hawkinson.jpg",
    href: app.github,
    isExternal: true,
  },
  {
    name: "X",
    icon: FaXTwitter,
    imageSrc: "/two-uni.jpg",
    href: app.twitter,
    isExternal: true,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    imageSrc: "/beau-hawkinson.jpg",

    href: app.linkedin,
    isExternal: true,
  },
  // {
  //   name: "Resume",
  //   icon: ResumeIcon,
  //   imageSrc: "/beau-hawkinson.jpg",
  //   href: app.resume,
  //   isExternal: true,
  // },
];

export const NAV_LINKS: LinkItem[] = [
  // { name: "Home", icon: FaHome, href: "/" },
  { name: "Projects", icon: FaCode, href: "/projects" },
  { name: "NFTs", icon: FaRainbow, href: "/nfts/bhawkinson.eth" },
  { name: "Tech", icon: FaRainbow, href: "/tech" },
];
