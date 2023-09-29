import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (response.ok) {
        // Handle success
        console.log("----------------------------------2");
        localStorage.setItem("user", JSON.stringify(json));
        console.log(JSON.stringify(json));

        dispatch({ type: "LOGIN", payload: json });
      } else {
        // Handle error
        console.log("----------------------------------1");
        setError(json.error);
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
