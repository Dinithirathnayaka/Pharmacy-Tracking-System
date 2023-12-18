import {
  Info,
  ThumbUp,
  People,
  WhereToVote,
  Link,
  Call,
  Email,
} from "@mui/icons-material";
import { useAuthContext } from "../hooks/useAuthContext";
import "../Styles/Leftbar.css";

export default function Leftbar() {
  const { user } = useAuthContext();

  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarProfile">
          <li className="leftbarProfileDetails"></li>
        </ul>
        <ul className="leftbarList">
          <img
            src="/assets/images/leftmain1.jpeg"
            alt="person1"
            style={{ width: "100%", marginBottom: "50px" }}
          />

          <img
            src="/assets/images/leftmain2.jpeg"
            alt="person1"
            style={{ width: "100%", marginBottom: "50px" }}
          />
          <li className="leftbarListItem">
            <Call className="leftbarListIcon" />
            <span className="leftbarlistIconName" style={{}}>
              011 7584965
            </span>
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
