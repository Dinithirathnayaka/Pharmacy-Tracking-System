import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import ForgotpasswordCSS from "./ForgotPassword.module.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the /forgot-password endpoint with the email
      const response = await fetch("/api/user/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Email sent successfully
        setMessage(data.message);
      } else {
        // Error occurred
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <div className={ForgotpasswordCSS["reset-container"]}>
      <div className={ForgotpasswordCSS["reset"]}>
        {" "}
        <img
          src="assets/images/reset-password.png"
          alt="Reset icon"
          className={ForgotpasswordCSS["resetimg"]}
        />
        <h5 className={ForgotpasswordCSS["user-reset"]}>FORGOT PASSWORD</h5>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form
          className={ForgotpasswordCSS["reset-form"]}
          onSubmit={handleSubmit}
        >
          <div className={ForgotpasswordCSS["emailcon"]}>
            <HiMail className={ForgotpasswordCSS["emailicon"]} />
            <input
              type="email"
              placeholder="Email address"
              className={ForgotpasswordCSS["email"]}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <Button type="submit">Submit</Button>
        </Form>
        <div className={ForgotpasswordCSS["back"]}>
          <GrFormPrevious className={ForgotpasswordCSS["backicon"]} />
          <Link to="/login" className={ForgotpasswordCSS["noaccount"]}>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
