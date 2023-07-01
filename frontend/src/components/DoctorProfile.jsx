import profilePic from "./images/profile.jpg";
import backImg from "./images/back.jpg";

const DoctorProfile = () => {
  return (
    <>
      <div className="card h-100 shadow doctor_card">
        <div className="doctor_profile_back">
          <img
            src={backImg}
            className="card-img-top mx-auto d-block"
            alt="..."
          />
        </div>

        <div className="doctor_profile_picture">
          <img
            src={profilePic}
            className="card-img-top mx-auto d-block"
            alt="..."
          />
        </div>

        <div className="doctor_profile_contacts">
          <h3 className="text-center">Full name</h3>
          <ul>
            <li>
              <i className="bx bx-envelope"></i>
              <span>email</span>
            </li>
            <li>
              <i className="bx bx-phone-call"></i>
              <span>phone number</span>
            </li>
            <li>
              <i className="bx bx-current-location"></i>
              <span>address</span>
            </li>
          </ul>
        </div>

        <div className="doctor_profile_socials text-center">
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
