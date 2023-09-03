import React from "react";

import Footer from "../Footer/Footer";

import ServicesCSS from "./Services.module.css";

const Services = () => {
  return (
    <>
      <div className={`container ${ServicesCSS["services"]}`} id="services">
        {/* Service heading */}
        <div className={ServicesCSS["services-heading"]}>
          <h1>SERVICES</h1>
        </div>

        {/* Services card container */}
        <div
          className={`row row-cols-1 row-cols-md-3 g-5 mb-3 ${ServicesCSS["card-container"]} `}
        >
          <div className="col">
            <div
              className={`card h-100 text-center shadow ${ServicesCSS["service-card"]}`}
            >
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
                src="assets/images/doctorBalck.png"
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
    </>
  );
};

export default Services;
