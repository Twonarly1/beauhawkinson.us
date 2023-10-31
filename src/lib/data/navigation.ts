import { GitHub, Twitter, LinkedIn, Resume, Email, Rainbow } from "components/icons"
import app from "lib/config/app"

import type { Icon } from "components/icons"

export type NavLink = {
    name: string
    icon: Icon
    href: string
    isExternal?: boolean
}

const NAVIGATION: NavLink[] = [
    { name: "GitHub", icon: GitHub, href: app.github, isExternal: true },
    { name: "Twitter", icon: Twitter, href: app.twitter, isExternal: true },
    { name: "LinkedIn", icon: LinkedIn, href: app.linkedin, isExternal: true },
    { name: "Resume", icon: Resume, href: app.resume, isExternal: true },
    // { name: "Email", icon: Email, href: app.email },
    { name: "NFTs", icon: Rainbow, href: "/nfts/bhawkinson.eth" },
]

export default NAVIGATION
