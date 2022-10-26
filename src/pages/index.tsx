import React from "react"
import { GetStaticProps } from "next"
import { About, Projects, Skills, Experiences, Achievements, ContactMe } from "src/components"
import {
    fetchAchievements,
    fetchExperiences,
    fetchPageInfo,
    fetchProjects,
    fetchSkills,
} from "src/lib/sanity"
import { PageInfo, Experience, Skill, Project, Achievement } from "typings"

type ScriptProps = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    achievements: Achievement[]
}

function Home({ pageInfo, experiences, skills, projects, achievements }: ScriptProps) {
    return (
        <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
            <section id="about ">
                <About pageInfo={pageInfo} />
            </section>
            <section id="projects">
                <Projects projects={projects} />
            </section>
            <section id="skills">
                <Skills skills={skills} />
            </section>
            <section id="experiences">
                <Experiences experiences={experiences} />
            </section>
            <section id="achievements">
                <Achievements achievements={achievements} />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps<ScriptProps> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: Skill[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const achievements: Achievement[] = await fetchAchievements()
    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            achievements,
        } as ScriptProps,
        revalidate: 600, // defaults to false 10sec max
    }
}
