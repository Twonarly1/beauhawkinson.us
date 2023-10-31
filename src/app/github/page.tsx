import { fetchRepos } from "lib"
import { Heading, Text } from "components/core"
import { GitHubIcon } from "components/icon"
import app from "lib/config/app"
import Link from "next/link"

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
        app.githubUsername,
        app.githubToken,
        app.repoName,
    )
    return (
        <div className="flex flex-col gap-8">
            <Heading as="h2">GitHub Activity</Heading>

            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Twonarly1"
                className="flex items-center gap-2"
            >
                <GitHubIcon />

                <p> {stargazerCount?.stargazerCount} stars on this repo</p>
            </a>

            <div className="grid gap-8 lg:grid-cols-2">
                <RepoList
                    title="Repos I Contributed to"
                    url={`https://github.com/${app.githubUsername}`}
                    repos={pinnedRepos}
                />

                <RepoList
                    title="Repos I Like"
                    repos={starredRepos}
                    url={`https://github.com/${app.githubUsername}?tab=stars`}
                />
            </div>
        </div>
    )
}

export default GithubPage

function RepoList({ repos, title, url }: RepoList) {
    return (
        <div className="flex flex-col gap-8">
            <Text size="2xl" color={400}>
                {title}
            </Text>

            {repos?.map(({ id, name, url, description, owner }) => (
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

            <Link href={url}>
                View more on <span className="font-semibold">GitHub</span> →
            </Link>
        </div>
    )
}
