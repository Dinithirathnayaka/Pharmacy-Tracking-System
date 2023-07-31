import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="container services">
        {/* Service heading */}
        <div className="services-heading">
          <h1>SERVICES</h1>
        </div>

        {/* Services card container */}
        <div className="row row-cols-1 row-cols-md-3 g-5 card-container mb-3">
          <div className="col">
            <div className="card h-100 text-center shadow service-card">
              <img
                src="assets/images/research.png"
                className="card-img-top mx-auto d-block"
                alt="SEARCH MEDICINE"
              />
              <div className="card-body">
                <h5 className="card-title">SEARCH MEDICINE</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer ">
                <button className="btn btn-primary">Learn more</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow service-card">
              <img
                src="assets/images/gps.png"
                className="card-img-top mx-auto d-block"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">FIND PHARMACY</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer ">
                <button className="btn btn-primary">Learn more</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center shadow service-card">
              <img
                src="assets/images/doctor.png"
                className="card-img-top mx-auto d-block"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">MEET DOCTOR</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <div className="card-footer ">
                <button className="btn btn-primary">Learn more</button>
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

export default Services;
