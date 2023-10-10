import { Outlet } from "react-router-dom";
import StockCSS from "./StockDetails.module.css";

const StockDetails = () => {
  return (
    <div className={StockCSS["stock-container"]}>
      <Outlet />
    </div>
  );
};

export default StockDetails;
