import { Link as RouterLink, NavLink } from "react-router-dom";
import pts_logo from "../images/pts_logo.png";
import { Person, Chat, Notifications } from "@mui/icons-material";
import NavbarCSS from "./Navbar.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link as ScrollLink } from "react-scroll";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Navbar = () => {
  const { user } = useAuthContext();

  const navbarClassName = user
    ? NavbarCSS["fixed-navbar"]
    : ` ${NavbarCSS["main-navbar"]}`;

  return (
    <div>
      <header>
        <nav className={`navbar shadow navbar-expand-lg  ${navbarClassName}`}>
          <div className="container-fluid">
            <button
              className={`navbar-toggler ${NavbarCSS["toggle-button"]}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <i className="bx bx-menu"></i>
            </button>

            <a className="navbar-brand" href="#">
              <img
                className={`img-fluid ${NavbarCSS["navbar-img"]}`}
                style={{ width: "60px" }}
                src={pts_logo}
                alt="PTS"
              />
            </a>

            {user && (
              <div className={NavbarCSS["profileDropdownContainer"]}>
                <ProfileDropdown />
              </div>
            )}

            {user && (
              <div className="collapse navbar-collapse" id="navbarNav">
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
                  {user.role === "pharmacist" && (
                    <NavLink
                      to="stockdetails"
                      className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                    >
                      STOCK DETAILS
                    </NavLink>
                  )}
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

            <div
              className={`offcanvas offcanvas-start d-lg-none ${NavbarCSS["offcanvasNavbar"]}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img
                    className="img-fluid"
                    style={{ width: "60px" }}
                    src={pts_logo}
                    alt="PTS"
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                {!user && (
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
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
                    </li>
                    <li className="nav-item">
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
                      <a
                        style={{
                          width: "100%",
                        }}
                        href="/login"
                        className="btn btn-primary shadow-none"
                      >
                        SIGN IN
                      </a>
                    </li>
                  </ul>
                )}

                {user && (
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                        aria-current="page"
                      >
                        HOME
                      </NavLink>
                    </li>
                    {user.role === "pharmacist" && (
                      <li className="nav-item">
                        <NavLink
                          to="stockdetails"
                          className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                        >
                          STOCK DETAILS
                        </NavLink>
                      </li>
                    )}
                    <li>
                      <NavLink
                        to="locate"
                        className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                      >
                        LOCATE US
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="viewdoctor"
                        className={`nav-link nav-link-item ${NavbarCSS["nav-link-item"]}`}
                      >
                        VIEW DOCTOR
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
