import { fetchRepos } from "lib"
import { config } from "lib/config"
import { Button, Grid, Heading, Stack, Text } from "core"
import { GitHubIcon } from "core/icon"

export const metadata = {
    title: "GitHub Activity",
    description: "View my pinned repositories and starred repositories.",
}

type RepoList = {
    title: string
    url: string
    repos: Repo[]
}

async function GithubPage() {
    const { starredRepos, pinnedRepos, stargazerCount } = await fetchRepos(
        config.githubUsername,
        config.githubToken,
        config.repoName,
    )
    return (
        <Stack gap={8}>
            <Heading as="h2">GitHub Activity</Heading>

            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Twonarly1"
                className="flex items-center gap-2"
            >
                <GitHubIcon />

                <p> {stargazerCount.stargazerCount} stars on this repo</p>
            </a>

            <Grid columns={{ base: 1, lg: 2 }} gap={8}>
                <RepoList
                    title="Repos I Contributed to"
                    url={`https://github.com/${config.githubUsername}`}
                    repos={pinnedRepos}
                />

                <RepoList
                    title="Repos I Like"
                    repos={starredRepos}
                    url={`https://github.com/${config.githubUsername}?tab=stars`}
                />
            </Grid>
        </Stack>
    )
}

export default GithubPage

function RepoList({ repos, title, url }: RepoList) {
    return (
        <Stack gap={8}>
            <Text size="2xl" color={400}>
                {title}
            </Text>

            {repos.map(({ id, name, url, description, owner }) => (
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    key={id}
                    href={url}
                    className="flex w-full flex-col rounded-lg border border-neutral-100 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                >
                    <Text>
                        <span>{owner.login}/</span>

                        <span> {name}</span>
                    </Text>

                    <Text>{description}</Text>
                </a>
            ))}

            <Button href={url} as="a" size="sm" variant="showMore">
                View more on <span className="font-semibold">GitHub</span> →
            </Button>
        </Stack>
    )
}
