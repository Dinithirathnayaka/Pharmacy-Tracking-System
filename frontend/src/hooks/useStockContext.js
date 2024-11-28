import { StocksContext } from "../context/StockContext";
import { useContext } from "react";

export const useStockContext = () => {
  const context = useContext(StocksContext);

  if (!context) {
    throw new Error(
      "StocksContext must be used inside a StocksContextProvider"
    );
  }

  return context;
};
