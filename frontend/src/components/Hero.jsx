import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copy">
                <div className="text-label">Lorem ipsum dolor sit amet</div>
                <div className="text-hero-bold">
                  The best way to keep track of your health.
                </div>
                <div className="text-hero-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique soluta harum cupiditate
                </div>
                <Link to="/register" className="btn btn-primary shadow-none">
                  SIGN UP
                </Link>
              </div>
            </div>

            <div
              className="col-md-6 text-center hero-img"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                className="img-fuid"
                src="assets/images/heart-care.png" //blood-pressure-3312513.svg //hero_img.png
                alt=""
              />
            </div>
          </div>
        </div>

        <Outlet />
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

export default Hero;
