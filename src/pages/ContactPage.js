import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import EmailPhone from "../components/EmailPhone/EmailPhone";
import info from '../assets/images/Contact.jpg'
const ContactPage=()=>{
    return(
        <>
     <div className="Home">
     <div class="container">
                    <img class="image" src={info} alt="Responsive Image" />
                    <div class="overlay"></div>
                    <div className="text Big-heading">
                        <p>

                            <span className="THE">CONTACT </span>

                        </p>
                    </div>
                </div>
  
      
      <Contact/>
      <EmailPhone/>
      
      <Footer/>
     </div>
        </>
    )
}
export default ContactPage