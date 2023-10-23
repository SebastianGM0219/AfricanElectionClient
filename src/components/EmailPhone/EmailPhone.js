import React from "react"
import man from '../../assets/images/men-pointing-left-17 1.png'
const EmailPhone = () => {

    return (
        <>
            <div className="EmailPhon">
                <div className="man-contact">
                    <div className="img">
                    <img src={man}  />
                    </div>
                    
                    <div className="boxes">
                        <div>
                            <h2>EMAIL</h2>
                            <p>info@ghanadatacenter.com</p>
                        </div>
                        <div>
                            <h2>PHONE</h2>
                            <p>+0 000 000 0000</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}
export default EmailPhone