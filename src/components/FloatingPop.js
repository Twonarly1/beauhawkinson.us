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
            <a className="hover" href="#home">
              Home
            </a>
            <a className="hover" href="#about">
              About
            </a>
            <a className="hover" href="#resume">
              Resume
            </a>
            <a className="hover" href="#portfolio">
              Works
            </a>
            <a className="hover" href="#testimonials">
              Testimonials
            </a>
            <a className="hover" href="#contact">
              Contact
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default FloatingPop
