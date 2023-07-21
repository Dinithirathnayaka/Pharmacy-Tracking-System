import React from "react";
import TitleBar from "./TitleBar";
import contactUs from "./images/contact-us.png";

const Locate = () => {
  return (
    <>
      <TitleBar
        titlePic={contactUs}
        title="Locate Us"
        description="Find where we are"
      />
      {/* <div className="mb-1 h-25 search-container">
        <div className="container search-container-block">
          <div className="search-input-container">
            <input id="searchInput" type="text" placeholder="Search here..." />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Locate;
