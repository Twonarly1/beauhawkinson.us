import React from 'react'
import client from '../../apollo-client'
import { gql } from '@apollo/client'
import { Repo } from '../../typings'
import Achievements from '../components/sections/Achievements'
import GithubActivity from '../components/sections/GithubActivity'
import About from '../components/sections/About'
import Pinned from '../components/sections/Pinned'
import Skills from '../components/sections/Skills'

interface AppProps {
  pinnedItems: Repo[]
  starredItems: Repo[]
}

export default function Home({ pinnedItems, starredItems }: AppProps) {
  return (
    <>
      <About />
      <Pinned pinnedItems={pinnedItems} />
      <Skills />
      <Achievements />
      <GithubActivity starredItems={starredItems} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
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
                  owner {
                    login
                  }
                }
              }
            }
          }
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
    `,
  })

  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map(({ node }: any) => node)
  const starredItems = user.starredRepositories.nodes
  return {
    props: { pinnedItems, starredItems },
  }
}
