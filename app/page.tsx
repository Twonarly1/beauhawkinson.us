import { config, fetchProjectsData, fetchRepos } from "~/lib"

import { Stack } from "~/core"
import { About, Achievements, GitHubActivity, PastProjects, SkillsSection } from "~/sections"

async function HomePage() {
    const pastProjects: Project[] = await fetchProjectsData()
    const { starredRepos, pinnedRepos } = await fetchRepos(
        config.githubUsername,
        config.githubToken,
    )
    return (
        <Stack gap={64}>
            <About />

            <PastProjects projects={pastProjects} />

            <SkillsSection />

            <Achievements />

            <GitHubActivity starredRepos={starredRepos} pinnedRepos={pinnedRepos} />
        </Stack>
    )
}

export default HomePage
