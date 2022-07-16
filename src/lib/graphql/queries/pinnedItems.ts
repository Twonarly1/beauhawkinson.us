import { gql } from '@apollo/client'

export const PINNED_REPOS = gql`
  query GetPinnedRepos {
    user(login: "Twonarly1") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              openGraphImageUrl
              repositoryTopics(last: 4) {
                nodes {
                  id
                  topic {
                    id
                    name
                  }
                }
              }
              updatedAt

              pushedAt
              stargazers {
                totalCount
              }
              owner {
                login
              }
            }
          }
        }
      }
    }
  }
`
