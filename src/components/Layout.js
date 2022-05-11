import React from 'react'
import FloatingPop from './FloatingPop'
import FloatingTabs from './FloatingTabs'

const Layout = ({ children }) => {
  return (
    <>
      <FloatingPop />
      <FloatingTabs />
      {children}
    </>
  )
}

export default Layout
