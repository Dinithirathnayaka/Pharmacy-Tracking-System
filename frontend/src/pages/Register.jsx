import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

import "../Styles/Register.css";

export const Register = () => {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [confirmpass, setConfirmpass] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  return (
    <div className="register-container">
      <div className="register">
        <img
          src="assets/images/register.jpeg"
          alt="user icon"
          className="registerimg"
        />
        <h5 className="create-account">CREATE AN ACCOUNT</h5>
        <Form className="register-form">
          <div className="emailconreg">
            <HiMail className="emailicon" />
            <input
              type="email"
              placeholder="Email address"
              className="emailreg"
            />
          </div>
          <br />
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Password"
              className="passwordreg"
            />
          </div>{" "}
          <br />
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Confirm password"
              className="passwordconfirmreg"
            />
          </div>
          <br />
          <input type="submit" value="SUBMIT" className="registerbtn" />
          <br />
        </Form>

        <Link
          to="/pharmacistregister"
          className="register-pharmacist"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          Register as a pharmacist
        </Link>
      </div>
    </div>
  );
};
