import React from "react";
import navLogo from "../images/pts_logo.png";
import { NavLink, Outlet } from "react-router-dom";

const StarterNavBar = () => {
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
              <NavLink to="/" className="nav-link" aria-current="page" href="#">
                HOME
              </NavLink>
              <NavLink to="services" className="nav-link" href="#">
                SERVICES
              </NavLink>
              <NavLink to="about" className="nav-link" href="#">
                ABOUT
              </NavLink>
              <NavLink to="contact" className="nav-link" href="#">
                CONTACT
              </NavLink>
            </div>
            <NavLink href="#" className="btn btn-primary shadow-none">
              SIGN IN
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default StarterNavBar;
