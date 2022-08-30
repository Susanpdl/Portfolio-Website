import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target= "_blank"><BsLinkedin/></a>
        <a href="https://github.com" target= "_blank"><BsGithub/></a>
        <a href="https://facebook.com" target= "_blank"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials