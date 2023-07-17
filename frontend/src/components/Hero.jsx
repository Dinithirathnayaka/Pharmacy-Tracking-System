import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
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
  );
};

export default Hero;
