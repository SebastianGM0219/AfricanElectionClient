import React from "react";
import '../style/Home.css'

import HowWeVote from "../components/Vote/HowWeVote";
import DataSection from "../components/Data/DataSection";
import PageWithNineCards from '../components/Data/PageWithNineCards'
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Election from "../components/Election/Election";
import data from '../assets/images/south-africa-location-map-flag-pin.webp'
const DataPage = () => {
  return (
    <>
      <div className="Home">
      <div class="container">
                    <img class="image" src={data} alt="Responsive Image" />
                    <div class="overlay"></div>
                    <div className="text Big-heading">
                        <p>

                            <span className="THE">DATA </span>

                        </p>
                    </div>
                </div>
        <HowWeVote />
        <Election />
        <PageWithNineCards />


        <Contact />
        <Footer />
      </div>
    </>
  );

}
export default DataPage