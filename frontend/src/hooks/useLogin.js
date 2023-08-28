import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        console.log("----------------------------------1");
        setIsLoading(false);
        console.log(error);
        setError(true);
        console.log(error);
      }
      if (response.ok) {
        console.log("----------------------------------2");
        localStorage.setItem("user", JSON.stringify(json));

        console.log(JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setError(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("----------------------------------3");
      console.log("An error occurred:--------------", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
