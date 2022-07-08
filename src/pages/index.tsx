import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { Achievement, Main, Project, Repo } from '../../typings'
import { config } from '../../config'
import { fetchRepos } from '../core/github'
import Achievements from '../components/Achievements'
import GithubActivity from '../components/GithubActivity'

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

export const getStaticProps = async () => {
  const { starredRepos, contributedRepos } = await fetchRepos(
    config.githubUsername,
    config.githubToken
  )
  return {
    props: {
      repos: {
        starredRepos,
        contributedRepos,
      },
    },
    revalidate: 10,
  }
}

export default ({ repos }: AppProps) => {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  return (
    <div className="mx-auto flex w-full flex-col items-center bg-gray-100">
      <Header />
      <Projects
        //@ts-ignore
        data={resumeData.portfolio}
      />
      <Skills
        //@ts-ignore
        data={resumeData.main}
      />
      <Achievements
        //@ts-ignore
        data={resumeData.main}
      />

      <GithubActivity repos={repos} />

      <div className="pt-32">
        <Footer />
      </div>
    </div>
  )
}
