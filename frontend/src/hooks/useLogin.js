import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
<<<<<<< HEAD
  const [error, setError] = useState(null);
=======
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
>>>>>>> 8a689f4ecfbbb445708c093683f769dd76b917be
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
<<<<<<< HEAD
    setError(null);
=======
>>>>>>> 8a689f4ecfbbb445708c093683f769dd76b917be

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

<<<<<<< HEAD
      if (response.ok) {
        // Handle success
        console.log("----------------------------------2");
=======
      if (!response.ok) {
        setIsLoading(false);
        setError(true);
        setErrorMessage(json.error);
      }

      if (response.ok) {
>>>>>>> 8a689f4ecfbbb445708c093683f769dd76b917be
        localStorage.setItem("user", JSON.stringify(json));
        console.log(JSON.stringify(json));

        dispatch({ type: "LOGIN", payload: json });
<<<<<<< HEAD
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
=======
        setError(false);
        setIsLoading(false);

        navigate("/");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("Something went wrong");
>>>>>>> 8a689f4ecfbbb445708c093683f769dd76b917be
    }
  };

  return { login, isLoading, error, errorMessage };
};
