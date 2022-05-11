import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/outline'

export default function Footer({ data }) {
  if (data) {
    var networks = data.social.map(function (network) {
      var pic = '/images/networks/' + network.pic
      return (
        <div key={network.network} className="">
          <a href={network.link} network={network.network}>
            <img
              alt={network.network}
              src={pic}
              className="socialIcon hover:text-orange"
            />
          </a>
        </div>
      )
    })
  }
  return (
    <div className="footer">
      <div className="footerOverlay">
        <div className="split"></div>
        <button className="backToTopButton hover:shadow-orange">
          <a title="BacktoTop" href="#home">
            <ChevronUpIcon className="chevronUp" />
          </a>
        </button>
        <div className="split"></div>
      </div>
      <div className="socialGroup">{networks}</div>
      <div className="my">
        <a title="footer" href="https://github.com/Twonarly1">
          <span className="madeBy">Made by</span> Twonarly
        </a>
      </div>
    </div>
  )
}
