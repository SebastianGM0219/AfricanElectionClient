import React from "react"
import '../../style/Home.css'
import reactangle from '../../assets/images/Rectangle 34.png';
import elipse from '../../assets/images/Ellipse 5.png';
import news from '../../assets/images/NEWS  TEXT.png';
import newsbox from '../../assets/images/news-box.png'

const News = () => {
    return (
        <>
            <div className="news">
            <div className="data-heading">
                <span></span>
                <h3>News</h3>
                <span></span>
            </div>
                <div class="container1">
                    <img class="left-image" src={elipse} alt="Left Image" />
                    <img class="center-image" src={reactangle} alt="Center Image" />
                    <img class="right-image" src={news} alt="Right Image" />
                    <div class="content">
                       
                        <div className="cnter-c"> <div className="content-flex">
                            <h2>Accountability, soul of good governance</h2>
                            <p>The ominous state of Ghana’s current economy is well known, but for the sake of those who may be reading this in 2030 and beyond, let me name a few indicators: Currency ranked the worst in the world in October 2022; debt to Gross Domestic Product (GDP) ratio over a hundred per cent; default on sovereign debt; and cup in hand at the International Monetary Fund (IMF) for a pittance of debt relief mo (C) 2021 Tingane Foundation. All Rights Reserved</p>
                             <button>Recnt News</button>
                        </div>
                        <div className="img">
                            <img src={newsbox}  />
                        </div></div>
                       

                    </div>
                </div>
            </div>
        </>
    )
}
export default News