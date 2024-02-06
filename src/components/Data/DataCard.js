import React, { useState, useEffect } from 'react';
import './DataCard.css';

function DataCard() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const [loading, setLoading] = useState(true);
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [showSecondContent, setShowSecondContent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [text, setText] = useState('');

  const handleShowFirst = () => {
    setShowFirstContent(true);
    setShowSecondContent(false);
  };

  const searchClick = () => {
    setSearchQuery(text);
  }

  const handleShowSecond = () => {
    setShowFirstContent(false);
    setShowSecondContent(true);
  };
  const handleSearchChange = (event) => {
    // setSearchQuery(event.target.value);
    setText(event.target.value);
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    Presidential: true,
    Parliamentary: false,
  });
  const [selectedCheckboxes1, setSelectedCheckboxes1] = useState({
    PollingStation: false,
    Country: true,
    Region: false,
    District: false,
    Constituency: false,
    State: false,
  });


  useEffect(() => {
    // Define the API URL
    const url = "https://african-election-server-mkkk.vercel.app:443/search_election_bystate";
//    const url = "http://localhost:443/search_election_bystate";

    // Define the fetch options
    let options={};
//    !selectedCheckboxes.Presidential && !selectedCheckboxes.Parliamentary

    let ElectionSizeArray = [];
    let ElectionTypeArray = [];
    if(selectedCheckboxes.Presidential)
      ElectionTypeArray.push("Presidential");     
    if(selectedCheckboxes.Parliamentary)
      ElectionTypeArray.push("Parliamentary");     
    if(selectedCheckboxes1.Country)
      ElectionSizeArray.push("Country");
    if(selectedCheckboxes1.Region)
      ElectionSizeArray.push("Region");
    if(selectedCheckboxes1.District)
      ElectionSizeArray.push("District");
    if(selectedCheckboxes1.Constituency)
      ElectionSizeArray.push("Constituency");

    if(showSecondContent) {
      options.Election_size = ElectionSizeArray;
    }
    if(showFirstContent) {
      options.Election_type = ElectionTypeArray;
    }
    if(searchQuery) {
      options.Comment = searchQuery;
    }
    
    console.log("e==================step==========")
    console.log(options);
    console.log("e==================step==========")

    
  
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
       body: JSON.stringify(options)
    };

    // Fetch the data
    fetch(url, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        if(showFirstContent)
          setData(jsonData);
        if(showSecondContent)
          setData1(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error occurred:", error);
        setLoading(false);
      });
  }, [selectedCheckboxes1, selectedCheckboxes, searchQuery]); // The empty array as a second argument ensures this effect runs only once

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckboxes({
      ...selectedCheckboxes,
      [checkboxName]: !selectedCheckboxes[checkboxName],
    });
  };
  const handleCheckboxChange1 = (checkboxName) => {
    setSelectedCheckboxes1({
      ...selectedCheckboxes1,
      [checkboxName]: !selectedCheckboxes1[checkboxName],
    });
  };

  const filteredData = data.filter(item => {
    if ((selectedCheckboxes.Presidential && selectedCheckboxes.Parliamentary) || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if (
      (selectedCheckboxes.Presidential && item.Election_type === 'Presidential') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase())) // Search query matches content
    ) {
      return true;
    }
    if ((selectedCheckboxes.Parliamentary && item.Election_type === 'Parliamentary') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    // if (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase())) {
    //   return true;
    // }
    return false;
  });

  const filteredData1 = data.filter(item => {
    if (
      selectedCheckboxes1.PollingStation &&
      selectedCheckboxes1.Country &&
      selectedCheckboxes1.Region &&
      selectedCheckboxes1.District &&
      selectedCheckboxes1.Constituency &&
      selectedCheckboxes1.State
    ) {
      return true;
    }
    if ((selectedCheckboxes1.PollingStation && item.Election_Size === 'polling station') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if ((selectedCheckboxes1.Country && item.Election_Size === 'country') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if ((selectedCheckboxes1.Region && item.Election_Size === 'region') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if ((selectedCheckboxes1.District && item.Election_Size === 'district') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if ((selectedCheckboxes1.Constituency && item.Election_Size === 'constituency') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }
    if ((selectedCheckboxes1.State && item.Election_Size === 'state') || // "Presidential" checkbox is selected and item is of type "Presidential"
      (searchQuery && item.Content.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return true;
    }

    return false;
  });


  return (
    <>
      <div className="Home">
        <div className="How-To-Vote">
          {/* <div className="cont">
            <p>HOW</p>
            <p>WE</p>
            <p>VOTED IN</p>
            <p className="year">2023</p>
          </div> */}
          <div className="search" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search here"
              value={text}
              onChange={handleSearchChange}
              // style={{ marginRight: '20px' }}
            />
            <button style={{ marginTop: '20px' }} onClick={searchClick}>
              Search
            </button>
          </div>                             
        </div>
      </div>
      <div className='major-card'>
        <button className={showFirstContent ? 'active-button' : 'inactive-button'} onClick={handleShowFirst}>All Datasets</button>
        <button className={showSecondContent ? 'active-button' : 'inactive-button'} onClick={handleShowSecond}>All Units</button>
        {showFirstContent && <div id='first' className="check-boxes">
          <p>
            <label>
              <input
                type="checkbox"
                checked={selectedCheckboxes.Presidential}
                onChange={() => handleCheckboxChange('Presidential')}
              />
              Presidential
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                checked={selectedCheckboxes.Parliamentary}
                onChange={() => handleCheckboxChange('Parliamentary')}
              />
              Parliamentary
            </label>
          </p>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="card-container">
              {data.map((item) => (
                <a href={item.Link} key={item.id} className="data-card">
                  <h2>{item.Date}</h2>
                  <h1>{item.Name}</h1>
                  <p>{item.Content}</p>
                </a>
              ))}
            </div>
          )}
        </div>}
        {showSecondContent &&
          <div id='second' className="check-boxes">
            
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckboxes1.Country}
                  onChange={() => handleCheckboxChange1('Country')}
                />
                country
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckboxes1.Region}
                  onChange={() => handleCheckboxChange1('Region')}
                />
                region
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckboxes1.District}
                  onChange={() => handleCheckboxChange1('District')}
                />
                district
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckboxes1.Constituency}
                  onChange={() => handleCheckboxChange1('Constituency')}
                />
                constituency
              </label>
            </p>
            


            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="card-container two">
                {data1.map((item) => (
                  <div key={item.id} className="data-card">
                    <h2>{item.Date}</h2>
                    <h1>{item.Name}</h1>
                    <p>{item.Content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>}



      </div>
    </>
  );
}

export default DataCard;
