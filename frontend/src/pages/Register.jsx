import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import "../Styles/Register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const { signup, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };
  return (
    <div className="register-container">
      <div className="register">
        <img
          src="assets/images/register.jpeg"
          alt="user icon"
          className="registerimg"
        />

        <Form className="register-form" onSubmit={handleSubmit}>
          <div className="emailconreg">
            <HiMail className="emailicon" />
            <input
              type="email"
              placeholder="Email address"
              className="emailreg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <br />
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Password"
              className="passwordreg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>{" "}
          <br />
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Confirm password"
              className="passwordconfirmreg"
              onChange={(e) => setConfirmpassword(e.target.value)}
              value={confirmpassword}
            />
          </div>
          {/* <input type="submit" value="SUBMIT" className="registerbtn" /> */}
          <button disabled={isLoading} className="registerbtn">
            Sign up
          </button>
          {error && <div className="error">{error}</div>}
        </Form>

        <div className="registerperson">
          <a
            href="/pharmacistregister"
            className="register-pharmacist"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Register as a Pharmacist
          </a>

          <a
            href="/registerdoctor"
            className="register-doctor"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Register as a Doctor
          </a>
        </div>
      </div>
    </div>
  );
};
