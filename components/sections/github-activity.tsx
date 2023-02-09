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
                            data-splitbee-event={"Open External Link"}
                            data-splitbee-event-url={url}
                            className="my-4 -mx-4 block rounded-md p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-pink-50/80 dark:bg-primary-dark dark:hover:from-gray-600 dark:hover:to-slate-800"
                        >
                            <div>
                                <span className="text-gray-800 dark:text-gray-200">
                                    {owner.login}/
                                </span>

                                <span className="text-gray-500 dark:text-gray-400">{name}</span>
                            </div>

                            <div className="">{description}</div>
                        </a>
                    </li>
                ))}
            </ul>

            <a href={url} className="text-sm text-black dark:text-white">
                View more on <span className="font-semibold">GitHub</span> →
            </a>
        </div>
    )
}

export function GitHubActivity({ starredRepos, pinnedRepos }: GithubActivity) {
    return (
        <div className="container max-w-7xl">
            <Stack alignItems="center">
                <Heading as="h1">GitHub Activity</Heading>
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
