import "./Leftbar.css";
import {
  Info,
  ThumbUp,
  People,
  WhereToVote,
  Link,
  Call,
  Email,
} from "@mui/icons-material";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarProfile">
          <li className="leftbarProfileDetails">
            <img
              className="leftbarImg"
              src="/assets/person/1.jpg"
              alt="person1"
            />
            <span className="leftbarProfileName">Amila Aponsu</span>
          </li>
        </ul>
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <Info className="leftbarListIcon" />
            <span className="leftbarlistIconName">
              Studied at Sabaragamuwa University of Sri Lanka
            </span>
          </li>
          <li className="leftbarListItem">
            <ThumbUp className="leftbarListIcon" />
            <span className="leftbarlistIconName">1163 persons like</span>
          </li>
          <li className="leftbarListItem">
            <People className="leftbarListIcon" />
            <span className="leftbarlistIconName">900 persons follow</span>
          </li>
          <li className="leftbarListItem">
            <WhereToVote className="leftbarListIcon" />
            <span className="leftbarlistIconName">120 persons search</span>
          </li>
          <li className="leftbarListItem">
            <Link className="leftbarListIcon" />
            <span className="leftbarlistIconName">
              <a href="www.pharmacy.lk">www.pharmacy.lk</a>
            </span>
          </li>
          <li className="leftbarListItem">
            <Call className="leftbarListIcon" />
            <span className="leftbarlistIconName">011 7584965</span>
          </li>
          <li className="leftbarListItem">
            <Email className="leftbarListIcon" />
            <span className="leftbarlistIconName">pharmacy@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
