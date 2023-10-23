import React from "react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

function GuideCardGama({ index, team }) {
  const { image, name, designation, about } = team;
  return (
    <>
      <div className="guide-card-gamma" key={index}>
        <div className="guide-image">
          <img src={image} alt="GuideIMG" />
          <ul className="guide-social-links">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <Facebook fill="#3d6b97" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Instagram width={22} height={22} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <Twitter width={22} height={22} fill="#059ecc" />
              </a>
            </li>
          </ul>
          <div className="contact-lavel">
            <a href="tel:+971 52 484 4246">Contact</a>
          </div>
        </div>
        <div className="guide-content">
          <h4 className="guide-name">{name}</h4>
          <h6 className="guide-designation">{designation}</h6>
        </div>
      </div>
    </>
  );
}

export default GuideCardGama;
