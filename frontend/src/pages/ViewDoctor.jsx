import { useEffect, useState } from "react";

import viewPic from "../components/images/vision.png";

import { useSearchContext } from "../context/SearchContext";

// components
import DoctorProfile from "../components/DoctorProfile";
import TitleBar from "../components/TitleBar";
import DataNotFound from "../components/DataNotFound";

const ViewDoctor = () => {
  const [profiles, setProfiles] = useState(null);
  const { searchQuery } = useSearchContext();

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

  console.log(profiles);

  const filteredData =
    profiles?.filter((item) => {
      const nameMatch = item.name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descMatch = item.desc
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const telMatch = item.tel
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Return true if the search query matches any of the fields (name, desc, or tel)
      return nameMatch || descMatch || telMatch;
    }) ?? [];

  return (
    <>
      <TitleBar
        titlePic={viewPic}
        title="View Doctor"
        description="Find the details of doctors"
      />

      <div className="container template_Container">
        {filteredData.length === 0 ? (
          <DataNotFound /> // Use the DataNotFound component here
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-5 card-container">
            {filteredData.map((profile) => (
              <div className="col" key={profile._id}>
                <DoctorProfile profile={profile} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ViewDoctor;
