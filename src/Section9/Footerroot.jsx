import React from 'react'
import imagearrowdown from '../assets/imagearrowdown.png';
import imageface from '../assets/imageface.png';
import imagelink from '../assets/imagelink.png';
import imagetwi from '../assets/imagetwi.png';
import imageemail from '../assets/imageemail.png';


import '../Section9/Footerroot.css'


const Footerroot = () => {
  return (
   <>
   {/* <!-- section Nine --> */}
      <section class="section9">
        <div class="footer">
            <img className="footerArrowImg" src={imagearrowdown} alt="" />
            <p><a href="#top">BACK TO TOP</a></p>
            <div className="socialMediaIcons">
                <img src={imageface} alt="facebook icon" />
                <img src={imagelink} alt="linkedin icon" />
                <img src={imagetwi} alt="twitter icon" />
                <img src={imageemail} alt="email icon" />
          </div>
          <p>@2020 Tomasz Gajda All Rights Reserved.</p>
        </div>
      </section> 
   </>
  )
}

export default Footerroot