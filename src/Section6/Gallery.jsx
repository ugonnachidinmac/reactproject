import React from 'react'
import background1 from '../assets/background1.png';
import background2 from '../assets/background2.png';
import background3 from '../assets/background3.png';
import background4 from '../assets/background4.png';
import background5 from '../assets/background5.png';
import background6 from '../assets/background6.png';

import '../Section6/Gallery.css'
// import '../Section1Nav/Nav.css'



const Gallery = () => {
  return (
    <>
    {/* <!-- Section Six --> */}

<section class="section6">
 <div class="galleyContainer">
     <img src={background1} alt="Image 1" />
 </div>
 <div class="galleyContainer">
     <img src={background2} alt="Image 2" />
     <div class="gallaries eatsome">
         <p>coded, designed</p>
         <p>eatsome.</p>
         <p>Restaurant browsing in React.js (Using Yelp API)</p>
         <div class="demoMore">
             <span>DEMO</span>
             <span>MORE</span>
         </div>
     </div>
 </div>
 <div class="galleyContainer">
     <img src={background3} alt="Image 3" />
 </div>
 <div class="galleyContainer">
     <img src={background4} alt="Image 4" />
 </div>
 <div class="galleyContainer">
     <img src={background5} alt="Image 5" />
 </div>
 <div class="galleyContainer">
     <img src={background6} alt="Image 6" />
 </div>
</section>

    </>
  )
}

export default Gallery