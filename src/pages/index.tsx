import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Resume from '../components/Resume'
import Projects from '../components/Work'
import { Achievement, Main, Project } from '../../typings'
import { GetStaticProps } from 'next'
import { config } from '../../config'
import { fetchRepos, Repo } from '../core/github'
import Achievements from '../components/Achievements'

interface AppProps {
  main: Main[]
  achievements: Achievement[]
  projects: Project[]
  repos: {
    starredRepos: Repo[]
    contributedRepos: Repo[]
  }
  images: any
}

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
      ...project,
      image: imagesArray[index],
    }
  })
  console.log('projects', newProjects)

  return {
    props: {
      projects: newProjects.filter((project) => project),
    },
    revalidate: 10,
  }
}

export default ({ projects, repos }: AppProps) => {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  console.log('projects', projects)

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center bg-gray-100 ">
      <Head>
        <title>bhawkinson</title>
        <link rel="icon" href="/two.png" />
      </Head>
      <Header />

      <Projects projects={projects} />
      <Resume
        //@ts-ignore
        data={resumeData.resume}
      />
      {/* <Testimonials
        //@ts-ignore
        data={resumeData.testimonials}
      /> */}
      <Achievements
        //@ts-ignore
        data={resumeData.resume}
      />
      {/* <Contact
        //@ts-ignore
        data={resumeData.main}
      /> */}
      <Footer
        //@ts-ignore
        data={resumeData.main}
      />
    </div>
  )
}
