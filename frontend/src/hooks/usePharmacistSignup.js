import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const usePharmacistSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

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
        console.log("----------------------------------1");
        setIsLoading(false);
        console.log(error);
        setError(true);
        console.log(error);
      }

      if (response.ok) {
        //save the user to the local storage
        localStorage.setItem("user", JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
        setError(false);
      }
    } else {
      setError("Password mismatch");
    }
  };

  return { pharmacistsignup, isLoading, error };
};
