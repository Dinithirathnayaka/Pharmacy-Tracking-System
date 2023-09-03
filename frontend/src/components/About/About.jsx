import React from "react";
import { NavLink } from "react-router-dom";

import AboutCSS from "./About.module.css";

const About = () => {
  return (
    <>
      <div
        className={`container-fluid ${AboutCSS["about-main-container"]}`}
        id="about"
      >
        <div className={`container ${AboutCSS["about"]}`}>
          <div className={AboutCSS["about-heading"]}>
            <h1>ABOUT</h1>
          </div>

          <div
            className={`card border-light mb-3 ${AboutCSS["about-card-container"]}`}
          >
            <div className="row g-0">
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                  marginRight: "0px",
                }}
                className="col-md-4"
              >
                <img
                  src="assets/images/pts_logo.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div
                  style={{
                    textAlign: "left",
                  }}
                  className="card-body"
                >
                  <h4 className="card-title">
                    We are the leading Pharmacy Tracking Company in Sri Lanka
                  </h4>
                  <p className="card-text">
                    We have been involving in the GPS Tracking industry since
                    2015. During this period, we have gained an immeasurable
                    amount of hands on experience.
                  </p>
                  <div>
                    <NavLink to="/main">
                      {" "}
                      <button className="btn btn-primary">
                        Visit our main page
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
