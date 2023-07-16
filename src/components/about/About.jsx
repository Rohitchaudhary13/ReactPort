import React from 'react'
import './about.css'
import ME from '../../assets/images/IMG_RC.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id='abouts'>      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <motion.div                                          
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
            whileInView={{ opacity: 1 }}
          >          
          <div className="about__me-image">
            <img src= {ME} alt="" />
            </div>
            </motion.div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Community</h5>
              <small>Trained 150+ devs</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Referred</h5>
              <small>5+ Dev & Company</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          I'm a final year student currently pursuing my bachelor's of technology. I'm a tech enthusiast, and an avid learner. I'm also an instructor, helping developers become confident in their domains. Currently, I'm making programming tutorials on Youtube. I'm searching for new opportunities; if you believe I may be of assistance, feel free to contact me.
          </p>

          <a href="#contact" className='btn btn-primary'>Hire Me</a>

        </div>
      </div>
    </section >
  )
}

export default About
