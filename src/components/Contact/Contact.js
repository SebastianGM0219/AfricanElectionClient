import React from "react";
import '../../style/Home.css'
import contacttext from '../../assets/images/Contact Text.png';
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div  className="data-heading">
                    <span></span>
                    <h3>Contact us</h3>
                    <span></span>
                </div>
                <div className="contact-content">
                    <div className="c-t">
                        <img src={contacttext}  />
                        {/* <h2>Book your appointment</h2> */}
                        <p>Fill out this form and we promise to get back to you within 24 hours
                        </p>
                    </div>
                    <div className="c-f">
                        <input type="text" placeholder="Name" /> <br />
                        <input type="text" placeholder="Email" /> <br />
                       
                        <textarea placeholder="Message" name="" id="" cols="20" rows="5"></textarea> <br />
                        <button>Confirm</button>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact