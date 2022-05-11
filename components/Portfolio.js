import React from 'react'
import { LinkIcon } from '@heroicons/react/outline'

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image
      return (
        <div key={projects.title} className="mb">
          <div className="project">
            <a href={projects.url} title={projects.title}>
              <img
                alt={projects.title}
                src={projectImage}
                className="projectImage"
              />
              {/* <div class="hidden md:inset-0 md:mt-4 md:flex md:items-center md:justify-center md:rounded-lg md:text-2xl md:font-semibold md:text-black md:opacity-10 md:duration-300 md:hover:opacity-100">
                <h5 className="">{projects.title}</h5>
              </div> */}
            </a>
            <div className="card">
              <h5 className="cardTitle">{projects.title}</h5>
              <h5 className="cardDescription">{projects.description}</h5>
              <p>{projects.category}</p>
              <button className="cardLink">
                <LinkIcon className="linkIcon" />
                <span> view github / website</span>
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section className="portfolio bg-slate" id="portfolio">
      <h1 className="portfolioTitle">My Projects</h1>
      <div className="projects">{projects}</div>
    </section>
  )
}

export default Portfolio
