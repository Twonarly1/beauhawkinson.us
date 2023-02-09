"use client"

import classNames from "classnames"
import dayjs from "dayjs"
import Image from "next/image"
import { useState } from "react"

import { config } from "~/lib"

import { Button, Heading, Section, Stack, Text } from "~/core"

interface TimestampProps {
    date: Date
    endDate?: Date
    className?: string
}

const achievementData = [
    {
        imageSrc: "/achievements/eagle-scout.png",
        title: "Eagle Scout of America",
        description: "Eagle Scout of America.",
        date: "January 1, 2011",
        endDate: "",
        highlight: true,
    },
    {
        imageSrc: "/achievements/wind-chill.png",
        title: "Wind Chill Athlete",
        description:
            "2018 Athlete for the Minnesota Wind Chill. Minnesota's profession Ultimate frisbee team.",
        date: "February 20, 2018",
        endDate: "September 20, 2018",
        highlight: true,
    },
    // {
    //     imageSrc: "/achievements/nft-minting-website.jpg",
    //     title: "NFT Minting Website - Papa React",
    //     description:
    //         "Build a NFT Minting website in 5 days during a Papa-React challenge. Awarded 2nd place!",
    //     date: "February 22, 2022",
    //     endDate: "",
    //     highlight: true,
    // },
    {
        imageSrc: "/achievements/apollo-associate.svg",
        title: "Graph Developer Associate",
        description:
            "Developers who obtain this certification possess a solid foundational knowledge of GraphQL and the Apollo tool suite to design a schema, run an Apollo Server, and perform queries with Apollo Client on the frontend.",
        date: "April 10, 2022",
        endDate: "",
        highlight: false,
    },
    {
        imageSrc: "/achievements/apollo-professional.svg",
        title: "Graph Developer Professional",
        description:
            "Developers who obtain this certification demonstrate strong familiarity with Apollo Federation concepts. They can apply those concepts to build a federated supergraph or move an existing monolithic graph to federation.",
        date: "June 7, 2022",
        endDate: "",
        highlight: true,
    },
    {
        imageSrc: "/achievements/full-stack-basics.png",
        title: "Full Stack Basics",
        description:
            "This is for completing the Full Stack section of Patricks FreeCodeCamp Video! I hope to see you in the NEXT one!!!! DO YOU GET MY JOKE?????",
        date: "September 27, 2022",
        endDate: "",
        highlight: false,
    },
    {
        imageSrc: "/achievements/hardhat-basics.png",
        title: "Hardhat Basics",
        description:
            "This is for completing the Hardhat Basics section of Patricks FreeCodeCamp Video! You a storage beast!!",
        date: "September 27, 2022",
        endDate: "",
        highlight: false,
    },
    {
        imageSrc: "/achievements/solidity-basics.webp",
        title: "Solidity Basics",
        description:
            "This is for completing the Solidity Basics section of Patricks FreeCodeCamp Video! Awesome work!!",
        date: "July 30, 2022",
        endDate: "",
        highlight: false,
    },
    {
        imageSrc: "/achievements/blockchain-basics.webp",
        title: "Blockchain Basics",
        description:
            "This is for completing the Blockchain Basics section of Patricks FreeCodeCamp Video! The next get harder to mint :)",
        date: "July 30, 2022",
        endDate: "",
        highlight: false,
    },
]

export function Achievements() {
    const [showMore, setShowMore] = useState(false)

    return (
        <section id="achievements" className="container">
            <Stack alignItems="center">
                <Stack alignItems="center">
                    <Heading as="h2">Achievements</Heading>

                    <Heading as="h3">Things I have achieved</Heading>
                </Stack>

                <Section>
                    {achievementData
                        .filter((a) => showMore || a.highlight)
                        .map((a, i) => (
                            <div
                                key={i}
                                className="my-8 flex flex-col items-center sm:my-8 sm:flex-row"
                            >
                                <Image
                                    className="h-[96px] w-[96px] rounded"
                                    src={a.imageSrc}
                                    alt={a.title}
                                    height={96}
                                    width={96}
                                />

                                <div className="mx-8 mt-4 flex flex-1 flex-col space-y-2 sm:mt-0">
                                    <Text size="lg" weight="bold" color={400}>
                                        {a.title}
                                    </Text>

                                    <Text size="sm" color={1000}>
                                        {a.description}
                                    </Text>
                                </div>

                                <div className="mt-4 sm:mt-0">
                                    <Timestamp
                                        className="ml-2 border-l pl-2 dark:text-white"
                                        date={new Date(a.date)}
                                        endDate={new Date(a.endDate)}
                                    />
                                </div>
                            </div>
                        ))}

                    <Button onClick={() => setShowMore(!showMore)} size="sm" variant="showMore">
                        {showMore ? "Show less ↑" : "Show more ↓"}
                    </Button>
                </Section>
            </Stack>
        </section>
    )
}

function Timestamp({ date, endDate, className }: TimestampProps) {
    const day = dayjs(date)
    const current = endDate && dayjs().isBefore(endDate)
    const endDay = dayjs(current ? new Date() : endDate)

    const hasEndDate = endDate && endDay.isValid()

    const age = day.diff(config.birthday, "year")

    const relevantDate = hasEndDate ? endDay : day
    const info = hasEndDate ? endDay.diff(day, "month") : age
    const suffix = hasEndDate ? "months" : "y/o"

    return (
        <div
            className={classNames(
                "group relative flex h-6 w-20 cursor-default items-center py-6 md:w-24",
                className,
            )}
        >
            <div
                className={classNames(
                    "absolute -translate-y-8 transform opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    "transition-all duration-200 ease-in-out",
                )}
            >
                <span>{info}</span>

                <span className="ml-1">{suffix}</span>
            </div>

            <br />

            <div
                className={classNames(
                    "absolute transform group-hover:translate-y-8",
                    "opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0",
                )}
            >
                <span>{current ? "Now" : relevantDate.format("MMM")}</span>

                <span className="ml-1 transform group-hover:translate-x-3">
                    {!current && relevantDate.format("YYYY")}
                </span>
            </div>
        </div>
    )
}
