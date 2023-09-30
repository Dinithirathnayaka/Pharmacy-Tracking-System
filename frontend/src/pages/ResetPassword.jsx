import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ForgotPassword.css";

export const ResetPassword = () => {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetToken, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        navigate("/login");
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
    <div className="reset-container">
      <div className="reset">
        {" "}
        <img
          src="assets/images/reset-password.png"
          alt="Reset icon"
          className="resetimg"
        />
        <h5 className="user-reset">RESET PASSWORD</h5>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="reset-form" onSubmit={handleSubmit}>
          <div className="emailcon">
            <FaLock className="emailicon" />
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="emailcon">
            <FaLock className="emailicon" />
            <input
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit">Reset Password</Button>
        </Form>
        <div className="back"></div>
      </div>
    </div>
  );
};
