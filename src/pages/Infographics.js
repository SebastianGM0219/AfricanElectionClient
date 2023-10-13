import React from "react"
import '../style/Home.css'
import Footer from "../components/Footer/Footer"
import Mapview from "../components/Mapview/Mapview"
import Presidential from "../components/Election/PresedentialResult"
import Turnout from "../components/VoterTurnout/Turnout"
import VoteAbroadleft from "../components/Abroad/VoteAbroadleft"
import VoteAbroadright from "../components/Abroad/VoteAbroadright"
import info from '../assets/images/Contact.jpg'

const Infographics = () => {
    return (
        <>
            <div className="Home">
                <div class="container">
                    <img class="image" src={info} alt="Responsive Image" />
                    <div class="overlay"></div>
                    <div className="text Big-heading">
                        <p>

                            <span className="THE">INFOGRAPHICS </span>

                        </p>
                    </div>
                </div>
                <Presidential />
                <Mapview />

                <div className="heading-abroad">
                    <h2>VOTE FROM ABROAD</h2>
                    <div className="AbroadVote"><VoteAbroadleft />
                        <VoteAbroadright /></div>

                </div>
                <Turnout />
                <Footer />
            </div>
        </>
    )
}
export default Infographics
