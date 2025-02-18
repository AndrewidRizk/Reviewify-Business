import React, { useEffect, useState } from "react"; 
import "./Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

const SearchBar = (props) => {
  const [restaurant, setRestaurant] = useState('');
  const [postal, setPostal] = useState('');
  const [showPopup, setShowPopup] = useState(true); // Show pop-up initially

  const sendDataToFlask = async () => {
    props.setLoading(true);
    setShowPopup(false); // Hide pop-up when search starts

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

  // Function to auto-fill search fields and trigger search
  const handleTryNow = () => {
    setRestaurant("McDonalds");
    setPostal("L8P4W3");
    
    // Delay search execution to allow state update
    setTimeout(() => {
      sendDataToFlask();
    }, 500);
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
      {showPopup && (
        <div className="popup">
          <p>Try the App</p>
          <button onClick={handleTryNow}>Try Now</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
