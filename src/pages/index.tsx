import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
//import Projects from '../components/Projects'
import { ResumeData } from '../../typings'
import Achievements from '../components/Achievements'
import GithubActivity from '../components/GithubActivity'
import { useQuery } from '@apollo/client'
import { PINNED_REPOS } from '../lib/graphql/queries/pinnedItems'
import Pinned from '../components/Pinned'
import { STARRED_REPOS } from '../lib/graphql/queries/starredItems'

interface AppProps {
  resumeData: ResumeData
}

export default function Home({}: AppProps) {
  const { loading, error, data } = useQuery(PINNED_REPOS)
  const {
    loading: starredRepoLoading,
    error: starredRepoError,
    data: starredRepoData,
  } = useQuery(STARRED_REPOS)

  let [resumeData, setResumeData] = useState<ResumeData>()

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)

  if (starredRepoLoading) return 'Loading...'
  if (starredRepoError) return `Error! ${error.message}`
  const starredItems = starredRepoData.user.starredRepositories.nodes

  return (
    <div className="mx-auto flex w-full flex-col items-center bg-white text-black dark:bg-primary-dark dark:text-white">
      <Header />
      <div className="space-y-32 p-6">
        {/* <Projects data={resumeData?.portfolio} /> */}
        <Pinned pinnedItems={pinnedItems} />
        <Skills data={resumeData?.main} />
        <Achievements data={resumeData?.main} />
        <GithubActivity starredItems={starredItems} />
        <Footer />
      </div>
    </div>
  )
}
