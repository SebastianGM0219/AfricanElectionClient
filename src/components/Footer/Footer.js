import React from 'react'
import logo from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={logo}  />
                </div>
                <div className="grid-item">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Data</li>
                        <li>News</li>
                        <li>Infographics</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h2>Contact Us</h2>
                    <span>info@ghanadatacenter.com <br />
                        +0 000 000 0000
                    </span>
                    <h2>Social Media Platform</h2>

                </div>
                <div className="grid-item">
                    <h2>Searching Data</h2>
                    <div className="form">
                        <input type="text" /> <br />
                        <button>Done</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer