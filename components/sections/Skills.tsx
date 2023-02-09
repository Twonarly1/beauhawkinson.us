"use client"

import Image from "next/image"
import { useState } from "react"

import { Heading, Stack } from "~/core"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const skillsData: Skill[] = [
    {
        imageSrc: "/skills/apollo.png",
        tooltip: "Apollo",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/cad-cam.png",
        tooltip: "CAD/CAM",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/chainlink.png",
        tooltip: "Chainlink",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/ethereum.png",
        tooltip: "Ethereum",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/firebase.svg",
        tooltip: "Firebase",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/framer-motion.jpeg",
        tooltip: "Framer",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/graph.webp",
        tooltip: "Ethereum",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/graphql.svg",
        tooltip: "GraphQL",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/hardhat.svg",
        tooltip: "Hardhat",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/js.webp",
        tooltip: "Javascript",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/mm.webp",
        tooltip: "MetaMask",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/next.svg",
        tooltip: "Next JS",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/nextauth.png",
        tooltip: "Next Auth",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/node.svg",
        tooltip: "Node",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/postgresql.png",
        tooltip: "Postgresql",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/rainbow.png",
        tooltip: "Rainbow",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/react.svg",
        tooltip: "React",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/sanity.webp",
        tooltip: "Sanity",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/sol.png",
        tooltip: "Solidity",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/stepzen.png",
        tooltip: "Stepzen",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/supabase.svg",
        tooltip: "Supabase",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/tailwindcss.svg",
        tooltip: "Tailwind",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/thirdweb.webp",
        tooltip: "Thirdweb",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/truffle.webp",
        tooltip: "Truffle",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/ts.png",
        tooltip: "Typescript",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/vercel.svg",
        tooltip: "Vercel",
        preferredStack: true,
    },
    {
        imageSrc: "/skills/vue.webp",
        tooltip: "Vue",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/wagmi.png",
        tooltip: "Wagmi",
        preferredStack: false,
    },
    {
        imageSrc: "/skills/notion.png",
        tooltip: "Notion",
        preferredStack: false,
    },
]

export function SkillsSection() {
    const [enabled, setEnabled] = useState(true)

    const handleToggle = () => {
        if (enabled) {
            setEnabled(false)
        } else {
            setEnabled(true)
        }
    }

    return (
        <section id="skills">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-start px-6">
                <Stack alignItems="center">
                    <Heading as="h2">Skills</Heading>

                    <Heading as="h3">
                        {enabled ? "Preferred stack" : "Tools I have experinece with."}
                    </Heading>
                </Stack>

                <button
                    onClick={handleToggle}
                    className={classNames(
                        enabled ? "bg-pink-400 dark:bg-pink-200" : "bg-gray-200",
                        "relative mt-8 inline-flex h-9 w-16 flex-shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ease-in-out ",
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? "translate-x-8" : "translate-x-0.5",
                            "pointer-events-none inline-block h-7 w-7 transform rounded-full border bg-white transition duration-200 ease-in-out dark:bg-gray-400",
                        )}
                    />
                </button>

                <div className="z-10 mt-12 grid grid-cols-4 gap-4 gap-y-6 transition-transform duration-500 dark:bg-primary-dark sm:grid-cols-6 lg:grid-cols-8">
                    {skillsData
                        .map((skill, i: number) => {
                            if (skill.preferredStack)
                                return (
                                    <div
                                        key={i}
                                        className={` group relative mx-auto p-[5px]  ${
                                            enabled &&
                                            !skill.preferredStack &&
                                            "opacity-20 grayscale"
                                        }`}
                                    >
                                        <Image
                                            src={skill.imageSrc}
                                            alt={skill.tooltip}
                                            className="h-[56px] w-[56px]"
                                            width={56}
                                            height={56}
                                        />

                                        <p className="pointer-events-none absolute -left-0 -bottom-6 mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                                            {skill.tooltip}
                                        </p>
                                    </div>
                                )
                        })
                        .concat(
                            skillsData.map((skill, i: number) => {
                                if (!skill.preferredStack)
                                    return (
                                        <div
                                            key={i}
                                            className={`group relative mx-auto p-[5px]  ${
                                                enabled &&
                                                !skill.preferredStack &&
                                                "opacity-20 grayscale"
                                            }`}
                                        >
                                            <Image
                                                src={skill.imageSrc}
                                                alt={skill.tooltip}
                                                width={56}
                                                height={56}
                                                className="flex-shrink-0"
                                            />

                                            <p className="pointer-events-none absolute -left-0 -bottom-6  mx-auto w-full justify-center text-center text-sm opacity-0 transition group-hover:opacity-100">
                                                {skill.tooltip}
                                            </p>
                                        </div>
                                    )
                            }),
                        )}
                </div>
            </div>
        </section>
    )
}
