import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

const SearchBar = (props) => {
  const [restaurant, setRestaurant] = useState('');
  const [postal, setPostal] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Controls pop-up visibility

  const sendDataToFlask = async () => {
    props.setLoading(true);
    setShowPopup(true); // Show pop-up when search starts

    setTimeout(() => {
      setShowPopup(false); // Hide pop-up after 3 seconds
    }, 3000);

    const apiUrl = 'https://reviewify-backend.vercel.app/flask/process_data';

    const requestData = {
      restaurant: restaurant,
      postal: postal,
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      props.setProcessedData(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      props.setLoading(false);
    }
  };

  if (props.loading === true) {
    return <span></span>;
  }

  return (
    <div className="new-search">
      <input
        type="text"
        value={restaurant}
        onChange={(e) => setRestaurant(e.target.value)}
        placeholder="Business Name"
        className="searchInput"
      />
      <input
        type="text"
        value={postal}
        onChange={(e) => setPostal(e.target.value)}
        placeholder="Postal code"
        className="searchInput"
      />
      <button onClick={sendDataToFlask} id="searchButton">Search</button>

      {/* Pop-up Notification */}
      {showPopup && <div className="popup">Try the app</div>}
    </div>
  );
};

export default SearchBar;
