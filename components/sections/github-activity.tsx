import { config } from "~/lib"

import { Heading, Stack, Text } from "~/core"

type RepoList = {
    title: string
    url: string
    repos: Repo[]
}

type GithubActivity = {
    starredRepos: Repo[]
    pinnedRepos: Repo[]
}

function RepoList({ repos, title, url }: RepoList) {
    return (
        <div>
            <Text size="xl" color={400}>
                {title}
            </Text>

            <ul>
                {repos.map(({ id, name, url, description, owner }) => (
                    <li key={id}>
                        <a
                            href={url}
                            className="my-4 -mx-4 block rounded-md p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
                        >
                            <div>
                                <span>{owner.login}/</span>

                                <span>{name}</span>
                            </div>

                            <div>{description}</div>
                        </a>
                    </li>
                ))}
            </ul>

            <a href={url} rel="noopener noreferrer" target="_blank" className="p-1 text-sm">
                View more on <span className="font-semibold">GitHub</span> →
            </a>
        </div>
    )
}

export function GitHubActivity({ starredRepos, pinnedRepos }: GithubActivity) {
    return (
        <div className="container max-w-7xl">
            <Stack alignItems="center">
                <Heading as="h2">GitHub Activity</Heading>
            </Stack>

            <div className="container mt-12 grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32">
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
            </div>
        </div>
    )
}
