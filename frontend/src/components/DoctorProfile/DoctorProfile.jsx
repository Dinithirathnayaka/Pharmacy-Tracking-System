import DoctorProfileCSS from "./DoctorProfile.module.css";

import profilePic from "../images/profile.jpg";
import backImg from "../images/back.jpg";

const truncateEmail = (email) => {
  const atIndex = email.indexOf("@");
  const truncatedUsername = email.substring(0, 3) + "...";
  const domain = email.substring(atIndex);

  return truncatedUsername + domain;
};

const DoctorProfile = ({ profile }) => {
  const truncatedEmail = truncateEmail(profile.email);

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
          <h5 className="text-center">{profile.username}</h5>
          <ul>
            <li>
              <i className="bx bx-envelope"></i>
              <span>{truncatedEmail}</span>
            </li>
            <li>
              <i class="bx bx-registered"></i>
              <span>{"SLMC - " + profile.doctor.regi_no}</span>
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
