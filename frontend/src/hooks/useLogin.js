import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(true);
        setErrorMessage(json.error);
      }

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));

        console.log(JSON.stringify(json));

        dispatch({ type: "LOGIN", payload: json });
        setError(false);
        setIsLoading(false);

        navigate("/");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("Something went wrong");
    }
  };

  return { login, isLoading, error, errorMessage };
};
