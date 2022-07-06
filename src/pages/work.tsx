import { GetStaticProps } from 'next'
import { config } from '../../config'
import { fetchRepos } from '../core/github'
import Resume from '../components/Resume'
import { Project, Repo } from '../../typings'
import Portfolio from '../components/Work'
import Header from '../components/Header'
import Link from 'next/link'

const imagesArray = [
  {
    id: 0,
    image: '/images/portfolio/poh.png',
  },
  {
    id: 1,
    image: '/images/portfolio/7s.gif',
  },
  {
    id: 2,
    image: '/images/portfolio/instagram.jpeg',
  },
  {
    id: 3,
    image: '/images/portfolio/winsome-tenley.png',
  },
  {
    id: 4,
    image: '/images/portfolio/specto-black.png',
  },
  {
    id: 5,
    image: '/images/portfolio/specto-black.png',
  },
]

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('')
  // const data = await red.json()

  const [projects] = await Promise.all([
    fetchRepos(config.githubUsername, config.githubToken),
  ])

  const newProjects = projects.contributedRepos.map((project, index) => {
    return {
      description: project.description,
      id: project.id,
      name: project.name,
      url: project.url,
      image: imagesArray[index],
    }
  })

  return {
    props: {
      projects: newProjects.map((project) => project),
    },
    revalidate: 10,
  }
}

export default function Work({ projects }) {
  // console.log('this1', projects)
  return (
    <div className="mx-auto w-full max-w-5xl">
      <nav className="my-4 mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/">
          <a className="ml-2 rounded-md px-2 py-1">bhawkinson.eth </a>
        </Link>
        <ul className="flex">
          <li>
            <Link href="/work">
              <a className="mr-2 rounded-md px-2 py-1 text-gray-700">Work</a>
            </Link>
          </li>
        </ul>
      </nav>{' '}
      <div className="p-3">
        <h1 className="text-4xl font-bold">Work</h1>
        <div className="text-2xl text-gray-600">Past Projects Made By Me</div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects &&
            projects.map((project: Repo, index) => (
              <div key={index} className="rounded-lg border">
                <a className="" href={project.url}>
                  <div className="relative overflow-hidden rounded-t-lg bg-white">
                    <img
                      src={project?.image?.image}
                      alt=""
                      className="relative h-full w-full object-cover md:h-80"
                    />
                  </div>
                  <div className="border-b-lg h-32 space-y-2 rounded-b-lg border-t bg-white p-4">
                    <div className="font-semibold text-gray-800 group-hover:text-gray-700">
                      {project.name}
                    </div>
                    <div className="font-sans text-sm font-light text-gray-500">
                      {project.description}
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
