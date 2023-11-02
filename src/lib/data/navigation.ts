import app from "lib/config/app"
import {
    AiFillGithub as GitHubIcon,
    AiFillLinkedin as LinkedInIcon,
    AiFillTwitterCircle as TwitterIcon,
    AiFillProfile as ResumeIcon,
} from "react-icons/ai"

import type { Icon } from "components/icons"

export type LinkItem = {
    name: string
    href: string
    isExternal?: boolean
    icon?: Icon
    onClick?: () => void
}

export const SOCIAL_LINKS: LinkItem[] = [
    { name: "GitHub", icon: GitHubIcon, href: app.github, isExternal: true },
    { name: "X", icon: TwitterIcon, href: app.twitter, isExternal: true },
    {
        name: "LinkedIn",
        icon: LinkedInIcon,
        href: app.linkedin,
        isExternal: true,
    },
    { name: "Resume", icon: ResumeIcon, href: app.resume, isExternal: true },
]

export const NAV_LINKS: LinkItem[] = [
    { name: "Projects", href: "/projects" },
    { name: "NFTs", href: "/nfts/bhawkinson.eth" },
]
