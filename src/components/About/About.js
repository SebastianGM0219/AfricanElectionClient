import React from "react"
import '../../style/About.css'
import Voteimg from '../../assets/images/VOTED.png'
import Aboutimg from '../../assets/images/About.png'
import new2 from '../../assets/images/2.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const About =()=>{
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
    const imageStyles = {
        float: 'left',
        marginRight: '10px', // Example of additional styling
      };
    return(
        <>
        
      <div className="About">
        {/* <div className="About-images"> */}
                {/* <img className="voted-img" src={Voteimg}  /> */}
                <img style={{ float: 'left', marginRight: '0px' }} className="About-image-absolute" src={new2} />
            
        {/* </div> */}
        <div className="About-text" style={{ overflow: 'hidden', marginLeft: '45%', paddingTop: '10%' }}>
            <h3>THE AFRICA ELECTIONS PLACE</h3>
            <p>
                Democracy has emerged from its 2,000-year pariah in the political wilderness as the most plausible form of government that is dependably committed to serving the interests of the governed and is accountable to them over time. This has resulted in peace, prosperity, and good order across many regions of the world. As most African countries are still emerging from their post-independence political instability and now preferring democracy as their form of government, it is important for them to have the support systems in the form of data and scientific studies that would ensure their stability, probity, and continuity.
            </p>
            {expanded && ( // Render the expanded text when 'expanded' is true
                <div id="expanded-friend">
                <p>
                Democracy has emerged from its 2,000-year pariah in the political wilderness as the most plausible form of government that is dependably committed to serving the interests of the governed and is accountable to them over time. This has resulted in peace, prosperity, and good order across many regions of the world. As most African countries are still emerging from their post-independence political instability and now preferring democracy as their form of government, it is important for them to have the support systems in the form of data and scientific studies that would ensure their stability, probity, and continuity.
                </p>
                </div>
            )}           
           <button onClick={toggleExpanded}>{expanded ? 'READ LESS' : 'READ MORE'}</button>
   
        </div>

      </div>
        </>
    )

}
export default About