import React, { useState } from "react";
import Map from "../../components/Map/Map";
import LocateCSS from "./LocateUs.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import TitleBar from "../../components/TitleBar";
import contactUs from "../../components/images/contact-us.png";

const LocateUs = () => {
  const [markers, setMarkers] = useState([]);

  // Function to set markers based on search results
  const handleSearch = async (searchValue) => {
    try {
      // Make an API request to fetch pharmacy locations
      const response = await fetch(
        `/api/search/pharmacy-locations/${searchValue}`
      );

      if (response.ok) {
        const data = await response.json();
        // Extract coordinates from the API response
        const newMarkers = data.map((result) => ({
          lat: result.location.coordinates[0],
          lng: result.location.coordinates[1],
          pharmacyName: result.pharmacyName,
        }));
        setMarkers(newMarkers); // Update the markers state
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={LocateCSS["locateus-container"]}>
      <TitleBar
        titlePic={contactUs}
        title="Locate Us"
        description="Find where we are"
      />
      <div
        className="container-fluid"
        style={{
          width: "100%",
          overflow: "hidden",
          margin: 0,
          padding: 0,
          position: "relative",
        }}
      >
        <div className={LocateCSS["search-bar"]}>
          <SearchBox onSearch={handleSearch} />
        </div>
        <Map markers={markers} />
      </div>
    </div>
  );
};

export default LocateUs;
