import Link from 'next/link'
import { gql } from '@apollo/client'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import client from '../../apollo-client'
import AllProjects from '../components/sections/AllProjects'
import Heading from '../components/Heading'
import { Repo } from '../../typings'

interface AppProps {
  allPublicRepos: Repo[]
}

export default function Projects({ allPublicRepos }: AppProps) {
  return (
    <>
      <div className="section">
        <h2 className="h-12"></h2>
        <Heading title={'Projects'} subtitle={'My Public Repos'} />
        <AllProjects
          placeholder="Search Repositories..."
          allPublicRepos={allPublicRepos}
        />
      </div>
      <Link href={'/'}>
        <ArrowLeftIcon className="commonBordering mx-auto h-8 w-8 cursor-pointer rounded-full p-1 hover:scale-110 dark:bg-slate-800" />
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
