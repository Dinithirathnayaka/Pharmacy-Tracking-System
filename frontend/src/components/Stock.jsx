import TitleBar from "./TitleBar";
import viewStk from "./images/analysis.png";
import "../Styles/Stock.css";
import { NavLink } from "react-router-dom";

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
        <div
          className="addbutton"
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              <img
                className="action"
                src="/assets/images/edit.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
              />
              <img
                className="action"
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
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
              <img
                className="action"
                src="/assets/images/edit.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
              />
              <img
                className="action"
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
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
              <img
                className="action"
                src="/assets/images/edit.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
              />
              <img
                className="action"
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
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
              <img
                className="action"
                src="/assets/images/edit.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
              />
              <img
                className="action"
                src="/assets/images/bin.png"
                style={{ height: "20px", width: "20px", marginRight: "5px" }}
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Stock;
