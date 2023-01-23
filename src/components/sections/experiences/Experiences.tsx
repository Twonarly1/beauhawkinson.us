import React from "react"
import { Heading } from "src/components/core"
import Image from "next/image"

const experiencesData: Experience[] = [
    {
        imageSrc: "/experience/muse.webp",
        company: "Muse Dao",
        title: "Official Contributor",
        dateStarted: "",
        dateEnded: "",
        technologies: [
            "/skills/ethereum.png",
            "/skills/tailwindcss.svg",
            "/skills/vue.webp",
            "/skills/mm.webp",
        ],
        points: [
            "Created the Farming page for the web3 farmers.",
            "Added token information from CoinGecko API to Home page.",
            "Multiple UI updates for usability. ",
            "Continue updating the projects sections when necessary.",
        ],
    },
    {
        imageSrc: "/experience/bt.png",
        company: "Bend-Tech",
        title: "Engineering Tech",
        dateStarted: "2018-09-16",
        dateEnded: "2022-01-24",
        technologies: ["/skills/cad-cam.png"],
        points: [
            "Expert level understanding of the CNC machine and CAD software suite.",
            "Communicate with the software development team to improve the software for front-end users.",
            "Create technical documentation for the service department.",
            "Direct and lead the service department.",
        ],
    },
]

const Experiences = () => {
    return (
        <div className="relative mx-auto mt-16 min-h-screen max-w-2xl flex-col items-center justify-center px-10 py-32 text-center">
            <Heading title={"Experience"} subtitle={"Official contributions and previous work."} />

            <div className="relative  z-0 -mt-6 flex w-full snap-x snap-mandatory gap-12 overflow-x-scroll scrollbar-thin overflow-y-hidden scrollbar-thumb-gray-300">
                {experiencesData.map((e, i) => (
                    <div
                        key={i}
                        className="relative mb-6 flex w-full flex-shrink-0 snap-center flex-col items-center justify-center  2xs:px-12  "
                    >
                        <Image
                            width={200}
                            height={200}
                            src={e.imageSrc}
                            alt={e.company}
                            className=" rounded-full"
                        />
                        <div className=" mt-6 max-w-6xl space-y-2 px-0">
                            <h4 className="text-center text-4xl font-semibold">{e.company}</h4>
                            <h4 className="text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                {e.title}
                            </h4>
                            <div className="flex items-center justify-center gap-4 p-4">
                                {e?.technologies.map((technology, i: number) => (
                                    <Image
                                        width={40}
                                        height={40}
                                        key={i}
                                        src={technology}
                                        alt={technology}
                                    />
                                ))}
                            </div>
                            <div className=" mx-auto h-full w-full space-y-4 p-2 px-4 py-4 text-left  scrollbar-hide">
                                {e.points.map((point, i: number) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences
