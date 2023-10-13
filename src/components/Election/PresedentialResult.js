import React from 'react';
import ReactApexChart from 'react-apexcharts';

import Image1 from '../../assets/images/Ellipse 5.png';

const items = [
  {
    id: 1,
    NumberofVotes: "12345 vote",
    percentage: 80,
    perClassName: "per1",
    backGroundColor: "item1",
    marker: {
      image: require("../../assets/images/people.png"),
      label: 'Party Name 1',
      text: 'Completed',
    },
  },
  {
    id: 2,
    NumberofVotes: "12145 vote",
    percentage: 70,
    perClassName: "per2",
    backGroundColor: 'item2',
    marker: {
      image: require("../../assets/images/people.png"),
      label: 'Party Name 2',
      text: 'Halfway',
    },
  },
  {
    id: 3,
    NumberofVotes: "12145 vote",
    percentage: 60,
    perClassName: "per3",
    backGroundColor: 'item3',
    marker: {
      image: require("../../assets/images/people.png"),
      label: 'Party Name 3',
      text: 'Halfway',
    },
  },
  {
    id: 4,
    NumberofVotes: "12045 vote",
    percentage: 50,
    perClassName: "per4",
    backGroundColor: 'item4',
    marker: {
      image: require("../../assets/images/people.png"),
      label: 'Party Name 4',
      text: 'Halfway',
    },
  },
  {
    id: 5,
    NumberofVotes: "10345 vote",
    percentage: 40,
    perClassName: "per5",
    backGroundColor: 'item5',
    marker: {
      image: require("../../assets/images/people.png"),
      label: 'Party Name 5',
      text: 'Halfway',
    },
  },

];

const Presidential = () => {
  return (
    <>
      <div className="progress-container">
        <h2>Presidential Elections Result</h2>       {items.map((item, id) => (
          <div key={id} className="progress-item">

            <div className="progress-bar">
              <div
                className={`filled-bar ${item.backGroundColor}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
              {item.marker && (
                <><span className="label">{item.marker.label}</span>
                  <div style={{ left: `${item.percentage - 3}%` }} className="marker">

                    <img src={item.marker.image} alt={item.marker.text} />


                  </div>
                  <div style={{marginLeft: `${item.percentage}`}} className="spans">
                    <span className={`${item.perClassName}`}>{item.percentage}%</span>
                    <span className='vo'>{item.NumberofVotes}</span>
                  </div></>

              )}
            </div>
          </div>
        ))}
      </div></>
  )
};

export default Presidential;
