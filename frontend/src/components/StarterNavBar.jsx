import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const StarterNavBar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light shadow starter-navbar">
        <div className="container">
          <a className="navbar-brand">
            <img
              className="img-fluid"
              style={{ width: "60px" }}
              src="assets/images/pts_logo.png"
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
              <NavLink to="/" className="nav-link" aria-current="page">
                HOME
              </NavLink>
              <NavLink to="services" className="nav-link">
                SERVICES
              </NavLink>
              <NavLink to="about" className="nav-link">
                ABOUT
              </NavLink>
              <NavLink to="contact" className="nav-link">
                CONTACT
              </NavLink>
            </div>
            <Link to="login" className="btn btn-primary shadow-none">
              SIGN IN
            </Link>
            <div onClick={handleClick}>Log out</div>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default StarterNavBar;
