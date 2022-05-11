import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { MailIcon } from '@heroicons/react/outline'
import Details from './Details'

const Contact = ({ data }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  if (data) {
    var contactName = data.name
    var street = data.address.street
    var city = data.address.city
    var state = data.address.state
    var zip = data.address.zip
    var phone = data.phone
    var contactEmail = data.email
    var contactMessage = data.contactmessage
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )
  }

  return (
    <section id="contact" className="contact bg-slate">
      <Toaster position="bottom-center" />
      <div className="contactsFlexBox">
        <div className="heading2">Get In Touch</div>
        <div className="md:flex">
          <div className="contactHeader">
            <MailIcon className="mailIcon" />
            <div className="contactMessage">{contactMessage}</div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={submitForm}>
            <div className="formMedium">
              <label htmlFor="contactName" className="label">
                Name <span className="text-orange">*</span>
              </label>
              <input
                required
                type="text"
                placeholder=""
                value={name}
                className="input"
                name="contactName"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="formMedium">
              <label htmlFor="contactEmail" className="label">
                Email <span className="text-orange">*</span>
              </label>
              <input
                required
                type="text"
                placeholder=""
                value={email}
                className="input"
                name="contactEmail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="formMedium">
              <label htmlFor="contactSubject" className="label">
                Subject
              </label>
              <input
                type="text"
                placeholder=""
                value={subject}
                className="input"
                name="contactSubject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="md:inline-flex">
              <label htmlFor="contactMessage" className="label">
                Message <span className="text-orange">*</span>
              </label>
              <textarea
                required
                cols="50"
                rows="15"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea"
                name="contactMessage"
              ></textarea>
            </div>

            <button
              onClick={() => {
                submitForm,
                  toast(
                    'Successful submit. Please continue with your email provider.',
                    {
                      duration: 8000,
                      style: {
                        background: 'green',
                        color: 'white',
                        fontWeight: 'bolder',
                        fontSize: '17px',
                        padding: '20px',
                      },
                    }
                  )
              }}
              type="submit"
              className="submitButton"
            >
              Submit
            </button>
          </form>

          <div className="contactDetails">
            <div className="md:mt-7">
              <Details
                contactName={contactName}
                phone={phone}
                email={contactEmail}
                zip={zip}
                state={state}
                city={city}
                street={street}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
