import React from "react";
import '../style/Home.css'
import About from "../components/About/About";
import HowWeVote from "../components/Vote/HowWeVote";

import News from "../components/News/News";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import home from '../assets/images/Banner Image.jpg'
import DataCard from "../components/Data/DataCard";
const Home = () => {

  return (
    <>

      <div className="Home">
        <div class="container">
          <img class="image" src={home} alt="Responsive Image" />
          <div class="overlay"></div>
          <div className="text Big-heading">
          <p>
          <span className="opening-comma">“</span>
          <span className="THE">THE </span>
          <span className="AFR">AFRICA </span>
          <span className="ELEC">ELECTIONS </span>
          <span className="THE">PLACE</span>
          <span className="opening-comma">” </span>
          </p>
        </div>
        </div>
        {/* <div className="main-section">
        <div className="Big-heading">
          <p>
          <span className="opening-comma">“</span>
          <span className="THE">THE </span>
          <span className="AFR">AFRICA </span>
          <span className="ELEC">ELECTIONS </span>
          <span className="THE">PLACE</span>
          <span className="opening-comma">” </span>
          </p>
        </div>
      </div> */}
   
        <About />
       <DataCard/>
        <News />
        <Contact />
        <Footer />
      </div>
    </>
  );
};


export default Home;
