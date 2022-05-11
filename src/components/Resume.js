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
  }

  return (
    <>
      <section id="resume" className="resume">
        <div className="mediumScreen">
          <div className="block">
            <span className="title decoration-orange">Education</span>
          </div>
          <div className="margin">{education}</div>
        </div>
        <div className="blockBorder">
          <div className="block">
            <span className="title decoration-orange">Work</span>
          </div>
          <div className="margin">{work}</div>
        </div>
        <div className="blockBorder">
          <div className="block">
            <span className="title decoration-orange">Skills</span>
          </div>
          <div>
            <p className="skillMessage heading">{skillmessage}</p>
          </div>
        </div>
        <div className="skills">{skills}</div>
      </section>
    </>
  )
}

export default Resume
