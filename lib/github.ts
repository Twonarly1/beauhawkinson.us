import { NEXT_PUBLIC_GRAPHQL_ENDPOINT } from "lib/env"

const QUANTITY = 6

export const fetchRepos = async (username: string, githubToken: string) => {
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
      nodes {
        id
        name
        description
        url
        owner {
          login
        }
      }
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
        starredRepos: data.user.starredRepositories.nodes.reverse(),
        pinnedRepos: data.user.pinnedItems.nodes.reverse(),
    }
}
