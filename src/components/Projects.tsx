/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Heading from './Heading'

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.slice(0, 3).map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image

      const skills = projects.skills?.map(function (skills, index) {
        var skillImage = 'images/skills/' + skills.image
        return (
          <div key={index} className="flex rounded-full  p-1 shadow-lg">
            <img src={skillImage} className="h-6 w-6" alt="" />
          </div>
        )
      })

      return (
        <div
          key={projects.title}
          className="relative rounded-lg border border-gray-700  bg-white shadow-lg"
        >
          <a href={projects.url}>
            <div className="justify-items-center overflow-hidden rounded-t-lg ">
              <img
                src={projectImage}
                alt={projects.title}
                className="relative h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col rounded-b-lg border-t border-gray-700 p-4">
              <div className="text-lg font-semibold text-gray-800">
                {projects.title}
              </div>
              <div className="text-md pt-2 font-sans text-gray-800 md:text-sm">
                {projects.description}
              </div>
            </div>
            <div className="h-10"></div>
            <div className="absolute bottom-2 flex space-x-[11px] px-4">
              {skills}
            </div>
          </a>
        </div>
      )
    })
    var projectsNoImage = data.projects.slice(3, 6).map(function (projects) {
      return (
        <div
          key={projects.title}
          className="hidden rounded-lg border border-black bg-white shadow-lg md:mt-0 md:flex"
        >
          <a className="" href={projects.url}>
            <div className="space-y-2 p-4">
              <div className="text-lg font-semibold text-gray-800 group-hover:text-gray-700">
                {projects.title}
              </div>
              <div className="text-md font-sans text-gray-800 md:text-sm">
                {projects.description}
              </div>
            </div>
          </a>
        </div>
      )
    })
  }

  return (
    <div className="max-w-5xl pt-10 ">
      <Heading title={'Projects'} subtitle={'My Contributions'} />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {projects}
      </div>
      <div className="my-4 grid-cols-2 gap-6 pt-2 sm:grid-cols-4 md:grid">
        {projectsNoImage}
        <div className="flex cursor-default flex-col items-center justify-center py-4 text-center">
          <div className="text-lg font-bold text-gray-800 dark:text-white">
            Want to see more?
          </div>
          <div className="text-gray-600 dark:text-white">
            Explore more of my work
          </div>
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
