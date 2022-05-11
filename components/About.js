import React from 'react'
import { DownloadIcon } from '@heroicons/react/outline'
import Details from './Details'

const About = ({ data }) => {
  if (data) {
    var name = data.name
    var profilepic = 'images/' + data.image
    var bio = data.bio
    var street = data.address.street
    var city = data.address.city
    var state = data.address.state
    var zip = data.address.zip
    var phone = data.phone
    var email = data.email
    var resumeDownload = data.resumedownload
  }

  return (
    <section id="about" className="about bg-slate">
      <div className="aboutContainer">
        <div className="aboutFlex">
          <img className="pfp" src={profilepic} alt="pfp" />
          <div>
            <h1 className="heading">About Me</h1>
            <p>{bio}</p>
            <div className="contactDetailsGrid">
              <div>
                <Details
                  name={name}
                  phone={phone}
                  email={email}
                  zip={zip}
                  state={state}
                  city={city}
                  street={street}
                />
              </div>
              <div>
                <a href={resumeDownload} className="resumeDownload">
                  <DownloadIcon className="downloadIcon" />
                  <div className="download">Download Resume</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
