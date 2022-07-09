import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { Main, Project, Repo } from '../../typings'
import { config } from '../../config'
import { fetchRepos } from '../core/github'
import Achievements from '../components/Achievements'
import GithubActivity from '../components/GithubActivity'

interface AppProps {
  repos: {
    starredRepos: Repo[]
    contributedRepos: Repo[]
  }
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
  console.log('index', resumeData)

  return (
    <div className="mx-auto flex w-full flex-col items-center bg-white">
      <Header />
      <div className="space-y-32 p-6">
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

        <Footer />
      </div>
    </div>
  )
}
