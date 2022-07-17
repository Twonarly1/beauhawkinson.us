import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import { Repo } from '../../typings'
import Achievements from '../components/Achievements'
import GithubActivity from '../components/GithubActivity'
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client'
import Pinned from '../components/Pinned'
import { setContext } from '@apollo/client/link/context'

interface AppProps {
  pinnedItems: Repo[]
  starredItems: Repo[]
}

export default function Home({ pinnedItems, starredItems }: AppProps) {
  return (
    <div className="mx-auto w-full items-center bg-white text-black  scrollbar-hide dark:bg-primary-dark dark:text-white">
      <Header />
      <div className="mx-auto max-w-5xl space-y-32">
        <Pinned pinnedItems={pinnedItems} />
        <Skills />
        <Achievements />
        <GithubActivity starredItems={starredItems} />
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

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
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)
  const starredItems = user.starredRepositories.nodes
  return {
    props: { pinnedItems, starredItems },
  }
}
