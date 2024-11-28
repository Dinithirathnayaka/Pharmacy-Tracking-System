import { createContext, useReducer, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

const initialState = {
  user: null,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Function to fetch user details from local storage
  const getUserDetailsFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  };

  useEffect(() => {
    const user = getUserDetailsFromLocalStorage();

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state :", state);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, getUserDetailsFromLocalStorage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error(
//       "useAuthContext must be used inside an AuthContextProvider"
//     );
//   }
//   return context;
// };
