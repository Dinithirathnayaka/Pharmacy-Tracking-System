import TitleBar from "./TitleBar";
import viewStk from "./images/analysis.png";
import "../Styles/Stock.css";


const Stock = () => {
  return (
    <>
      <TitleBar
        titlePic={viewStk}
        title="View Stock"
        description="View available medicine"
      />
      <div className="container">

        <div>
          <hr/>
          <button  className="addbutton" style={{marginBottom:"10px"}}>Add medicine</button>
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
              <img src="/assets/images/edit.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
              <img src="/assets/images/bin.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
              
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
            <img src="/assets/images/edit.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
              <img src="/assets/images/bin.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
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
            <img src="/assets/images/edit.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
              <img src="/assets/images/bin.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>    
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
            <img src="/assets/images/edit.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
              <img src="/assets/images/bin.png" style={{height: "20px",width:"20px",marginRight: "5px"}}/>
            </td>
          </tr>
        </table>
  
      </div>
    </>
  );
};

export default Stock;
