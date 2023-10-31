import { NEXT_PUBLIC_GRAPHQL_ENDPOINT } from "./config/env"

const QUANTITY = 10

export const fetchRepos = async (username: string, githubToken: string, repoName: string) => {
    const query = `
query {
  user (login: "${username}") {
    pinnedItems(last: ${QUANTITY}) {
      nodes {
        ... on Repository {
          id
          name
          url
          description
          owner {
            login
          }
        }
      }
    }
    starredRepositories(last: ${QUANTITY}) {
      nodes {xw
        id
        name
        description
        url
        owner {
          login
        }
      }
    }
    repository(name: "${repoName}") {
      id
      stargazerCount
    }
  }
}`

    const res = await fetch(NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${githubToken}`,
        },
        body: JSON.stringify({ query }),
    })
    const { data }: { data: RepoResponseData } = await res.json()

    return {
        pinnedRepos: data?.user.pinnedItems.nodes.reverse(),
        starredRepos: data?.user.starredRepositories.nodes.reverse(),
        stargazerCount: data?.user.repository,
    }
}
