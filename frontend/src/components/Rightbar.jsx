import "../Styles/Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <div className="birthdayContainer">
          <img src="/assets/images/birthday/4.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 others</b> have birthdays today!</span>
        </div> */}

        {/* <img src="/assets/ad1.png" alt="" className="rightbarAd" /> */}

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="onlineFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/images/person/1.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUserName"> Joana Christiana</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/images/person/2.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUserName"> Joana Christiana</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/images/person/3.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUserName"> Joana Christiana</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/images/person/4.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUserName"> Joana Christiana</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
