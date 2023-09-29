import { useState, useCallback } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, role, roleData) => {
    setIsLoading(true);
    setError(null);

    try {
      const requestBody = {
        username,
        email,
        password,
        role,
      };

      if (roleData) {
        requestBody.roleData = roleData;
      }

      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      const json = await response.json();

      if (!response.ok) {
        console.log("----------------------------------1");
        setIsLoading(false);
        console.log(error);
        setError(json.error);
      }
      if (response.ok) {
        //save the user to local storage
        console.log("----------------------------------2");
        localStorage.setItem("user", JSON.stringify(json));

        console.log(JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }
    } catch (error) {
      console.log("----------------------------------3");
      console.log("An error occurred:--------------", error);
      setError(true);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  return { signup, isLoading, error };
};
