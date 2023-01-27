import {
    About,
    Skills,
    Experiences,
    Achievements,
    ContactMe,
    Resume,
    Projects,
    GitHubActivity,
} from "components"
import { config } from "lib/config"
import { fetchProjectsData } from "lib/fetch-projects"
import { fetchRepos } from "lib/github"

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
