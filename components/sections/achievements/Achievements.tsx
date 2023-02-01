"use client"

import Image from "next/image"
import { useState } from "react"

import { Heading } from "~/components"

import Timestamp from "./timestamp"

const achievementData = [
    {
        imageSrc: "/achievements/nft-minting-website.jpg",
        title: "NFT Minting Website - Papa React",
        description:
            "Build a NFT Minting website in 5 days during a Papa-React challenge. Awarded 2nd place!",
        date: "February 22, 2022",
        endDate: "",
        highlight: true,
    },
    {
        imageSrc: "/achievements/apollo-associate.svg",
        title: "Graph Developer Associate",
        description:
            "Developers who obtain this certification possess a solid foundational knowledge of GraphQL and the Apollo tool suite to design a schema, run an Apollo Server, and perform queries with Apollo Client on the frontend.",
        date: "April 10, 2022",
        endDate: "",
        highlight: true,
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

function Achievements() {
    const [showMore, setShowMore] = useState(false)

    return (
        <section id="achievements">
            <div className="container mx-auto max-w-5xl">
                <Heading title={"Achievements"} subtitle={"Things I have achieved"} />

                <div className="my-4">
                    {achievementData
                        .filter((a) => showMore || a.highlight)
                        .map((a, i) => (
                            <div key={i} className="my-16 flex items-center sm:my-8">
                                <Image
                                    className="h-[40px] w-[40px] rounded-full sm:h-[96px] sm:w-[96px]"
                                    src={a.imageSrc}
                                    alt={a.title}
                                    height={96}
                                    width={96}
                                />

                                <h4 className="mx-4 flex-1">
                                    <div className="font-semibold dark:text-white">{a.title}</div>

                                    {/* <NotionRenderer blockMap={blockMap} /> */}
                                    <div className="text-xs leading-4 dark:text-white sm:text-sm md:leading-6">
                                        {a.description}
                                    </div>
                                </h4>

                                <div>
                                    <Timestamp
                                        className="ml-2 border-l pl-2 dark:text-white"
                                        date={new Date(a.date)}
                                        endDate={new Date(a.endDate)}
                                    />
                                </div>
                            </div>
                        ))}
                </div>

                <div className="flex justify-center">
                    <button
                        className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800 dark:text-zinc-100"
                        data-splitbee-event="Toggle Achievements"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show less ↑" : "Show more ↓"}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Achievements

{
    /* <div className="z-10 mx-auto mt-12 grid grid-cols-2 gap-6 gap-y-8  sm:grid-cols-2">
{achievements
    .map((achievement, i: number) => {
        if (achievement.title.includes("Apollo"))
            return <Card achievement={achievement} key={i} />
    })
    .concat(
        achievements.map((achievement, i: number) => {
            if (achievement.title.includes("Basics"))
                return <Card achievement={achievement} key={i} />
        }),
    )}
</div> */
}
