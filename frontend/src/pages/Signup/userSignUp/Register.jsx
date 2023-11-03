import React, { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import RegisterCSS from "./Register.module.css"
// import "../../../Styles/Register.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
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
    <div className={RegisterCSS["register-container"]}>
      <div className={RegisterCSS["register"]}>
        <img
          src="assets/images/add_user.png"
          alt="user icon"
          className={RegisterCSS["registerimg"]}
        />

        <Form className="register-form" onSubmit={handleSubmit}>
          <div className={RegisterCSS["usernameconreg"]}>
            <FaUser className={RegisterCSS["usernameicon"]} />
            <input
              type="text"
              placeholder="User Name"
              className={RegisterCSS["usernamereg"]}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className={RegisterCSS["emailconreg"]}>
            <HiMail className={RegisterCSS["emailicon"]} />
            <input
              type="email"
              placeholder="Email address"
              className={RegisterCSS["emailreg"]}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className={RegisterCSS["passconreg"]}>
            <FaLock className={RegisterCSS["lockiconreg"]} />
            <input
              type="password"
              placeholder="Password"
              className={RegisterCSS["passwordreg"]}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>{" "}
          <div className={RegisterCSS["passconreg"]}>
            <FaLock className={RegisterCSS["lockiconreg"]} />
            <input
              type="password"
              placeholder="Confirm password"
              className={RegisterCSS["passwordconfirmreg"]}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>
          <button disabled={isLoading} className={RegisterCSS["registerbtn"]}>
            Sign up
          </button>
          {!allFieldsFilled && (
            <div className={RegisterCSS["error"]}>All fields must be filled</div>
          )}
          {error && <div className={RegisterCSS["error"]}>{error}</div>}
        </Form>

        <div className={RegisterCSS["registerperson"]}>
          <a
            href="/pharmacistregister"
            className={RegisterCSS["register-pharmacist"]}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Register as a Pharmacist
          </a>

          <a
            href="/registerdoctor"
            className={RegisterCSS["register-doctor"]}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Register as a Doctor
          </a>
        </div>
      </div>
    </div>
  );
};
