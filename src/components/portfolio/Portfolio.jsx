import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/Portfolio1.webp'
import IMG2 from '../../assests/Portfolio2.webp'
import IMG3 from '../../assests/Portfolio3.jpg'
import P3 from '../../assests/Portfolio3.pdf'
import IMG4 from '../../assests/Portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="img" />
          </div>
          <h3> This is a front-end design of university website. </h3>
          <div className="portfolio_item-cta">

            <a href="https://github.com/Susanpdl/Web-dev1" className='btn' target="_blank">Github</a>
            <a href="https://sampleuniversitywebsite.netlify.app" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>

        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img" />
          </div>
          <h3> This is a demo of gaming website.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Susanpdl/Web-dev2" className='btn' target="_blank">Github</a>
            <a href="https://hallofgame.netlify.app" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>

        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="img" />
          </div>
          <h3> Certificate of participation in "Introduction to Quantum Computing" Course with IBM Quantum. It is a 6 months course dedicated to high school students to teach the basics of Quantum Computing. </h3>
          <div className="portfolio_item-cta">
            <a href={P3} download className='btn btn-primary' >Click Here</a>
            <a href="https://www.qubitbyqubit.org/course-info" className='btn btn-primary' target="_blank">Learn More</a>
          </div>
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img" />
          </div>
          <h3> Certificate of Participation in AT&T's Externship Program</h3>
          <div className="portfolio_item-cta">
            <a href="https://www.credly.com/badges/bc8b0871-2f13-4c13-b9b5-8b443a866c8c/public_url" className='btn btn-primary'>Visit Here</a>
          </div>
        </article>


      </div >
    </section >
  )
}

export default Portfolio