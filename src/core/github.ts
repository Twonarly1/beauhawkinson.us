import { RepoResponseData } from '../../typings'

const QUANTITY = 6
const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql'

export const fetchRepos = async (username: string, githubToken: string) => {
  const query = `
query {
  user (login: "${username}") {
    repositoriesContributedTo(last: ${QUANTITY}, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
      nodes {
        id
        name
        url
        description
        owner {
          login
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

  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${githubToken}`,
    },
    body: JSON.stringify({ query }),
  })
  const { data }: { data: RepoResponseData } = await res.json()

  return {
    contributedRepos: data.user.repositoriesContributedTo.nodes.reverse(),
    starredRepos: data.user.starredRepositories.nodes.reverse(),
  }
}
