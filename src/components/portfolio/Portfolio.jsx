import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/port.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/fyb.png'
import IMG6 from '../../assets/yt.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Coin Finder (Crypto PWA)',
    github: 'https://github.com/utkarshgoel10/CryptoSearch',
    demo: 'https://mycrypto-finder.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Website (ReactJs)',
    github: 'https://github.com/utkarshgoel10/ReactPortfolio',
    demo: 'https://utkarshgoel-10.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PWA App (API)',
    github: 'https://github.com/utkarshgoel10/Weather-App-Pwa',
    demo: 'https://pwa-weather-app-ug.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Logistics Dashboard (NextJs)',
    github: 'https://github.com/Rashmi1526/TECHNOEC__2',
    demo: 'https://technoec-prob2.vercel.app/',    
  },
  {
    id: 5,
    image: IMG5,
    title: 'FYB (Freelance)',
    github: 'https://github.com/utkarshgoel10/FybHome',
    demo: 'https://utkarshgoel10.github.io/FybHome/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'SmartKart (Freelance)',
    github: 'https://github.com/utkarshgoel10/',
    demo: 'https://github.com/utkarshgoel10/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        
      {
        data.map(({id,image,title,github,demo,cur})=>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>            
            <div className="portfolio__item-cta">
            <a href= {github} className='btn' style={{cur}}>Github</a>
            <a href= {demo} className='btn btn-primary'>Live Demo</a>          
            </div>
        </article>
          )
        })
      }        
        
      </div>
    </section>
  )
}

export default Portfolio
