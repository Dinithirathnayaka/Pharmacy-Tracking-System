import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import pts_logo from "./images/pts_logo.png";
import { Person, Chat, Notifications, Search } from "@mui/icons-material";
import "../Styles/Topbar.css";

const MainNavbar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light main-navbar"
        style={{ backgroundColor: "rgb(0, 94, 255)" }}
      >
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
            <div className="topbarCenter">
              <div className="searchbar">
                <Search className="searchIcon" />
                <input
                  placeholder="Search for friend,post or any video"
                  className="searchInput"
                />
              </div>
            </div>

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

            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <img
              src="/assets/images/person/1.jpg"
              alt=""
              className="topbarImg"
            />
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default MainNavbar;
