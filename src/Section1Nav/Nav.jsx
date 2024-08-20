import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path based on your file structure
import mobileLogo from '../assets/mobileLogo.png'; 
import handBurger from '../assets/handBurger.png'; 
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 
import user from '../assets/user.png'; 
import separatorWhite from '../assets/separatorWhite.png';
import atwhite from '../assets/atwhite.png';
import githubwhite from '../assets/githubwhite.png';
import linkedinwhite from '../assets/linkedinwhite.png';

import '../Section1Nav/Nav.css'

const Nav = () => {
  return (
    <>
      <section id="top" className="section1">
        {/* Navigation Part */}
        <nav>
          <ol>
            <li className="logo">
             <img className="desktopLogo" src={logo} alt="logo" />
              <img className="mobileLogo" src={mobileLogo} alt="logo" />
            </li>
            <li className="links">
              <a href="#about">About me</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a className="contact" href="#contact">CONTACT ME</a>
            </li>
            <li className="menu dropdown">
              <img className="dropbtn" src={handBurger} alt="menu" />
              <div className="dropdown-content">
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">CONTACT ME</a>
              </div>
            </li>
          </ol>
        </nav>

        <div className="hero">
                <div className="BioDataLeftBox">
                  <h2>Hi, I am</h2>
                  <h3>Tomasz Gajda</h3>
                  <p>Front-end Developer / UI Designer</p>
                  <div className="heroIcons">
                    <div><img src={icon1} alt="icon1" /></div>
                    <div><img src={icon2} alt="icon2" /></div>
                    <div><img src={icon3} alt="icon3" /></div>
                  </div>
                </div>
                <div className="BioDataRightBox">
                  <div className="heroImage">
                    <img src={user} alt="Image" className="heroImage" />
                    <p className="text-on-image">this is not my photo, but I dearly hope to get one just like this</p>
                </div>
                </div>                      
        </div> 

        {/* Hero Mobile */}
        <div className="heroMobile">
            <span>my name is Thomas</span>
            <p>I’M A DEVELOPER</p>
            <img className="whiteSeparator" src={separatorWhite} alt="" />
            <div className="whiteIconns">
                <img src={atwhite} alt="" />
                <img src={githubwhite} alt="" />
                <img src={linkedinwhite} alt="" />
            </div>
        </div>  
      </section>
    </>
  );
};

export default Nav;
