import React from "react"
import { GetStaticProps } from "next"
import { About, Projects, Skills, Experiences, Achievements, ContactMe } from "src/components"
import { fetchProjectsData } from "src/lib/constants/fetch-projects"

type ScriptProps = {
    projects: Project[]
}

function Home({ projects }: ScriptProps) {
    return (
        <div className="min-h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
            <section id="about ">
                <About />
            </section>
            <section id="projects">
                <Projects projects={projects} />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experiences">
                <Experiences />
            </section>
            <section id="achievements">
                <Achievements />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps<ScriptProps> = async () => {
    const projects: Project[] = await fetchProjectsData()
    return {
        props: {
            projects,
        } as ScriptProps,
        revalidate: 600, // defaults to false 10sec max
    }
}
