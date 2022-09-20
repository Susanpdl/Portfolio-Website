import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assests/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi World!</h5>
        <h1>Susan Poudel</h1>
        <h5 className="text-light">Computer Enthusiast</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="img" />
        </div>
      </div>
    </header>
  )
}

export default Header