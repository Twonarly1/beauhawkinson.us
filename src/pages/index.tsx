import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { Items, Repo, RepoResponseData, ResumeData } from '../../typings'
import Achievements from '../components/Achievements'
import GithubActivity from '../components/GithubActivity'
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { PINNED_REPOS } from '../lib/graphql/queries/pinnedItems'
import Pinned from '../components/Pinned'
import { STARRED_REPOS } from '../lib/graphql/queries/starredItems'
import { setContext } from '@apollo/client/link/context'

interface AppProps {
  pinnedItems: Repo[]
  starredItems: Repo[]
}

export default function Home({ pinnedItems, starredItems }) {
  console.log(pinnedItems, starredItems)

  // const { loading, error, data } = useQuery(PINNED_REPOS)
  // const {
  //   loading: starredRepoLoading,
  //   error: starredRepoError,
  //   data: starredRepoData,
  // } = useQuery(STARRED_REPOS)

  let [resumeData, setResumeData] = useState<ResumeData>()

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  // if (loading) return 'Loading...'
  // if (error) return `Error! ${error.message}`
  // const { user } = data
  // const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)
  // console.log(data)

  // if (starredRepoLoading) return 'Loading...'
  // if (starredRepoError) return `Error! ${error.message}`
  // const starredItems = starredRepoData.user.starredRepositories.nodes

  return (
    <div className="mx-auto flex w-full flex-col items-center bg-white text-black dark:bg-primary-dark dark:text-white">
      <Header />
      <div className="space-y-32 p-6">
        {/* <Projects data={resumeData?.projects} /> */}
        <Pinned pinnedItems={pinnedItems} />
        <Skills data={resumeData?.main} />
        <Achievements data={resumeData?.main} />
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
