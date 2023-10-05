import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary px-[11%] pt-[3%] pb-[1%]">
        <div>
          <h1>Conferences</h1> <h1>& co</h1>
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="flex-1">
              <ul>
                <li>Topic areas</li>
              </ul>
            </li>
            <li className="flex-1">
              <ul>
                <li>Services</li>
              </ul>
            </li>
            <li className="flex-1">
              <ul>
                <li>Upcoming Events</li>
              </ul>
            </li>
            <li className="flex-1">
              <ul>
                <li>Our UK Address</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <div className="">
          <ul className="">
            <li className="">Backoffice </li>
            <li className="">Contact Us </li>
            <li className="">About</li>
            <li className="">Terms of Use </li>
            <li className="">Privacy policy</li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
