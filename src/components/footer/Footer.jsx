import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
        <a href="#h" className='footer__logo' style={{color:'white'}}>UG</a>
        <ul className="permalinks">

          <li><a href="#">Home</a></li>
          <li><a href="#abouts">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/goelutkarsh/"><BsLinkedin /></a>
          <a href="https://www.instagram.com/utkarsh_goel.10/"><FiInstagram /></a>
          <a href="https://twitter.com/Utkarshgoel_10"><IoLogoTwitter /></a>
        </div>

    <div className="footer__copyright">
      <small>&copy; Utkarsh Goel All rights reserved.</small>
    </div>

    </footer>
  )   
}

export default Footer