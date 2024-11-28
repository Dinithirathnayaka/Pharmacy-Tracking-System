import React, { useRef } from "react";
import ContactCSS from "./Contact.module.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlrwq1d",
        "template_qgkmy1m",
        form.current,
        "a9qbBsw5rs8O0KvVr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message: " + error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <div
        className={`container-fluid ${ContactCSS["contact-main-container"]}`}
        id="contact"
      >
        <div className={`container ${ContactCSS["contact"]}`}>
          <div className={ContactCSS["contact-heading"]}>
            <h1>CONTACT US</h1>
          </div>

          <div
            className={`card border-light mb-3 ${ContactCSS["contact-card-container"]}`}
          >
            <p className="text-center mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className={`row ${ContactCSS["main-form-container"]}`}>
              <div
                className={`col-md-9 mb-5 mx-auto ${ContactCSS["form-container"]}`}
              >
                <form
                  className={`form mt-5 ${ContactCSS["form-content"]}`}
                  id="contact-form"
                  name="contact-form"
                  ref={form}
                  onSubmit={sendEmail}
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
                    <button type="submit" className={`btn btn-primary ${ContactCSS["btn-contact"]}`}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
