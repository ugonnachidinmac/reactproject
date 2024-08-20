import React from 'react'
import seprade1 from '../assets/seprade1.png';
import separatorBlack from '../assets/separatorBlack.png';
import imagehtml5 from '../assets/imagehtml5.png';
import imagecss3 from '../assets/imagecss3.png';
import imagess from '../assets/imagess.png';
import imagejs from '../assets/imagejs.png';
import imageReact from '../assets/imageReact.png';
import imageB from '../assets/imageB.png';
import imagegit from '../assets/imagegit.png';
import imagefigma from '../assets/imagefigma.png';
import imagejs2 from '../assets/imagejs2.png';
import imagemysq from '../assets/imagemysq.png';
import imageMONGODB from '../assets/imageMONGODB.png';
import imageTYPESCRIPT from '../assets/imageTYPESCRIPT.png';
import imageANGIELSKI from '../assets/imageANGIELSKI.png';
import imageHISZPAN from '../assets/imageHISZPAN.png';
import imagec2 from '../assets/imagec2.png';
import imagec from '../assets/imagec.png';
import desimgbak from '../assets/desimgbak.png';
import maintenancebackimg from '../assets/maintenancebackimg.png';
import devbckimg from '../assets/devbckimg.png';



import '../Section3/AboutMe.css';

const AboutMe = () => {
  return (
    <>
    
    {/* <!-- section three --> */}

<section className="section3">
    <div className="section3Div">
      <div className="aboutMe"><a href="">ABOUT ME</a></div>
      <p>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
        varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
        quis libero viverra facilisis ut ac est.
      </p>
      <button><a href="#"> EXPLORE </a></button>
      <img src={seprade1} alt="" />
     
      <div className="container1">
        <div className="row1Content">
            <div className="row1Left rowInlineblock">
                <div className="bkimgContainer designbkimg">
                <h3>DESIGN</h3>
                </div>     
                <p>
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the job.
                </p>
            </div>
            <div className="row1Right rowInlineblock">
                <div className="bkimgContainer devbkimg">
                <h3>DEVELOPMENT</h3>
                </div>
                <p>
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the job.
                </p>
            </div>
        </div>
        </div>

        <div className="row2Content">
            <div className="bkimgContainer mainbkimg">
            <h3>MAINTENANCE</h3>
            </div>
            <p>
            I can design the site based on your needs and suggestions. I can also
            design the site from scratch and consult you during the job.
            </p>
        </div>
        
    </div>    

<div className="separator">
    <img src={separatorBlack} alt="Separator" />
</div>

<div className="skills">
    <h2>SKILLS</h2>
</div>

<div className="iconContainer">
  <div className="usingNowContainer">
      <h3>USING NOW:</h3>
      <div className="usingIcon1">
          <div className="iconContent"><img className="html5" src={imagehtml5} alt="HTML5" /><p>HTML5</p></div>
          <div className="iconContent"><img className="css3" src={imagecss3} alt="CSS3" /><p>CSS3</p></div>
          <div className="iconContent"><img className="sass" src={imagess} alt="SASS" /><p>SASS</p></div>
          <div className="iconContent"><img className="javascriptBoostGit" src={imagejs} alt="JAVASCRIPT" /><p>JAVASCRIPT</p></div>
          <div className="iconContent"><img className="react" src={imageReact} alt="REACT" /><p>REACT</p></div>
          <div class="iconContent"><img className="javascriptBoostGit" src={imageB} alt="BOOTSTRAP" /><p>BOOTSTRAP</p></div>
          <div className="iconContent"><img className="javascriptBoostGit" src={imagegit} alt="GIT" /><p>GIT</p></div>
          <div className="iconContent"><img className="figma" src={imagefigma} alt="FIGMA" /><p>FIGMA</p></div>
      </div>
  </div>

  <div className="learningContainer">
      <h3>LEARNING:</h3>
      <div class="learningIcon1">
          <div className="iconContent"><img src={imagejs2} alt="NODEJS" /><p>NODEJS</p></div>
          <div className="iconContent"><img src={imagemysq} alt="MySQL" /><p>MySQL</p></div>
          <div className="iconContent"><img src={imageMONGODB} alt="MONGODB" /><p>MONGODB</p></div>
          <div className="iconContent"><img src={imageTYPESCRIPT} alt="TYPESCRIPT" /><p>TYPESCRIPT</p></div>
      </div>
  </div>

  <div className="otherSkillsContainer">
      <h3>OTHER SKILLS:</h3>
      <div className="othersIcon1">
          <div className="iconContent"><img className="others" src={imageANGIELSKI} alt="ANGIELSKI" /><p>ANGIELSKI C1/C2</p></div>
          <div className="iconContent"><img className="others" src={imageHISZPAN} alt="HISZPAŃSKI" /><p>HISZPAŃSKI B1/B2</p></div>
          <div className="iconContent"><img className="others" src={imagec2} alt="C++" /><p>C++</p></div>
          <div className="iconContent"><img className="others" src={imagec} alt="C" /><p>C</p></div>
      </div>
  </div>
</div>
  </section> 
  
  </>
  )
}

export default AboutMe