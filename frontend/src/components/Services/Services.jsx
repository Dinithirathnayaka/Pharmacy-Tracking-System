import ServicesCSS from "./Services.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchMedicine from "../images/find_medicine.jpeg";
import SearchPharmacy from "../images/find_pharmacy.jpeg";
import SearchDoctor from "../images/search_doctor.jpeg";
import ManageInventory from "../images/medicine_inventory.jpeg";
import Messaging from "../images/instant_messaging.jpeg";
import Posting from "../images/post_sharing.jpeg";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={`container ${ServicesCSS["services"]}`} id="services">
        <div className={ServicesCSS["services-heading"]}>
          <h1>SERVICES</h1>
        </div>

        <div className={ServicesCSS["carousel-container"]}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            itemClass="carousel-card"
            className={ServicesCSS["carousel"]}
            containerClass="carousel-container-j"
          >
            <div
              className={`card h-100 ms-1 me-1  ${ServicesCSS["carousel-card"]}`}
            >
              <div className={ServicesCSS["img-container"]}>
                <img
                  src={SearchMedicine}
                  className={`card-img-top mx-auto d-block img-fluid `}
                  alt="SEARCH MEDICINE"
                  height="200px"
                />
              </div>
              <div className={ServicesCSS["card-body"]}>
                <h5 className="card-title">SEARCH MEDICINE</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div
              className={`card h-100 ms-1 me-1  ${ServicesCSS["carousel-card"]}`}
            >
              <div className={ServicesCSS["img-container"]}>
                <img
                  src={SearchDoctor}
                  className={`card-img-top mx-auto d-block img-fluid `}
                  alt="FIND DOCTOR"
                  height="200px"
                />
              </div>
              <div className={ServicesCSS["card-body"]}>
                <h5 className="card-title">FIND DOCTOR</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>

            <div
              className={`card h-100 ms-1 me-1  ${ServicesCSS["carousel-card"]}`}
            >
              <div className={ServicesCSS["img-container"]}>
                <img
                  src={Messaging}
                  className={`card-img-top mx-auto d-block img-fluid `}
                  alt="INSTANT MESSAGING"
                  height="200px"
                />
              </div>
              <div className={ServicesCSS["card-body"]}>
                <h5 className="card-title">INSTANT MESSAGING</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div
              className={`card h-100 ms-1 me-1  ${ServicesCSS["carousel-card"]}`}
            >
              <div className={ServicesCSS["img-container"]}>
                <img
                  src={ManageInventory}
                  className={`card-img-top mx-auto d-block img-fluid `}
                  alt="MANAGE MEDICINE"
                  height="200px"
                />
              </div>
              <div className={ServicesCSS["card-body"]}>
                <h5 className="card-title">MANAGE MEDICINE</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div
              className={`card h-100 ms-1 me-1  ${ServicesCSS["carousel-card"]}`}
            >
              <div className={ServicesCSS["img-container"]}>
                <img
                  src={Posting}
                  className={`card-img-top mx-auto d-block img-fluid `}
                  alt="SEARCH MEDICINE"
                  height="200px"
                />
              </div>
              <div className={ServicesCSS["card-body"]}>
                <h5 className="card-title">SEARCH MEDICINE</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Services;
