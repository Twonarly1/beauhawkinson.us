import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import { Achievement, Main, Project } from '../../typings'
import { GetStaticProps } from 'next'
import { config } from '../../config'
import { fetchRepos, Repo } from '../core/github'
import { Achievements } from '../components/Achievements'

interface AppProps {
  main: Main[]
  achievements: Achievement[]
  projects: Project[]
  repos: {
    contributedRepos: Repo[]
  }
}

const imagesArray = [
  {
    id: 0,
    image: '/images/portfolio/poh.png',
  },
  {
    id: 1,
    image: '/images/portfolio/poh.png',
  },
  {
    id: 2,
    image: '/images/portfolio/poh.png',
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

export default ({ projects, repos }: AppProps) => {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])
  // console.log('here', projects)

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <Head>
        <title>bhawkinson</title>
        <link rel="icon" href="/two.png" />
      </Head>
      <Header
        //@ts-ignore
        data={resumeData.main}
      />
      <Resume
        //@ts-ignore
        data={resumeData.resume}
      />
      <Portfolio
        //@ts-ignore
        projects={projects}
      />
      {/* <Testimonials
        //@ts-ignore
        data={resumeData.testimonials}
      /> */}
      <Achievements />
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
