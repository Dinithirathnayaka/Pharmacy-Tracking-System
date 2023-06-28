import React from "react";

const About = () => {
  return (
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
                  <button className="btn btn-primary">Visit our main page</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
