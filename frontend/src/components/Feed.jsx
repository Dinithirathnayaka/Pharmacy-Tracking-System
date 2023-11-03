import Share from "./Share";
import Post from "./AllPosts";
import "../Styles/Feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedinner">
        <Share />
        <Post />
      </div>
    </div>
  );
}
