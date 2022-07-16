import { gql } from '@apollo/client'

export const STARRED_REPOS = gql`
  query GetStarredRepos {
    user(login: "Twonarly1") {
      starredRepositories(last: 6) {
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
  }
`
