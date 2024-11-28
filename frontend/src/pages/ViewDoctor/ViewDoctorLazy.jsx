import { useEffect, useRef, useState } from "react";
import viewPic from "../../components/images/vision.png";
import ViewDoctorCSS from "./ViewDoctor.module.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import clsx from "clsx";
import useLazyLoad from "../../hooks/useLazyLoad";

import SearchIcon from "@mui/icons-material/Search";

// components
import DoctorProfile from "../../components/DoctorProfile/DoctorProfile";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import TitleBar from "../../components/TitleBar/TitleBar";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const NUM_PER_PAGE = 4;

const ViewDoctor = () => {
  const [profiles, setProfiles] = useState([]);
  const triggerRef = useRef();
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (currentPage - 1) * NUM_PER_PAGE;
        const end = start + NUM_PER_PAGE;
        const data = profiles.slice(start, end);

        if (end >= profiles.length) {
          setAllDataLoaded(true);
        }

        resolve(data);
      }, 3000);
    });
  };

  const { data, loading } = useLazyLoad({
    triggerRef,
    onGrabData,
    dependencies: [profiles],
  });

  const handleSearchClick = () => {
    // Filter profiles based on the searchInput
    const filteredData = profiles.filter((profile) =>
      profile.email.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProfiles(filteredData);
    setAllDataLoaded(false);
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      setIsLoading(true);

      const response = await fetch("/api/user/doctors");
      const json = await response.json();

      if (response.ok) {
        setProfiles(json);
        setFilteredProfiles(json);
      }

      // Reset filteredProfiles when profiles change
      setFilteredProfiles(json);
      setIsLoading(false);
    };

    fetchProfiles();
  }, []);

  return (
    <div className={ViewDoctorCSS["view-doctor-container"]}>
      <TitleBar
        titlePic={viewPic}
        title="View Doctor"
        description="Find the details of doctors"
      />

      <div className={ViewDoctorCSS["filter-bar"]}>
        <div className={ViewDoctorCSS["search-container"]}>
          <div className={ViewDoctorCSS["glass-effect"]}></div>

          <input
            type="text"
            id={ViewDoctorCSS["searchInput"]}
            placeholder="Search by type or area"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon
            className={ViewDoctorCSS["search-icon"]}
            onClick={handleSearchClick}
          />
        </div>
      </div>

      <div className={`container ${ViewDoctorCSS["template_Container"]}`}>
        {isLoading ? (
          <div className={ViewDoctorCSS["loaderContainerStyle"]}>
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
            {filteredProfiles.length === 0 && <DataNotFound />}
            {filteredProfiles.length !== 0 && (
              <>
                <div
                  className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 card-container ${ViewDoctorCSS["main-card-container"]}`}
                >
                  {data.map((profile, index) => (
                    <div
                      style={{
                        marginBottom: "10px",
                      }}
                      className="col"
                      key={index}
                    >
                      <DoctorProfile profile={profile} loading={loading} />
                    </div>
                  ))}
                </div>

                <div
                  ref={triggerRef}
                  className={clsx(
                    "row row-cols-1 row-cols-md-4 g-5 card-container",
                    ViewDoctorCSS["main-card-container"],
                    {
                      trigger: true,
                      visible: loading && !allDataLoaded,
                    }
                  )}
                >
                  {!allDataLoaded && (
                    <>
                      <div className="col">
                        <CardSkeleton />
                      </div>
                      <div className="col">
                        <CardSkeleton />
                      </div>
                      <div className="col">
                        <CardSkeleton />
                      </div>
                      <div className="col">
                        <CardSkeleton />
                      </div>
                    </>
                  )}
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
