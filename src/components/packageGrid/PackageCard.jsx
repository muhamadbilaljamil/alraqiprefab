import React from "react";
import { Link } from "react-router-dom";

function PackageCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="package-card-alpha">
        <div className="package-thumb">
          <Link
            onClick={scrollTop}
            to={`${process.env.PUBLIC_URL}${props.path}`}
          >
            <img src={props.image} alt="images" />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}${props.path}`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="p-card-info">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}${props.path}`}
              >
                <h6>More Datail</h6>
              </Link>
            </div>
            <div className="book-btn">
              <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                Book Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
