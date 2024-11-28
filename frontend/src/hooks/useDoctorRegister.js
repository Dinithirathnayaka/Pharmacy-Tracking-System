// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useDoctorRegister = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const { dispatch } = useAuthContext();

//   const signup = async (regnum, username, email, password) => {
//     setIsLoading(true);
//     setError(null);

//     const response = await fetch("/api/user/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ regnum, username, email, password }),
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setIsLoading(false);
//       setError(json.error);
//     }
//     if (response.ok) {
//       localStorage.setItem("user", JSON.stringify(json));

//       dispatch({ type: "LOGIN", payload: json });

//       setIsLoading(false);
//     }
//   };

//   return { signup, isLoading, error };
// };
