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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="img" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">

            <a href="https://github.com/Susanpdl/Web-dev1" className='btn'>Github</a>
            <a href="https://.com" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Susanpdl/Web-dev2" className='btn'>Github</a>
            <a href="https://.com" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="img" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href={P3} download className='btn btn-primary' >Click Here</a>
          </div>
        </article>


        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://www.credly.com/badges/bc8b0871-2f13-4c13-b9b5-8b443a866c8c/public_url" className='btn btn-primary'>Visit Here</a>
          </div>
        </article>


      </div >
    </section >
  )
}

export default Portfolio