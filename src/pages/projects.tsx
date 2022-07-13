/* eslint-disable @next/next/no-img-element */
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function Projects() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setWorks(data.portfolio.projects)
      })
  }, [])

  const allProjects = works.map(function (projects, index) {
    var projectImage = 'images/portfolio/' + projects.image

    const skills = projects.skills?.map(function (skills, index) {
      var skillImage = 'images/skills/' + skills.image
      return (
        <div
          key={index}
          className="flex space-x-2 rounded-full border p-1 shadow-lg"
        >
          <img src={skillImage} className="h-6 w-6" alt="" />
          {/* <p className="text-sm md:hidden"> {skills.name}</p> */}
        </div>
      )
    })

    return (
      <div
        key={index}
        className="relative rounded-lg border border-gray-800  bg-white shadow-lg hover:bg-gray-100"
      >
        <a className="" href={projects.url}>
          <div className="justify-items-center overflow-hidden rounded-t-lg">
            <img
              src={projectImage}
              alt={projects.title}
              className="relative h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-b-lg border-t border-gray-800 p-4">
            <div className="text-lg font-semibold text-gray-800">
              {projects.title}
            </div>
            <div className="text-md pt-2 font-sans text-gray-800 md:text-sm">
              {projects.description}
            </div>
          </div>
          <div className="h-10"></div>
          <div className="absolute bottom-2 flex space-x-[4px] px-4 sm:hidden md:flex">
            {skills}
          </div>
        </a>
      </div>
    )
  })
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl">
      <Nav />
      <div className="max-w-5xl p-6 pt-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="text-2xl text-gray-600">My Contributions</div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {allProjects}
        </div>
      </div>
      <Footer />
    </div>
  )
}
