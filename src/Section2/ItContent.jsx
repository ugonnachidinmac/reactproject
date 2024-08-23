import React from 'react'
import backgroundImage from '../assets/backgroundImage.png';
import mobileBackground from '../assets/mobileBackground.png';
import mobileBackgroundit from '../assets/mobileBackgroundit.png';

import '../Section2/ItContent.css'
const ItContent = () => {
  return (
    <>
    <section className="section2">
        <div className="itContent">
          <h1>IT BERRIES</h1>
          
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </p>
          
          <button className="readMorebtn"><a href="#">READ MORE</a></button>
        </div>
      </section> 
    </>
  )
}

export default ItContent