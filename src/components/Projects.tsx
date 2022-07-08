import Link from 'next/link'
import React from 'react'

const Portfolio = ({ data }) => {
  console.log(data)
  if (data) {
    var projects = data.projects.slice(0, 3).map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image
      return (
        <div
          key={projects.title}
          className="rounded-lg border bg-white shadow-lg"
        >
          <a className="" href={projects.url}>
            <div className="justify-items-center overflow-hidden rounded-t-lg ">
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
    var projectsNoImage = data.projects.slice(3, 6).map(function (projects) {
      return (
        <div
          key={projects.title}
          className=" hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex"
        >
          <a className="" href={projects.url}>
            <div className="space-y-2 p-4">
              <div className="font-semibold text-gray-800 group-hover:text-gray-700">
                {projects.title}
              </div>
              <div className="font-sans text-sm font-light text-gray-500">
                {projects.description}
              </div>
            </div>
          </a>{' '}
        </div>
      )
    })
  }

  return (
    <div className="max-w-5xl p-3 pt-6">
      <div className="p-3">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="text-2xl text-gray-600">My Contributions</div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects}
        </div>
        <div className="mt-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid">
          {projectsNoImage}
          <div className="flex cursor-default flex-col items-center justify-center py-4 text-center">
            <div className="text-lg font-bold text-gray-800">
              Want to see more?
            </div>
            <div className="text-gray-600">Explore more of my work</div>
            <Link href="/work">
              <a className="mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700">
                View all
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
