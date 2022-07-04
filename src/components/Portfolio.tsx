import Link from 'next/link'
import React from 'react'
import { Repo } from '../../typings'

const Portfolio = ({ projects }) => {
  console.log('this1', projects)
  return (
    <div className="max-w-5xl">
      <div className="p-3">
        <h1 className="text-4xl font-bold">Work</h1>
        <div className="text-2xl text-gray-600">
          Things I Have Made in the Past
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects &&
            projects.slice(0, 3).map((project: Repo, index) => (
              <div key={index} className="rounded-lg border">
                <a className="" href={project.url}>
                  <div className="relative overflow-hidden rounded-lg bg-white">
                    <img
                      src={project?.image?.image}
                      alt=""
                      className="relative h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 border-t p-4">
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
        </div>
      </div>
      <div className="-mt-1 grid-cols-2 gap-4 p-3 sm:grid-cols-4 md:grid">
        {projects &&
          projects.slice(3, 6).map((project: Repo, index) => (
            <div key={index} className="hidden rounded-lg border sm:flex">
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
        <div className="flex flex-col items-center justify-center py-4 text-center">
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

export default Portfolio
