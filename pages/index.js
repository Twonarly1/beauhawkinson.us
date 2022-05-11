import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'

export default function Home() {
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <Head>
        <title>bhawkinson</title>
        <link rel="icon" href="/two.png" />
      </Head>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  )
}
