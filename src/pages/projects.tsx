/* eslint-disable @next/next/no-img-element */
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Heading from '../components/Heading'
import Head from 'next/head'
import client from '../../apollo-client'
import { gql } from '@apollo/client'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import SearchBar from '../components/SearchBar'

export default function Projects({ allPublicRepos }) {
  return (
    <>
      <Head>
        <title>Projects - view all my public repos!</title>
        <meta name="description" content="All my public repos" />
        <meta
          property="og:title"
          content="Projects - view all my public repos"
        />
        <link rel="icon" href="/two.png" />
      </Head>
      <div className="mx-auto w-full dark:bg-primary-dark dark:text-gray-300">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Nav />
          <div className="h-12"></div>
          <Heading title={'Projects'} subtitle={'My Public Repos'} />
          <SearchBar
            placeholder="Search Repositories..."
            data={allPublicRepos}
          />
        </div>
        <Link href={'/'} className="">
          <ArrowLeftIcon className=" mx-auto mt-6 h-8 w-8 cursor-pointer rounded-full border p-1 text-gray-400 hover:scale-110 hover:border-gray-400" />
        </Link>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
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
    `,
  })

  const { user } = data
  const allPublicRepos = user.repositoriesContributedTo.nodes

  return {
    props: { allPublicRepos },
  }
}
