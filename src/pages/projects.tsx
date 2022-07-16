/* eslint-disable @next/next/no-img-element */
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { Repo } from '../../typings'
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { ALL_PUBLIC_REPOS } from '../lib/graphql/queries/privateItems'
import Heading from '../components/Heading'
import Timeago from 'react-timeago'
import { setContext } from '@apollo/client/link/context'

export default function Projects({ allPublicRepos }) {
  console.log(allPublicRepos)

  return (
    <div className="mx-auto w-full bg-white dark:bg-gray-500">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Nav />
        <div className="h-20"></div>
        <Heading title={'Projects'} subtitle={'My Public Repos'} />
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPublicRepos
            .map((item: Repo, index: number) => (
              <div
                key={index}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-300 bg-white text-center hover:border-gray-400 hover:shadow-md"
              >
                <a className="" href={item.url}>
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      src={item.openGraphImageUrl}
                      alt={item.name}
                      className=" mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    />

                    <div className="mt-2 min-w-0 flex-1 px-3">
                      <h3 className="mt-6 text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>

                      <p className="h-16 pt-2 font-sans text-sm text-gray-500 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative bottom-8 mx-auto mt-2 w-fit justify-between rounded-md border px-3 text-center text-xs text-gray-500">
                    <p>
                      created&nbsp;
                      <Timeago date={item.pushedAt} />
                    </p>
                    <p>
                      updated&nbsp;
                      <Timeago date={item.updatedAt} />
                    </p>
                  </div>
                  <div className="relative bottom-2 mx-auto mb-2 flex justify-center space-x-[7px] px-3 text-sm">
                    {
                      //@ts-ignore
                      // fix typing for "nodes"
                      item.repositoryTopics.nodes.map(
                        (topic: any, index: number) => (
                          <div
                            className=" rounded-full border border-gray-300 px-[5px] text-xs text-gray-500 hover:border-gray-400"
                            key={index}
                          >
                            {topic.topic.name}
                          </div>
                        )
                      )
                    }
                  </div>
                </a>
              </div>
            ))
            .reverse()}
        </div>
      </div>
      <Footer />
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
