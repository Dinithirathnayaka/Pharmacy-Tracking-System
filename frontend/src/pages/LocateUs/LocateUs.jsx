import React, { useState } from "react";
import Map from "../../components/Map/Map";
import LocateCSS from "./LocateUs.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import TitleBar from "../../components/TitleBar";
import contactUs from "../../components/images/contact-us.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LocateUs = () => {
  const [markers, setMarkers] = useState([]);

  const handleSearch = async (searchValue) => {
    // Check if searchValue is empty
    if (!searchValue) {
      toast.error("Search field cannot be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Exit the function early if searchValue is empty
    }

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
        if (newMarkers.length === 0) {
          toast.warn("Locations are not found", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Error fetching data", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <ToastContainer />
    </div>
  );
};

export default LocateUs;
