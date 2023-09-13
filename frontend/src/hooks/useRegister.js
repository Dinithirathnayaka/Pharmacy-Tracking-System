import { useCallback, useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, role, roleData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
          roleData: roleData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const updateUser = useCallback((response) => {
    localStorage.setItem("User", JSON.stringify(response));
    setUser(response);
  }, []);

  return { signup, isLoading, error, updateUser };
};
