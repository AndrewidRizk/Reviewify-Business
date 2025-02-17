import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

const SearchBar = (props) => {
  const [restaurant, setRestaurant] = useState('');
  const [postal, setPostal] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Controls pop-up visibility

  const sendDataToFlask = async () => {
    // Indicate loading status
    props.setLoading(true);
    
    // Show pop-up immediately when search starts
    setShowPopup(true);

    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // API endpoint
    const apiUrl = 'https://reviewify-backend.vercel.app/flask/process_data';

    // Data to be sent
    const requestData = {
      restaurant: restaurant,
      postal: postal,
    };

    try {
      // Sending the POST request
      const response = await axios.post(apiUrl, requestData);
      // Handling the response
      props.setProcessedData(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Reset loading status
      props.setLoading(false);
    }
  };

  // If the component is in a loading state, don't show the search bar
  if (props.loading === true) {
    return <span></span>;
  }

  return (
    <div className="new-search">
      {/* Input for restaurant name */}
      <input
        type="text"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
        placeholder="Business Name"
        className="searchInput"
      />
      {/* Input for postal code */}
      <input
        type="text"
        value={postal}
        onChange={(e) => setPostal(e.target.value)}
        placeholder="Postal code"
        className="searchInput"
      />
      {/* Search button triggers the API call and pop-up */}
      <button onClick={sendDataToFlask} id="searchButton">Search</button>

      {/* Conditionally rendered pop-up notification */}
      {showPopup && <div className="popup">Try the app</div>}
    </div>
  );
};

export default SearchBar;
