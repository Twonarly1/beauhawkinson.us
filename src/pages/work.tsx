import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Main, Achievement, Project, Repo } from '../../typings'
import Link from 'next/link'
import Nav from '../components/Nav'

interface AppProps {
  main: Main[]
  achievements: Achievement[]
  projects: Project[]
  otherProjects: Project

  repos: {
    starredRepos: Repo[]
    contributedRepos: Repo[]
  }

  images: any
}

export default function Work() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setWorks(data.portfolio.projects)
      })
  }, [])

  const allProjects = works.map(function (projects) {
    var projectImage = 'images/portfolio/' + projects.image
    return (
      <div
        key={projects.title}
        className="rounded-lg border bg-white shadow-lg"
      >
        <a className="" href={projects.url}>
          <div className="justify-items-center overflow-hidden rounded-t-lg">
            <img
              src={projectImage}
              alt={projects.title}
              className="relative h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-b-lg border-t p-4">
            <div className="font-semibold text-gray-800 group-hover:text-gray-700">
              {projects.title}
            </div>
            <div className="font-sans text-sm font-light text-gray-500">
              {projects.description}
            </div>
          </div>
        </a>
      </div>
    )
  })
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl">
      <Nav />
      <div className="max-w-5xl p-3 pt-6">
        <div className="p-3">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="text-2xl text-gray-600">My Contributions</div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {allProjects}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
