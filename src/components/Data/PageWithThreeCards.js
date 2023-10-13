// PageWithThreeCards.js
import React from "react";
import DataSection from "./DataSection";
import data from './Data'
import  '../../style/Home.css'
const PageWithThreeCards = () => {
 
    const showSeeMore = false;
  return (
    <div className="PageWithThreeContainer">
     
      <DataSection cardCount={3} data={data}  showSeeMore={showSeeMore} />
    </div>
  );
};

export default PageWithThreeCards;
