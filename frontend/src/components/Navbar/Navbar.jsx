import { Link as RouterLink, NavLink, Outlet } from "react-router-dom";
import pts_logo from "../images/pts_logo.png";
import { Person, Chat, Notifications } from "@mui/icons-material";
import NavbarCSS from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link as ScrollLink } from "react-scroll";

import { useSearchContext } from "../../context/SearchContext";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const { user } = useAuthContext();

  const navbarClassName = user
    ? NavbarCSS["fixed-navbar"]
    : ` ${NavbarCSS["main-navbar"]}`;

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <header>
      <nav className={`navbar shadow navbar-expand-lg  ${navbarClassName}`}>
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

          {user && (
            <div className="collapse navbar-collapse" id="navbarNav">
              <SearchBar onSearch={handleSearch} />

              <div
                style={{ marginRight: "3rem" }}
                className="navbar-nav ms-auto"
              >
                <NavLink
                  to="/"
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                  aria-current="page"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="stockdetails"
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  STOCK DETAILS
                </NavLink>
                <NavLink
                  to="locate"
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  LOCATE US
                </NavLink>
                <NavLink
                  to="viewdoctor"
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  VIEW DOCTOR
                </NavLink>
              </div>

              <div className={NavbarCSS["NavBarIcons"]}>
                <div className={NavbarCSS["NavBarIconItem"]}>
                  <Person />
                  <span className={NavbarCSS["NavBarIconBadge"]}>1</span>
                </div>
                <div className={NavbarCSS["NavBarIconItem"]}>
                  <Chat />
                  <span className={NavbarCSS["NavBarIconBadge"]}>2</span>
                </div>
                <div className={NavbarCSS["NavBarIconItem"]}>
                  <Notifications />
                  <span className={NavbarCSS["NavBarIconBadge"]}>1</span>
                </div>
              </div>
              <ProfileDropdown />
            </div>
          )}

          {!user && (
            <div className="collapse navbar-collapse" id="navbarNav">
              <div
                style={{ marginRight: "4rem" }}
                className="navbar-nav ms-auto"
              >
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500} // Animation duration in milliseconds
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  HOME
                </ScrollLink>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  SERVICES
                </ScrollLink>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  ABOUT
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                >
                  CONTACT
                </ScrollLink>
              </div>

              <div>
                <a href="/login" className="btn btn-primary shadow-none">
                  SIGN IN
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default Navbar;
