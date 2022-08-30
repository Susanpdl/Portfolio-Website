import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PoudelSusan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><RiInstagramFill/></a>
        <a href="https://twitter.com"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; @SusanPortfolio. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer