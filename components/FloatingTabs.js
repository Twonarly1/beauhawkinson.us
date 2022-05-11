import React from 'react'
import { Tab } from '@headlessui/react'

const FloatingTabs = () => {
  return (
    <div className="floatingTabs">
      <Tab.Group>
        <Tab.List className="tabList">
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#home">
              Home
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#about">
              About
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#resume">
              Resume
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#portfolio">
              Works
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#testimonials">
              Testimonials
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-orange' : '')}>
            <a className="tab" href="#contact">
              Contact
            </a>
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default FloatingTabs
