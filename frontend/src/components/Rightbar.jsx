import "../Styles/Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img
          src="/assets/images/advertisment1.jpg"
          alt=""
          className="mb-4 adimg"
        />
        <img src="/assets/images/advertisment2.jpg" alt="" className="adimg" />
      </div>
    </div>
  );
}
