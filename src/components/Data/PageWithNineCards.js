// PageWithNineCards.js
import React from "react";
import DataSection from "./DataSection";
import data from './Data'
const PageWithNineCards = () => {
 
  const showSeeMore = true;
  return (
   
    <div className="p-9">
      
      <DataSection cardCount={9} data={data} showSeeMore={showSeeMore} />
    </div>
  );
};

export default PageWithNineCards;
