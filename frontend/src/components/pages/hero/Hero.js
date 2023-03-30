import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero_img from "../../images/hero_img.png";

const Hero = () => {
  return (
    <div>
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
                <NavLink href="#" className="btn btn-primary shadow-none">
                  SIGN UP
                </NavLink>
              </div>
            </div>

            <div
              className="col-md-6 text-center hero-img"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img className="img-fuid" src={Hero_img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Hero;
