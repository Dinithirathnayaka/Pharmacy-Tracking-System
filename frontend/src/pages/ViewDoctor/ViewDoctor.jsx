import { useEffect, useState } from "react";
import viewPic from "../../components/images/vision.png";
import ViewDoctorCSS from "./ViewDoctor.module.css";
import ReactPaginate from "react-paginate";
import ScaleLoader from "react-spinners/ScaleLoader";

// components
import DoctorProfile from "../../components/DoctorProfile/DoctorProfile";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import TitleBar from "../../components/TitleBar/TitleBar";

const ViewDoctor = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage());

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);

      const response = await fetch("/api/user/doctors");
      const json = await response.json();

      if (response.ok) {
        setProfiles(json);
      }

      setLoading(false);
    };

    fetchProfiles();
  }, []);

  // Function to determine postsPerPage based on screen size
  function getPostsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 576) {
      return 1; // Extra Small screens
    } else if (screenWidth >= 576 && screenWidth < 768) {
      return 1; // Small screens
    } else if (screenWidth >= 768 && screenWidth < 992) {
      return 2; // Medium screens
    } else if (screenWidth >= 992 && screenWidth < 1200) {
      return 3; // Large screens
    } else {
      return 4; // Extra large and above screens
    }
  }

  useEffect(() => {
    // Update postsPerPage when the window is resized
    function handleResize() {
      setPostsPerPage(getPostsPerPage());
    }

    // Attach an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageClick = (data) => {
    paginate(data.selected + 1);
  };

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProfiles = profiles.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={ViewDoctorCSS["view-doctor-container"]}>
      <TitleBar
        titlePic={viewPic}
        title="View Doctor"
        description="Find the details of doctors"
      />

      <div className={`container ${ViewDoctorCSS["template_Container"]}`}>
        {loading ? (
          <div class={ViewDoctorCSS["loaderContainerStyle"]}>
            <ScaleLoader
              color="#36d7b7"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          // Render the fetched data if loading is false
          <>
            {profiles.length == 0 && <DataNotFound />}
            {profiles.length !== 0 && (
              <>
                <div
                  className={`row row-cols-1 row-cols-md-${postsPerPage} g-5 card-container ${ViewDoctorCSS["main-card-container"]}`}
                >
                  {currentProfiles.map((profile) => (
                    <div className="col" key={profile._id}>
                      <DoctorProfile profile={profile} loading={loading} />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(profiles.length / postsPerPage)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewDoctor;
