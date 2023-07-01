import DoctorProfile from "./DoctorProfile";
import TitleBar from "./TitleBar";
import viewPic from "./images/vision.png";

const ViewDoctor = () => {
  return (
    <>
      <TitleBar
        titlePic={viewPic}
        title="View Doctor"
        description="Find the details of doctors"
      />

      <div className="mb-1 h-25 search-container">
        <div className="container search-container-block">
          <div className="search-input-container">
            <input id="searchInput" type="text" placeholder="Search here..." />
          </div>
        </div>
      </div>

      <div className="container template_Container">
        <div className="row row-cols-1 row-cols-md-3 g-5 card-container ">
          <div className="col">
            <DoctorProfile />
          </div>
          <div className="col">
            <DoctorProfile />
          </div>
          <div className="col">
            <DoctorProfile />
          </div>
          <div className="col">
            <DoctorProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDoctor;
