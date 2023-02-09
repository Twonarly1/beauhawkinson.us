import Image from "next/image"

import { Heading, Stack } from "~/core"

const experiencesData: Experience[] = [
    {
        imageSrc: "/resume/ch.png",
        company: "Chisago Hardware",
        title: "Freelance Full Stack Developer",
        dateStarted: "2022-11-01",
        dateEnded: "2023-01-23",
        technologies: [
            "/skills/next.svg",
            "/skills/tailwindcss.svg",
            "/skills/vercel.svg",
            "/skills/supabase.svg",
            "/skills/ts.png",
        ],
        points: [
            "Full stack website build for a local hardware/convienence store and Just Ask Rental",
            "Rental database built with Supabase backend.",
            "Popular products including Grilling Products & Dog Food Products.",
            "Gallery with company images, and an Info page for hours & directions.",
        ],
    },
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

export function Experiences() {
    return (
        <section id="experiences" className="container max-w-2xl">
            <Stack alignItems="center">
                <Heading as="h1">Experience</Heading>

                <Heading as="h2">Official contributions and previous work.</Heading>
            </Stack>

            <div className="relative z-0 mt-6 flex w-full snap-x snap-mandatory gap-12 overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300">
                {experiencesData.map((e, i) => (
                    <div
                        key={i}
                        className="relative mb-6 flex w-full flex-shrink-0 snap-center flex-col items-center justify-center"
                    >
                        <Image
                            width={150}
                            height={150}
                            src={e.imageSrc}
                            alt={e.company}
                            className="my-6 rounded-full"
                        />

                        <Stack gap={8} alignItems="center">
                            <Stack gap={2} textAlign="center">
                                <p className="text-3xl font-semibold">{e.company}</p>

                                <p className="text-xl font-semibold">{e.title}</p>
                            </Stack>

                            <Stack direction="horizontal" gap={4}>
                                {e?.technologies.map((technology, i: number) => (
                                    <Image
                                        width={40}
                                        height={40}
                                        key={i}
                                        src={technology}
                                        alt={technology}
                                    />
                                ))}
                            </Stack>

                            <div className="mx-auto h-[280px] w-full space-y-4 p-2 px-4 py-4 text-left scrollbar-hide">
                                {e.points.map((point, i: number) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        </Stack>
                    </div>
                ))}
            </div>
        </section>
    )
}
