import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const usePharmacistSignup = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const pharmacistsignup = async (
    username,
    register_no,
    pharmacyName,
    email,
    password,
    confirmPassword,
    location
  ) => {
    setIsLoading(true);
    setError(null);

    if (password === confirmPassword) {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          role: "pharmacist",
          roleData: {
            register_no,
            pharmacyName,
            location,
          },
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setErrorMessage(json.error);
        setError(true);
      }

      if (response.ok) {
        //save the user to the local storage
        localStorage.setItem("user", JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
        setError(false);

        // Navigate to "/"
        navigate("/");
      }
    } else {
      setError("Password mismatch");
    }
  };

  return { pharmacistsignup, isLoading, error, errorMessage };
};
