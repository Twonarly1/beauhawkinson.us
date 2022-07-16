import { gql } from '@apollo/client'

export const ALL_PUBLIC_REPOS = gql`
  query GetPublicRepos {
    user(login: "Twonarly1") {
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
          repositoryTopics(last: 4) {
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
