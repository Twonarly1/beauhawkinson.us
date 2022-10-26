import React from "react"
import { Heading } from "src/components/core"
import { Project } from "typings"
import Article from "./Article"

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <div className=" mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-start overflow-hidden px-6 scrollbar-hide lg:-mt-60">
            <Heading title={"Projects"} subtitle={"Select for more details"} />

            <div className="mx-auto flex flex-col gap-y-4 overflow-x-scroll p-1 scrollbar-hide">
                {projects.map((project, i: number) => (
                    <Article project={project} id={i} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Projects
