import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {AiFillFlag} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {TbMessageLanguage} from 'react-icons/tb'


const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className= 'about_card'>
              <AiFillFlag className='about_icon'/>
              <h5>Nationality</h5>
              <small>Nepali</small>
            </article>

            <article className= 'about_card'>
              <BsFillPersonFill className='about_icon'/>
              <h5>Age</h5>
              <small>17 years</small>
            </article>

            <article className= 'about_card'>
              <TbMessageLanguage className='about_icon'/>
              <h5>Languages</h5>
              <small>Nepali, English, Hindi</small>
            </article>
          </div>

          <p>
          Currently, I am a freshman at Caldwell University double majoring in Computer Science (Honors) and Mathematics. Other than programming and equations, I love to  play soccer, tennis, watch anime, and so forth.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About