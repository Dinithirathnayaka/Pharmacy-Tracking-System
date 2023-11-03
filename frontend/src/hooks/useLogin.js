import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // const json = await response.json();
        // setError(true);
        // setErrorMessage(json.error);
        // setIsLoading(false);
        const json = await response.json();
        const { email, role, user } = json;
        console.log(user);

        const userData = {
          email,
          role,
          user,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({ type: "LOGIN", payload: userData });

        // Fetch the user's data using the user ID
        // const userDataResponse = await fetch(`/api/user/getuser/${json._id}`);
        // if (userDataResponse.ok) {
        //   const userData = await userDataResponse.json();
        //   localStorage.setItem("userData.username", JSON.stringify(userData));
        //   dispatch({ type: "SET_USER_DATA", payload: userData });
        // }

        setIsLoading(false);
        navigate("/");
      } else {
        setError(true);
        setErrorMessage("Login failed. Please check your credentials.");
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setErrorMessage("Something went wrong");
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, errorMessage };
};
