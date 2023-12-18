import { useEffect, useState } from "react";
import viewPic from "../../components/images/vision.png";
import ViewDoctorCSS from "./ViewDoctor.module.css";
import ScaleLoader from "react-spinners/ScaleLoader";

// components
import DoctorProfile from "../../components/DoctorProfile/DoctorProfile";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import TitleBar from "../../components/TitleBar/TitleBar";

const ViewDoctor = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter profiles based on the searchInput
    const filteredData = profiles.filter((profile) => {
      const isMatchingUsername = profile.username
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const isMatchingLocation =
        profile.doctor &&
        profile.doctor.specific_area
          .toLowerCase()
          .includes(inputValue.toLowerCase());

      return isMatchingUsername || isMatchingLocation;
    });

    setFilteredProfiles(filteredData);
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
            placeholder="Search by name or type"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className={`container ${ViewDoctorCSS["template_Container"]}`}>
        {isLoading ? (
          <div className={ViewDoctorCSS["loaderContainerStyle"]}>
            <ScaleLoader
              color="#36d7b7"
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            {filteredProfiles.length === 0 && <DataNotFound />}
            {filteredProfiles.length !== 0 && (
              <>
                <div
                  className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 card-container ${ViewDoctorCSS["main-card-container"]}`}
                >
                  {filteredProfiles.map((profile, index) => (
                    <div
                      style={{
                        marginBottom: "10px",
                      }}
                      className="col"
                      key={index}
                    >
                      <DoctorProfile profile={profile} loading={isLoading} />
                    </div>
                  ))}
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
