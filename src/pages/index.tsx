import React from "react"
import { GetStaticProps } from "next"
import { Achievement, Experience, PageInfo, Project, Skill } from "../../typings"
import About from "../components/sections/about/About"
import Skills from "../components/sections/skills/Skills"
import Achievements from "../components/sections/achievements/Achievements"
import Projects from "../components/sections/projects/Projects"
import {
    fetchAchievements,
    fetchExperiences,
    fetchPageInfo,
    fetchProjects,
    fetchSkills,
} from "../lib/sanity"
import ContactMe from "../components/sections/contact/ContactMe"
import Experiences from "../components/sections/experiences/Experiences"

type ScriptProps = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    achievements: Achievement[]
}

function Home({ pageInfo, experiences, skills, projects, achievements }: ScriptProps) {
    return (
        <div className="h-screen snap-y overflow-x-hidden overflow-y-scroll scrollbar-hide">
            <section id="about">
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
        revalidate: 60,
    }
}
