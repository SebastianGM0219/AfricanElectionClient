import React from 'react'
import '../style/Home.css'
import About from "../components/About/About";
import HowWeVote from "../components/Vote/HowWeVote";

import News from "../components/News/News";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import TeamSection from '../components/Team/TeamSection';
import teamData from '../components/Team/teamData';
import about from '../assets/images/About-bg.jpg'
import DataCard from '../components/Data/DataCard';
const AboutPage = () => {
    return (
        <>
       
            <div className="Home">
            <div class="container">
                    <img class="image" src={about} alt="Responsive Image" />
                    <div class="overlay"></div>
                    <div className="text Big-heading">
                        <p>

                            <span className="THE">ABOUT US </span>

                        </p>
                    </div>
                </div>
           
                <About />
                <DataCard/>
                <TeamSection teamData={teamData}/>
                <News />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
export default AboutPage