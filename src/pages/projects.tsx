import Heading from '../components/Heading'
import client from '../../apollo-client'
import { gql } from '@apollo/client'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import AllProjects from '../components/sections/AllProjects'
import { Repo } from '../../typings'

interface AppProps {
  allPublicRepos: Repo[]
}

export default function Projects({ allPublicRepos }: AppProps) {
  return (
    <>
      <div className="section">
        <Heading title={'Projects'} subtitle={'My Public Repos'} />
        <AllProjects
          placeholder="Search Repositories..."
          allPublicRepos={allPublicRepos}
        />
      </div>
      <Link href={'/'}>
        <ArrowLeftIcon className="mx-auto h-8 w-8 cursor-pointer rounded-full border bg-gray-50 p-1 text-gray-400 hover:scale-110 hover:border-gray-400 dark:bg-slate-800" />
      </Link>
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
