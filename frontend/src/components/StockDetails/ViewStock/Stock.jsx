import TitleBar from "../../TitleBar";
import viewStk from "../../images/analysis.png";
import StockCSS from "./Stock.module.css";
import { Outlet } from "react-router-dom";

const Stock = () => {
  return (
    <>
      <TitleBar
        titlePic={viewStk}
        title="View Stock"
        description="View available medicine"
      />

      <hr />
      <div className="container">
        <div className={`text-center ${StockCSS["addbutton"]}`}>
          <a href="addmedicine">Add Medicine</a>
        </div>

        <table>
          <tr>
            <th>Batch</th>
            <th>Name</th>
            <th>Company</th>
            <th>Quantity</th>
            <th>Ex:Date</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>
              <a href="editstock">
                {" "}
                <img
                  className={StockCSS["action"]}
                  src="/assets/images/edit.png"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                  alt="..."
                />
              </a>

              <img
                className={StockCSS["action"]}
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
                alt="..."
              />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>
              <a href="editstock">
                {" "}
                <img
                  className={StockCSS["action"]}
                  src="/assets/images/edit.png"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                  alt="..."
                />
              </a>
              <img
                className={StockCSS["action"]}
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
                alt="..."
              />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>
              <a href="editstock">
                {" "}
                <img
                  className={StockCSS["action"]}
                  src="/assets/images/edit.png"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                  alt="..."
                />
              </a>
              <img
                className={StockCSS["action"]}
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
                alt="..."
              />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>Batch No</td>
            <td>
              <a href="editstock">
                {" "}
                <img
                  className={StockCSS["action"]}
                  src="/assets/images/edit.png"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                  alt="..."
                />
              </a>
              <img
                className={StockCSS["action"]}
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
                alt="..."
              />
            </td>
          </tr>
        </table>
        <Outlet />
      </div>
    </>
  );
};

export default Stock;
