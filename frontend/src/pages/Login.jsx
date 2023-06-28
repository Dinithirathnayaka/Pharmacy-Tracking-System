import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import "../Styles/Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  return (
    <div className="form-container">
      <div className="login">
        {" "}
        <img
          src="assets/images/login.png"
          alt="user icon"
          className="loginimg"
        />
        <input
          value={pass}
          onCharge={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">SUBMIT</button>
      </form>

          <br />
          <input type="submit" value="SUBMIT" className="submitbtn" />
        </Form>
        <div className="extra">
          {" "}
          <p className="noaccount">Don't have an account?</p>
          <p className="nopassword">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};
