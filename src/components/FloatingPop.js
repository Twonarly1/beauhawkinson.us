import React from 'react'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

const FloatingPop = () => {
  return (
    <div className="floatingPop">
      <Popover>
        <Popover.Button className="popoverButton hover:shadow-orange">
          <MenuIcon className="menuIcon" />
        </Popover.Button>

        <Popover.Panel>
          <div className="popoverPanel bg-orange tracking-wider text-slate">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#portfolio">Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default FloatingPop
