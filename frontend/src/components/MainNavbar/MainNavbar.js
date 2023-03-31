import React from "react";
import navLogo from "../images/pts_logo.png";
import { NavLink, Link, Outlet } from "react-router-dom";

const MainNavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              style={{ width: "60px" }}
              src={navLogo}
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
            <div className="navbar-nav ms-auto">
              <NavLink to="/main/" className="nav-link" aria-current="page">
                HOME
              </NavLink>
              <NavLink to="stock" className="nav-link">
                STOCK DETAILS
              </NavLink>
              <NavLink to="locate" className="nav-link">
                LOCATE US
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default MainNavBar;
