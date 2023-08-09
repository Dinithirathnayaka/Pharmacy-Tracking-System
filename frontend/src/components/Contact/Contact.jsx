import React from "react";

import ContactCSS from "./Contact.module.css";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <div className="container">
        <section className={ContactCSS["contact-heading"]}>
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
      <Footer />
    </>
  );
}

export default Contact;
