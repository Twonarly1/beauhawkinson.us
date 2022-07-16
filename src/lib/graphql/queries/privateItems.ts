import { gql } from '@apollo/client'
const username = 'Twonarly1'
const quantiy = 4
export const PRIVATE_REPOS = gql`
  query GetPublicRepos {
    user(login: "${username}" ) {
      repositoriesContributedTo(
        includeUserRepositories: true
        last: 20
        contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]
        privacy: PUBLIC
      ) {
        nodes {
          id
          name
          url
          description
          repositoryTopics(last: "${quantiy}") {
            nodes {
              id
              topic {
                id
                name
              }
            }
          }
          openGraphImageUrl
          pushedAt
          isPrivate
          owner {
            login
          }
          updatedAt
        }
      }
    }
  }
`
