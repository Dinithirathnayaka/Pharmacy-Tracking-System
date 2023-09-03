import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import pts_logo from "./images/pts_logo.png";
import { Person, Chat, Notifications } from "@mui/icons-material";
import "../Styles/MainNavBar.css";
import SearchBar from "./SearchBar";

import { useSearchContext } from "../context/SearchContext";

const MainNavbar = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <header>
      <nav className="navbar shadow navbar-expand-lg main-navbar">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              className="img-fluid"
              style={{ width: "60px" }}
              src={pts_logo}
              alt="PTS"
            />
          </a>

          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <SearchBar onSearch={handleSearch} />

            <div style={{ marginRight: "3rem" }} className="navbar-nav ms-auto">
              <NavLink to="/main" className="nav-link" aria-current="page" end>
                HOME
              </NavLink>
              <NavLink to="stock" className="nav-link">
                STOCK DETAILS
              </NavLink>
              <NavLink to="locate" className="nav-link">
                LOCATE US
              </NavLink>
              <NavLink to="viewdoctor" className="nav-link">
                VIEW DOCTOR
              </NavLink>
            </div>

            <div className="mainNavBarIcons">
              <div className="mainNavBarIconItem">
                <Person />
                <span className="mainNavBarIconBadge">1</span>
              </div>
              <div className="mainNavBarIconItem">
                <Chat />
                <span className="mainNavBarIconBadge">2</span>
              </div>
              <div className="mainNavBarIconItem">
                <Notifications />
                <span className="mainNavBarIconBadge">1</span>
              </div>
            </div>
            <NavLink to="editprofile">
              {" "}
              <img
                src="/assets/images/person/1.jpg"
                alt=""
                className="mainNavBarImg"
              />
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default MainNavbar;
