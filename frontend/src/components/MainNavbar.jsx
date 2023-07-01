import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import pts_logo from './images/pts_logo.png';

const MainNavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
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
            <div style={{ marginRight: "4rem" }} className="navbar-nav ms-auto">
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
            <Link to="sign_out" className="btn btn-primary shadow-none">
              SIGN OUT
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default MainNavBar;