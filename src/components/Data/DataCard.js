// DataCard.js
import React from "react";
import '../../style/Home.css'
const DataCard = ({ data }) => {
  return (
    <>
    

      <div className="data-card">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </>

  );
};

export default DataCard;
