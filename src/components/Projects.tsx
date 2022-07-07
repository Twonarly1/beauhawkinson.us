import Link from 'next/link'
import React from 'react'
import { Repo } from '../../typings'

const Projects = ({ projects }) => {
  // console.log('this1', projects)
  return (
    <div className="max-w-5xl p-3 pt-6">
      <div className="p-3">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="text-2xl text-gray-600">My Contributions</div>
        <div className="mt-6 grid grid-cols-1 gap-4  sm:grid-cols-3">
          {projects &&
            projects.slice(0, 3).map((project: Repo, index) => (
              <div key={index} className="rounded-lg border shadow-lg">
                <a className="" href={project.url}>
                  <div className="relative overflow-hidden rounded-t-lg bg-white">
                    <img
                      src={project?.image?.image}
                      alt=""
                      className="relative h-full w-full object-cover"
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
      <div className="-mt-1 grid-cols-2 gap-4 p-3 sm:grid-cols-4 md:grid">
        {projects &&
          projects.slice(3, 6).map((project: Repo, index) => (
            <div
              key={index}
              className="hidden rounded-lg border bg-white shadow-lg sm:flex"
            >
              <a className="" href={project.url}>
                {/* <div className="relative overflow-hidden rounded-lg bg-white">
                    <img
                      src={project?.image?.image}
                      alt=""
                      className="relative h-full w-full object-cover"
                    />
                  </div> */}
                <div className="space-y-2 p-4">
                  {' '}
                  <div className="font-semibold text-gray-800 group-hover:text-gray-700">
                    {project.name}
                  </div>
                  <div className="font-sans text-sm font-light text-gray-500">
                    {' '}
                    {project.description}
                  </div>
                </div>
              </a>
            </div>
          ))}
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
  )
}

export default Projects
