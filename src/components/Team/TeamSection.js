import React from "react";
import "../../style/Home.css"

const TeamSection = ({ teamData }) => {
    return (
        <><div className="data-heading">
            <span></span>
            <h3>People</h3>
            <span></span>
        </div> <div className="team-section">
                <div className="team-section-card">
                    {teamData.map((member) => (
                        <div className="team-member" key={member.id}>
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                            
                        </div>
                    ))}
                </div>

            </div></>

    );
};

export default TeamSection;
