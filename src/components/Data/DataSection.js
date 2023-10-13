// DataSection.js
import React, { useState } from "react";
import DataCard from "./DataCard";
import '../../style/Home.css'
const DataSection = ({ cardCount, data, showSeeMore }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleData = showAll ? data : data.slice(0, cardCount);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <div className="data-heading">
                <span></span>
                <h3>Data</h3>
                <span></span>
            </div><div className="data-card-container">
                {visibleData.map((item) => (
                    <DataCard key={item.id} data={item} />
                ))}
                {showSeeMore && !showAll && data.length > cardCount && (
                  <div> <button onClick={toggleShowAll}>See More</button></div>  
                )}
            </div></>

    );
};

export default DataSection;
