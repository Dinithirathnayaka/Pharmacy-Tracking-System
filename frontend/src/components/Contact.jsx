import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="container">
        <section className=" contact-heading">
          <h1>CONTACT US</h1>

          <p className="text-center mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9  mb-5 mx-auto">
              <form
                className="mt-5"
                id="contact-form"
                name="contact-form"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-4">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Enter the subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-4">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-md-left mb-2">
                  <a className="btn btn-primary">Send</a>
                </div>
              </form>
            </div>
          </div>
        </section>
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
}

export default Contact;
