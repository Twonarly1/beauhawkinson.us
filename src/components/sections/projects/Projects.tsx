import React from "react"
import { Project } from "../../../../typings"
import Article from "./Article"
import Heading from "../../Heading"

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <div className=" mx-auto flex h-screen max-w-3xl flex-col items-center justify-start overflow-hidden px-6 pb-24 pt-32">
            <Heading title={"Projects"} subtitle={"View more projects on GitHub."} />

            <div className=" flex w-full snap-x snap-mandatory space-x-7 overflow-x-scroll p-6 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-pink-100">
                {projects
                    .map((project, i: number) => <Article project={project} key={i} />)
                    .reverse()}
            </div>
        </div>
    )
}

export default Projects
