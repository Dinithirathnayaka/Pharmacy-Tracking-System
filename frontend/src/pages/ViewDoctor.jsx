import { useEffect, useState } from "react";

import viewPic from "../components/images/vision.png";

// components
import DoctorProfile from "../components/DoctorProfile";
import TitleBar from "../components/TitleBar";

const ViewDoctor = () => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch("/api/doctors");
      const json = await response.json();

      if (response.ok) {
        setProfiles(json);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <TitleBar
        titlePic={viewPic}
        title="View Doctor"
        description="Find the details of doctors"
      />

      <div className="container template_Container">
        <div className="row row-cols-1 row-cols-md-4 g-5 card-container ">
          {profiles &&
            profiles.map((profile) => (
              <div className="col" key={profile._id}>
                <DoctorProfile profile={profile} />
              </div>
            ))}
        </div>
      </div>

      <div className="home">
        <div className="profiles"></div>
      </div>
    </>
  );
};

export default ViewDoctor;
