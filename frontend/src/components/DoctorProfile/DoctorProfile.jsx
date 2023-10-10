import DoctorProfileCSS from "./DoctorProfile.module.css";

import profilePic from "../images/profile.jpg";
import backImg from "../images/back.jpg";

const DoctorProfile = ({ profile }) => {
  return (
    <>
      <div className={`card h-100 shadow ${DoctorProfileCSS["doctor_card"]}`}>
        <div className={DoctorProfileCSS["doctor_profile_back"]}>
          <img
            src={backImg}
            className="card-img-top mx-auto d-block"
            alt="..."
          />
        </div>

        <div className={DoctorProfileCSS["doctor_profile_picture"]}>
          <img
            src={profilePic}
            className="card-img-top mx-auto d-block"
            alt="..."
          />
        </div>

        <div className={DoctorProfileCSS["doctor_profile_contacts"]}>
          <h3 className="text-center">{profile.username}</h3>
          <ul>
            <li>
              <i className="bx bx-envelope"></i>
              <span>{profile.email}</span>
            </li>
            <li>
              <i className="bx bx-phone-call"></i>
              <span>{profile.doctor.regi_no}</span>
            </li>
            <li>
              <i className="bx bx-current-location"></i>
              <span>address</span>
            </li>
          </ul>
        </div>

        <div
          className={`${DoctorProfileCSS["doctor_profile_socials"]} text-center`}
        >
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-messenger"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;