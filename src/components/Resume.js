import Image from 'next/image'
import React from 'react'

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage
    var education = data.education.map(function (education) {
      return (
        <div className="resumeSpacing" key={education.school}>
          <h3 className="heading">{education.school}</h3>
          <p className="resumeText">
            {education.degree} <span>&bull;</span>
            <em className="resumeEducation">{education.graduated}</em>
          </p>
          <p className="resumeDescription">{education.description}</p>
        </div>
      )
    })
    var work = data.work.map(function (work) {
      return (
        <div className="resumeSpacing" key={work.company}>
          <h3 className="heading">{work.company}</h3>
          <p className="resumeText">
            {work.title}
            <span>&bull;</span>
            <em className="workYears">{work.years}</em>
          </p>
          <p className="resumeDescription">{work.description}</p>
        </div>
      )
    })
    var skillmessage = data.skillmessage
    var skills = data.skills.map(function (skill) {
      var src = '/images/skills/' + skill.src
      return (
        <div key={skill.name} className="md:h-40">
          <div className="">
            <a href={skill.url} name={skill.name}>
              <img alt={skill.name} src={src} className="skillImage" />
            </a>
            <h5 className="skillName"> {skill.name}</h5>
          </div>
        </div>
      )
    })
    var certificates = data.certificates.map(function (certificate) {
      var src = '/images/certificates/' + certificate.src
      return (
        <div key={certificate.name} className=" md:h-40">
          <div className="">
            <a href={certificate.url} name={certificate.name}>
              <img
                alt={certificate.name}
                src={src}
                className="mx-auto w-80 object-cover shadow-md
              "
              />
            </a>
            <h5 className="skillName"> {certificate.name}</h5>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <section id="resume" className="resume">
        <div className="mediumScreen">
          <div className="block">
            <span className="title decoration-orange md:ml-8 lg:ml-0">
              Education
            </span>
          </div>
          <div className="margin">{education}</div>
        </div>
        <div className="blockBorder">
          <div className="block">
            <span className="title decoration-orange md:ml-8 lg:ml-0">
              Work
            </span>
          </div>
          <div className="margin">{work}</div>
        </div>
        <div className="blockBorder">
          <div className="block">
            <span className="title decoration-orange md:ml-8 lg:ml-0">
              Skills
            </span>
          </div>
          <div>
            <p className="skillMessage heading">{skillmessage}</p>
          </div>
        </div>
        <div className="skills scrollbar-hide">{skills}</div>
        <div className="blockBorder">
          <div className="block">
            <span className="title decoration-orange md:ml-8">
              Certificates
            </span>
          </div>
        </div>
        <div className="mx-auto mt-12 mb-12 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl">
          {certificates}
        </div>
      </section>
    </>
  )
}

export default Resume
