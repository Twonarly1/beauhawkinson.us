import React from "react"
import { GetStaticProps } from "next"
import { Achievement, Experience, PageInfo, Project, Skill, Social } from "../../typings"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Achievements from "../components/sections/Achievements"
import Projects from "../components/sections/projects/Projects"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import {
    fetchAchievements,
    fetchExperiences,
    fetchPageInfo,
    fetchProjects,
    fetchSkills,
    fetchSocials,
} from "../lib/sanity"
import ContactMe from "../components/sections/ContactMe"

type ScriptProps = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[]
    achievements: Achievement[]
}

export default function Home({
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
    achievements,
}: ScriptProps) {
    if (typeof window !== "undefined") {
        const fadeUpObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle("faded", entry.isIntersecting)
                    if (entry.isIntersecting) fadeUpObserver.unobserve(entry.target)
                })
            },
            { threshold: 0.4 }
        )

        document.querySelectorAll(".fade-up").forEach((item) => {
            fadeUpObserver.observe(item)
        })
    }

    return (
        <div className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
            <Nav socials={socials} />
            <section id="about" className="snap-start">
                <About pageInfo={pageInfo} />
            </section>
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
            <section id="achievements" className="snap-start">
                <Achievements achievements={achievements} />
            </section>
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps<ScriptProps> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: Skill[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocials()
    const achievements: Achievement[] = await fetchAchievements()
    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
            achievements,
        } as ScriptProps,
        //next.js will attempt to re-generate the page:
        // - when request comes in
        // - At most one every 10 seconds
        revalidate: 10,
    }
}
