import { Bicycle, Diamond, Eth, Mountains, Wrench } from "components/icons"
import { cache } from "react"

import type { Icon } from "components/icons"

export interface Technology {
    imageSrc: string
    tooltip: string
}

export type Project = {
    description: string
    name: string
    hover_bg_color: string
    hover_text_color: string
    year: string
    icon: Icon
    slug: string
    linkToBuild?: string
    linkToWebsite?: string
    summary: string
    technologies: Technology[]
    images: string[]
}

export const projects: Project[] = [
    {
        description: "Minnesota Mountain Biking: the premier hub for all things MN MTB.",
        name: "Freeride MN",
        hover_bg_color: "bg-[#DAC55F]",
        hover_text_color: "text-black",
        year: "2023",
        icon: Mountains,
        slug: "freeride-mn",
        summary:
            "Freeride MN's goal is to be the premier hub for all thing MN MTB. You can find a list of MN trails, which uses google's API, and a custom made search bar that filters our list of trails. Each Trail Location has a list of trails within that location, and data can be found on each trails individual dynamic page. A list of upcoming events can be found on the Events page, with the ability to subscribe to the events. This calendar is using the full-calendar NPM package, and the events are stored and updated on our company database using Sanity studio. This allows administered users to add data to the events page and it will automatically update the webpage without having to push changes. There is also a page to post blog articles, a page to post questions to to the community, and other pages for general website information.",
        technologies: [
            {
                imageSrc: "/skills/next.svg",
                tooltip: "Next JS",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/framer-motion.jpeg",
                tooltip: "Framer",
            },
            {
                imageSrc: "/skills/vercel.svg",
                tooltip: "Vercel",
            },
            {
                imageSrc: "/skills/supabase.svg",
                tooltip: "Supabase",
            },
            {
                imageSrc: "/skills/sanity.webp",
                tooltip: "Sanity",
            },
        ],
        images: [
            "/projects/freeride/fr-1.png",
            "/projects/freeride/fr-2.png",
            "/projects/freeride/fr-3.png",
            "/projects/freeride/fr-4.png",
            "/projects/freeride/fr-5.png",
            "/projects/freeride/fr-6.png",
        ],
        linkToBuild: "",
        linkToWebsite: "https://freeridemn.com",
    },
    {
        description:
            "Universal design system and component library for Anima Reflection, powered by Panda and Ark.",
        name: "Anima Reflection / ui",
        hover_bg_color: "bg-[#DAC55F]",
        hover_text_color: "text-black",
        year: "2023",
        icon: Mountains,
        slug: "ar",
        summary: "",
        technologies: [
            {
                imageSrc: "/skills/next.svg",
                tooltip: "Next JS",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/panda.png",
                tooltip: "Panda",
            },
            {
                imageSrc: "/skills/storybook.png",
                tooltip: "Storybook",
            },
        ],
        images: ["/projects/ar/AR.png"],
        linkToBuild: "https://github.com/animareflection/ui",
        linkToWebsite: "https://storybook.animareflection.com/?path=/docs/introduction--docs",
    },
    {
        description: "A wedding website with an upload gallery on the day of.",
        name: "Clay Wedding",
        hover_bg_color: "bg-[#4B5320]",
        hover_text_color: "text-white",
        year: "2023",
        icon: Diamond,
        slug: "clay-wedding",
        summary: "",
        technologies: [
            {
                imageSrc: "/skills/next.svg",
                tooltip: "Next JS",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/vercel.svg",
                tooltip: "Vercel",
            },
            {
                imageSrc: "/skills/supabase.svg",
                tooltip: "Supabase",
            },
        ],
        images: [
            "/projects/clay/clay-1.png",
            "/projects/clay/clay-2.png",
            "/projects/clay/clay-3.png",
            "/projects/clay/clay-4.png",
        ],
        linkToBuild: "https://github.com/Twonarly1/clay-wedding",
        linkToWebsite: "https://clay-wedding.vercel.app/",
    },
    {
        description: "Official contributor for Muse Dao. Designed the farming page.",
        name: "Muse Dao",
        hover_bg_color: "bg-purple-500",
        hover_text_color: "text-black",
        year: "2022",
        icon: Eth,
        slug: "muse-dao",
        summary:
            "Created the Farming page for the web3 farmers. Added token information from CoinGecko API to Home page. Multiple UI updates for usability. Continue updating the projects sections when necessary.",
        technologies: [
            {
                imageSrc: "/skills/vue.webp",
                tooltip: "Vue",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/ethereum.png",
                tooltip: "Ethereum",
            },
            {
                imageSrc: "/skills/mm.webp",
                tooltip: "MetaMask",
            },
        ],
        images: [""],
        linkToBuild: "",
        linkToWebsite: "https://musedao.io/",
    },
    {
        description: "A business website for Chisago Hardware & Just Ask Rental!",
        name: "Chisago Hardware",
        hover_bg_color: "bg-red-500",
        hover_text_color: "text-white",
        year: "2022",
        icon: Wrench,
        slug: "chisago-hardware",
        summary:
            "Full stack website build for a local hardware/convienence store and Just Ask Rental. Rental database built with Supabase backend. Popular products including Grilling Products & Dog Food Products. Gallery with company images, and an Info page for hours & directions.",
        technologies: [
            {
                imageSrc: "/skills/next.svg",
                tooltip: "Next JS",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/supabase.svg",
                tooltip: "Supabase",
            },
            {
                imageSrc: "/skills/vercel.svg",
                tooltip: "Vercel",
            },
            {
                imageSrc: "/skills/framer-motion.jpeg",
                tooltip: "Framer",
            },
            {
                imageSrc: "/skills/graphql.svg",
                tooltip: "GraphQL",
            },
        ],
        images: [
            "/projects/ch/1.png",
            "/projects/ch/2.png",
            "/projects/ch/3.png",
            "/projects/ch/4.png",
        ],
        linkToBuild: "",
        linkToWebsite: "https://www.chisagohardware.com/",
    },
    {
        description: "Landing page for a start-up Indoor Mountain Biking business. ",
        name: "North Star Mountain Biking",
        hover_bg_color: "bg-orange-500",
        hover_text_color: "text-black",
        year: "2023",
        icon: Bicycle,
        slug: "north-star-mtb",
        summary:
            "Front End website build for a start-up indoor Mountain Biking starting their pitch deck. Frontend built with next.js (13), tailwind CSS, framer motion & typescript. Type built contact form posting submissions to a Google Sheets spreadsheet.",
        technologies: [
            {
                imageSrc: "/skills/next.svg",
                tooltip: "Next JS",
            },
            {
                imageSrc: "/skills/tailwindcss.svg",
                tooltip: "Tailwind",
            },
            {
                imageSrc: "/skills/ts.png",
                tooltip: "Typescript",
            },
            {
                imageSrc: "/skills/framer-motion.jpeg",
                tooltip: "Framer",
            },
            {
                imageSrc: "/skills/vercel.svg",
                tooltip: "Vercel",
            },
        ],
        images: ["/projects/nsmtb/nsmtb-2.png", "/projects/nsmtb/nsmtb-1.png"],
        linkToBuild: "",
        linkToWebsite: "https://north-star-mtn-biking.vercel.app/",
    },
    // {
    //   description: "test 6",
    //   name: "some content here",
    //   hover_bg_color: "bg-blue-500",
    //   hover_text_color: "text-black",
    //   year: "2023",
    //   icon: Bicycle,
    // },
    // {
    //   description: "test 7",
    //   name: "some content here",
    //   hover_bg_color: "bg-green-500",
    //   hover_text_color: "text-black",
    //   year: "2023",
    //   icon: Bicycle,
    // },
]

export const getProjects = cache((): Project[] => [...projects])

export async function fetchProjectsData(): Promise<Project[]> {
    return getProjects()
}

export async function fetchProjectBySlug(slug: string) {
    return getProjects().find((project) => project.slug === slug)
}
