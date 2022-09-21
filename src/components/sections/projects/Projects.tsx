/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Project } from "../../../../typings"
import Card from "./Card"
import Heading from "../../Heading"
import { useInView } from "react-intersection-observer"

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <div className=" mx-auto flex h-screen max-w-3xl flex-col items-center justify-start overflow-hidden px-6 pb-24 pt-32">
            <Heading
                title={"Projects"}
                subtitle={"Some of my recent projects."}
                other={"View more on GitHub!"}
            />

            <div className=" flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-pink-100">
                {projects.map((project, i: number) => <Card project={project} key={i} />).reverse()}
            </div>
        </div>
    )
}

export default Projects
