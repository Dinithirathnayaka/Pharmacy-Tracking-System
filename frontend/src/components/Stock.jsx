import TitleBar from "./TitleBar";
import viewStk from "./images/analysis.png";

const Stock = () => {
  return (
    <>
      <TitleBar
        titlePic={viewStk}
        title="View Stock"
        description="View available medicine"
      />
      <div className="container">
        <h1>Stock Details</h1>
      </div>
    </>
  );
};

export default Stock;
