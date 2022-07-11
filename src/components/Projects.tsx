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
          <div
            key={index}
            className="flex space-x-2 rounded-full border p-1 shadow-lg"
          >
            <img src={skillImage} className="h-5 w-5" alt="" />
            {/* <p className="text-sm md:hidden"> {skills.name}</p> */}
          </div>
        )
      })
      console.log(skills)

      return (
        <div
          key={projects.title}
          className="rounded-lg border bg-white shadow-lg"
        >
          <a href={projects.url}>
            <div className="justify-items-center overflow-hidden rounded-t-lg ">
              <img
                src={projectImage}
                alt={projects.title}
                className="relative h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-b-lg border-t p-4">
              <div className="projectsTitle">{projects.title}</div>
              <div className="projectsDescription">{projects.description}</div>
              <div className="mt-2 flex space-x-2 pt-2">{skills}</div>
            </div>
          </a>
        </div>
      )
    })
    var projectsNoImage = data.projects.slice(3, 6).map(function (projects) {
      return (
        <div
          key={projects.title}
          className="hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex"
        >
          <a className="" href={projects.url}>
            <div className="space-y-2 p-4">
              <div className="projectsTitle">{projects.title}</div>
              <div className="projectsDescription">{projects.description}</div>
            </div>
          </a>
        </div>
      )
    })
  }

  return (
    <div className="max-w-5xl pt-10">
      <Heading title={'Projects'} subtitle={'My Contributions'} />
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects}
      </div>
      <div className="my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid">
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
  )
}

export default Portfolio
