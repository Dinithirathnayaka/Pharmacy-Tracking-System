import { Link, Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

import HeroCSS from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={HeroCSS["hero"]} id="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={HeroCSS["copy"]}>
                <div className={HeroCSS["text-label"]}>
                  Lorem ipsum dolor sit amet
                </div>
                <div className={HeroCSS["text-hero-bold"]}>
                  The best way to keep track of your health.
                </div>
                <div className={HeroCSS["text-hero-regular"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique soluta harum cupiditate
                </div>
                <a href="/register" className="btn btn-primary shadow-none">
                  SIGN UP
                </a>
              </div>
            </div>

            <div
              className={`col-md-6 text-center ${HeroCSS["hero-img"]}`}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                className="img-fuid"
                src="assets/images/heart-care.png"
                alt="Heart Care"
              />
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Hero;
