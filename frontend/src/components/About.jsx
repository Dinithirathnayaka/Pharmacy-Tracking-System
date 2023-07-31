import React from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container-fluid about-main-container">
        <div className="container about">
          {/* about heading */}
          <div className="about-heading">
            <h1>ABOUT</h1>
          </div>
          {/* End of about heading */}

          {/* card container */}
          <div className="card border-light mb-3 about-card-container">
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
      <div className="footer">
        <div className="container pt-3 pb-3">
          {" "}
          <div className="row">
            <div className="col-md-2 col-xs-12 p-2">
              <div className="footerlogo mx-auto d-block text-center mt-5">
                {" "}
                <img
                  className="img-fluid"
                  style={{ width: "100px" }}
                  src="assets/images/pts_logo.png"
                  alt="PTS"
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 p-2">
              {" "}
              <h5>ABOUT US</h5>
              <div className="mb-3" style={{ fontWeight: "600" }}>
                We help you to ensure that you have access to the medications
                you require to lead a healthy and fulfilling life.If you join
                hand with us you can get amazing services from us.
              </div>
              <div className="followus">
                <FaTwitter className="followicon" />
                <FaFacebook className="followicon" />
                <FaInstagram className="followicon" />
              </div>
            </div>

            <div className="col-md-3 col-xs-12 p-2">
              {" "}
              <h5>SERVICES</h5>
              <div className="mb-2 text-bold" style={{ fontWeight: "600" }}>
                Search Medicine
              </div>
              <div className="mb-2" style={{ fontWeight: "600" }}>
                Find Pharmacy
              </div>
              <div className="mb-2" style={{ fontWeight: "600" }}>
                Meet Doctor
              </div>
            </div>

            <div className="col-md-3 col-xs-12 p-2">
              <h5>HAVE A QUESTIONS?</h5>
              <div className="mb-2">
                <FaMapMarkerAlt className="contacticon" />
                <span style={{ fontWeight: "600" }}>
                  203 Fake St. Mountain View, USA
                </span>
              </div>
              <div className="mb-2">
                <FaPhone className="contacticon" />
                <span style={{ fontWeight: "600" }}>+2 392 3929 210</span>
              </div>
              <div className="mb-2">
                <MdEmail className="contacticon" />
                <span style={{ fontWeight: "600" }}>pts@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ fontWeight: "600" }}>
          ©2023 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default About;
