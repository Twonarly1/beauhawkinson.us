import React, { useState } from 'react'

import Briefcase from '../../public/images/achievements/briefcase.svg'
import Lock from '../../public/images/achievements/lock.svg'
import Certificate from '../../public/images/achievements/certificate.svg'
import Trophy from '../../public/images/achievements/trophy.svg'

import {
  Achievement as AchievementProps,
  AchievementType,
  Achievement,
} from '../../typings'
import { NotionRenderer } from 'react-notion'
import { Timestamp } from './base/timestamp'

const AchievementIcon: React.FC<{
  type: AchievementType
  className?: string
}> = ({ type, ...props }) => {
  switch (type) {
    case 'award':
      return <Trophy {...props} />
    case 'education':
      return <Certificate {...props} />
    case 'work':
      return <Briefcase {...props} />
    case 'security':
      return <Lock {...props} />
  }
}

export const Achievements: React.FC = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="container my-16">
      <div className="m-auto max-w-5xl p-3">
        <h1 className="text-4xl font-bold">Achievements</h1>
        <div className="text-2xl text-gray-600">Things I Have Achieved</div>
        {/* <div className="my-4">
          {achievements
            .filter((a) => showMore || a.highlight)
            .map((a, i) => (
              <AchievementRow key={i} {...a} />
            ))}
        </div> */}
        <div className="flex justify-center">
          <button
            className="shadow-xs rounded border border-gray-300 px-2 py-1 text-gray-800"
            data-splitbee-event="Toggle Achievements"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less ↑' : 'Show more ↓'}
          </button>
        </div>
      </div>
    </div>
  )
}
