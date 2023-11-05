import { createContext, useReducer } from "react";

export const StocksContext = createContext();

export const stocksReducer = (state, action) => {
  switch (action.type) {
    case "SET_STOCKS":
      return {
        rows: action.payload,
      };

    case "CREATE_STOCK":
      return {
        rows: [action.payload, ...state.rows],
      };

    case "DELETE_STOCK":
      return {
        rows: state.rows.filter((w) => w._id !== action.payload._id),
      };

    case "UPDATE_STOCK":
      const updatedIndex = state.rows.findIndex(
        (stock) => stock._id === action.payload._id
      );

      if (updatedIndex === -1) {
        return state; // If the item is not found, return the state as is.
      }

      const updatedRows = [...state.rows];
      updatedRows[updatedIndex] = action.payload;

      return {
        rows: updatedRows,
      };

    default:
      return state;
  }
};

export const StocksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stocksReducer, {
    rows: [],
  });

  return (
    <StocksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StocksContext.Provider>
  );
};
