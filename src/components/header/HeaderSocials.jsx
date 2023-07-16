import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { FaMailBulk } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/rohitchaudhary13"><FaGithub /></a>
        <a href="https://github.com/styyx09"><BsTwitter /></a>        
        <a href="https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"><BsYoutube /></a>
        <a href="https://www.linkedin.com/in/rohit-choudhary13/"><FaLinkedinIn /></a>        
        <a href="https://www.instagram.com/_rohit.chaudhary__/"><BsInstagram /></a>
        <a href="mailto:rohitchoudhary1318@gmail.com"><FaMailBulk /></a>
        
        
    </div>    
  );
};

export default HeaderSocials;
