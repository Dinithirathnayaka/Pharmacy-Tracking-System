import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { GrFormPrevious } from "react-icons/gr";
import "../Styles/Reset.css";

export const Reset = () => {
  return (
    <div className="reset-container">
      <div className="reset">
        {" "}
        <img
          src="assets/images/reset-password.png"
          alt="Reset icon"
          className="resetimg"
        />
        <h5 className="user-reset">RESET PASSWORD</h5>
        <Form className="reset-form">
          <div className="emailcon">
            <HiMail className="emailicon" />
            <input type="email" placeholder="Email address" className="email" />
          </div>

          <br />
          <p>Enter your email & we'll send you a link to reset your password</p>
          <input type="submit" value="SUBMIT" className="submitbtn" />
        </Form>
        <div className="back">
          <GrFormPrevious className="backicon" />
          <p className="backsign">Back to sign in</p>
        </div>
      </div>
    </div>
  );
};
