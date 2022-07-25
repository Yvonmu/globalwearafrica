import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const PageLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div className='main'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default PageLayout