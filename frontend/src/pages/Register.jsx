import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../Styles/Register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useRegister();
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !username) {
      setAllFieldsFilled(false);
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const r = await signup(username, email, password, "patient", {});
      console.log(r);
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setAllFieldsFilled(true);
    } catch (error) {
      console.error("Error during signup:", error);
    }
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
          <div className="usernameconreg">
            <FaUser className="usernameicon" />
            <input
              type="text"
              placeholder="User Name"
              className="usernamereg"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="emailconreg">
            <HiMail className="emailicon" />
            <input
              type="email"
              placeholder="Email address"
              className="emailreg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Password"
              className="passwordreg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>{" "}
          <div className="passconreg">
            <FaLock className="lockiconreg" />
            <input
              type="password"
              placeholder="Confirm password"
              className="passwordconfirmreg"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>
          <button disabled={isLoading} className="registerbtn">
            Sign up
          </button>
          {!allFieldsFilled && (
            <div className="error">All fields must be filled</div>
          )}
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
