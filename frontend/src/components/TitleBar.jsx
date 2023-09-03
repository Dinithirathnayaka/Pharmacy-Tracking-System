const TitleBar = (props) => {
  return (
    <>
      <div className="title-bar mt-1">
        <div className="container title-bar-container">
          <div>
            <img
              src={props.titlePic}
              className="card-img-top mx-auto d-block"
              alt="..."
            />
          </div>
          <div>
            <div>
              <span>
                <b>{props.title}</b>
              </span>
            </div>
            <div>
              <span>{props.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
