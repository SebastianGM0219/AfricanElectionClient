import React, { useState, useEffect } from 'react';
import './DataCard.css'

function DataCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const url = "http://ec2-35-171-83-50.compute-1.amazonaws.com:443/search_election_bystate";

    // Define the fetch options
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error occurred:", error);
        setLoading(false);
      });
  }, []); // The empty array as a second argument ensures this effect runs only once

  return (
    <div>
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-container">
          {data.map((item) => (
            <div key={item.id} className="data-card">
              <h2>{item.Date}</h2>
              <h1>{item.Name}</h1>
              <p>{item.Content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataCard;
