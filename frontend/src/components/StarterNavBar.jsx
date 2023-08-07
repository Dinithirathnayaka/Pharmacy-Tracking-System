import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const StarterNavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
            {/* {user && (
              <div onClick={handleClick}>
                <span style={{ color: "#000000" }}>{user.email}</span>
                <button>Log out</button>
              </div>
            )}

            {!user && (
              <div>
                <Link to="login" className="btn btn-primary shadow-none">
                  SIGN IN
                </Link>
              </div>
            )} */}

            <div onClick={handleClick}>
              <button>Log out</button>
            </div>
            <div>
              <Link to="login" className="btn btn-primary shadow-none">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default StarterNavBar;
