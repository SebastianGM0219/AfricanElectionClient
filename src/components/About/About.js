import React from "react"
import '../../style/About.css'
import Voteimg from '../../assets/images/VOTED.png'
import Aboutimg from '../../assets/images/About.png'
import new2 from '../../assets/images/2.jpeg';
import { Link } from 'react-router-dom';
const About =()=>{
    return(
        <>
        
      <div className="About">
        <div className="About-images">
            <div className="About-image-relative">
                <img className="voted-img" src={Voteimg}  />
                <img className="About-image-absolute" src={new2}  />
            </div>
            
            
        </div>
        <div className="About-text">
            <h3>THE AFRICA ELECTIONS PLACE</h3>
            <p>Democracy has emerged from its 2,000-year pariah in the political wilderness as the most plausible form of government that is dependably committed to serving the interests of the governed and is accountable to them over time. This has resulted in peace, prosperity, and good order across many regions of the world. As most African countries are still emerging from their post-independence political instability and now preferring democracy as their form of government, it is important for them to have the support systems in the form of data and scientific studies that would ensure their stability, probity, and continuity.</p>
            <Link to="/news"><button>READ MORE</button></Link>
        </div>

      </div>
        </>
    )

}
export default About