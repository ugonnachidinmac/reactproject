import React from 'react'
import '../Section8/Form.css'


const Form = () => {
  return (
    <>
     {/* <!-- section Eight --> */}
      <section class="section8">
        <div class="contactContainer">
        <div class="contact8">CONTACT</div>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
          finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
          viverra facilisis ut ac est.
        </p>
        <img src="./images/seprade1.png" alt="" />
        
        <form action="">
          <fieldset>
          <input type="text" required placeholder="ENTER YOUR NAME*" />
          <input type="text" required placeholder="ENTER YOUR EMAIL*" />
          <input type="text" required placeholder="PHONE NUMBER*" />
          </fieldset>
          <fieldset>
               <textarea name="message" id="message" placeholder="YOUR MESSAGE*"></textarea>
          <button class="buttonForm">SUBMIT</button>
          </fieldset>
        </form>  
        </div>                                      
      </section> 
        
    </>
  )
}

export default Form