import React, { useState } from 'react';
import '../../style/Home.css'
const Election = () => {
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <>
            <div className="Election">
                <div className="data-heading">
                    <span></span>
                    <h3>Election</h3>
                    <span></span>
                </div>
                <div className="button-container">
                    <button
                        className={`toggle-button ${activeButton === 'button1' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('button1')}
                    >
                        All Datasets
                    </button>
                    <button
                        className={`toggle-button ${activeButton === 'button2' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('button2')}
                    >
                        All Units
                    </button>
                </div>
                <div className="content">
                    {activeButton === 'button1' && <div> <ul>
                        <li> Presidential Elections</li>
                        <li>Parliamentary Elections</li></ul></div>}
                    {activeButton === 'button2' && <div> <ul>
                        <li>By Polling Station</li>
                        <li>By Constituency</li>
                        <li>By District</li>
                        <li>By Region</li>
                        <li>By Country</li></ul></div>}

                </div>

            </div>

        </>
    )
}
export default Election