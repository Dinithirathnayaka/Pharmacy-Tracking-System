import { createContext, useReducer } from "react";

const initialState = {
  userData: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
