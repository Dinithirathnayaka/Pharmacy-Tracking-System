import { Outlet } from "react-router-dom";
import { StocksContextProvider } from "../../context/StockContext";

import StockCSS from "./StockDetails.module.css";

const StockDetails = () => {
  return (
    <StocksContextProvider>
      <div className={StockCSS["stock-container"]}>
        <Outlet />
      </div>
    </StocksContextProvider>
  );
};

export default StockDetails;
