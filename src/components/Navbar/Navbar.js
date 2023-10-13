import React from 'react'
import { useState } from "react"
import '../../style/Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-nav.png'
const Navbar =()=>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img src={logo} alt="" />
          </a>
          <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} className="hamburger">
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/data">DATA</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/infographics">INFOGRAPHICS</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    
}
export default Navbar