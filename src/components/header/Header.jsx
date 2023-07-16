import React from "react";
import "./header.css";
import CTA from "./Buttons";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h2>Hello I'm</h2>
        <h1>Rohit Chaudhary</h1>
        <h1 className="text-light" style={{marginTop:'1rem',width:'60vw',marginLeft: 'auto',marginRight: 'auto'}}>
          A <span className="animate-charcter">Full Stack Developer</span> and a Software Engineer who enjoys
          turning problems and opportunities into simple interfaces through
          design and code.
        </h1>

        {/* <HeaderSocial /> */}
        <CTA />
        
        {/* <div className="me">
          <img src={ME} alt="me"/>
        </div> */}

        {/* <a href="#abouts" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
