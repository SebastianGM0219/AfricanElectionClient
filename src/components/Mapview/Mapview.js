import React from "react";
import map from '../../assets/images/MAP.png'
const Mapview =()=>{
    return(
        <>
        <div className="mapview">
            <h2>MAP VIEW</h2>
            <div className="mapviewdiv">
                <h2>TOTAL NUMBER OF <span>STATE</span> 54</h2>
                <img src={map} alt="" />
            </div>
        </div>
        </>
    )
}
export default Mapview