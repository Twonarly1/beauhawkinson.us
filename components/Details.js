import React from 'react'
import { HomeIcon, AtSymbolIcon, PhoneIcon } from '@heroicons/react/outline'

const Details = ({
  street,
  city,
  state,
  zip,
  phone,
  contactEmail,
  email,
  contactName,
  name,
}) => {
  return (
    <>
      <h2 className="heading">Contact Details</h2>
      {contactName}
      {name}
      <br />
      <div className="flexbox">
        <HomeIcon className="homeIcon" />
        <span>
          {street}
          <br />
          {city} {state}, {zip}
        </span>
      </div>
      <div className="flexbox">
        <PhoneIcon className="phoneIcon" />
        <span>{phone}</span>
      </div>
      <div className="flexbox">
        <AtSymbolIcon className="atSymbolIcon" />
        <span>
          {contactEmail}
          {email}
        </span>
      </div>
    </>
  )
}

export default Details
