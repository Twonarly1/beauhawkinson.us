import {
    About,
    Achievements,
    ContactMe,
    Experiences,
    GitHubActivity,
    Projects,
    Skills,
} from "~/components"

import { config, fetchProjectsData, fetchRepos } from "~/lib"

async function HomePage() {
    const projects: Project[] = await fetchProjectsData()
    const { starredRepos, pinnedRepos } = await fetchRepos(
        config.githubUsername,
        config.githubToken,
    )
    return (
        <div className="flex flex-col overflow-y-scroll scrollbar-hide overflow-x-hidden">
            <About />

            {/* <Resume /> */}
            <div className="flex flex-col space-y-60">
                <Projects projects={projects} />

                <Skills />

                <Experiences />

                <Achievements />

                <ContactMe />

                <GitHubActivity starredRepos={starredRepos} pinnedRepos={pinnedRepos} />
            </div>
        </div>
    )
}

export default HomePage
