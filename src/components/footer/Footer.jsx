import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiYoutube} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
        <a href="/" className='footer__logo' style={{color:'white'}}>RC</a>
        <ul className="permalinks">

          <li><a href="/">Home</a></li>
          <li><a href="#abouts">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>                    
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/rohit-choudhary13/"><BsLinkedin /></a>
          <a href="https://www.instagram.com/_rohit.chaudhary__/"><FiInstagram /></a>
          <a href="https://twitter.com/styyx09"><IoLogoTwitter /></a>
          <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><SiYoutube /></a>
        </div>

    <div className="footer__copyright">
      <small>&copy; Rohit Choudhary All rights reserved.</small>
    </div>

    </footer>
  )   
}

export default Footer
