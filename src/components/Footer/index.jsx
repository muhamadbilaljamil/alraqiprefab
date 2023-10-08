import React from "react";
import { Link } from "react-router-dom";
import logo_1 from "../../assets/icons/logo_1.jpeg";
import { ReactComponent as Email } from "../../assets/icons/email_1.svg";
import { ReactComponent as Mobile } from "../../assets/icons/mobile_1.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp_1.svg";
import { ReactComponent as Location } from "../../assets/icons/location_1.svg";
import { ReactComponent as DoubleArrow } from "../../assets/icons/double_right_arrow_8.svg";

const Footer = () => {
  const styles = {
    heading: "text-secondary text-[24px] font-extrabold py-2",
    link: "",
    linktext: "text-secondary py-2 pl-3 font-semibold text-base",
    icon: "w-12 h-12  bg-white flex justify-center items-center rounded-full",
  };

  return (
    <div className="bg-primary text-secondary">
      <div className="container-c pt-8">
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 justify-between">
            <li className="p-6">
              <Link to="/">
                <img src={logo_1} alt="" className="h-28 rounded-md mb-5" />
              </Link>
              <h1 className="text-secondary text-sm text-justify">
                Al-Raqi, founded in 2009, has a mission to provide prefab houses
                and services. As a leading prefab houses provider in UAE, we
                offer a comprehensive range of prefeb solutions to meet all your
                needs related to prefab houses and all types of building.
              </h1>
            </li>
            <li className="p-3">
              <ul className="flex flex-col gap-3">
                <li className="mb-[10px] px-2">
                  <h1 className={styles.heading}>Services</h1>
                </li>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <h1 className={styles.linktext}>Porta Cabins</h1>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Modular Concepts</li>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Mosques</li>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Majlis</li>
                </Link>
              </ul>
            </li>
            <li className="p-3">
              <ul className="flex flex-col gap-3">
                <li className="mb-[10px] px-2">
                  <h1 className={styles.heading}>Company Policies</h1>
                </li>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <h1 className={styles.linktext}>About Us</h1>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Policy and Objectives</li>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Health And Safety Policy</li>
                </Link>
                <Link to="/" className="px-2 flex items-center">
                  <DoubleArrow width={24} height={24} />
                  <li className={styles.linktext}>Environmental Policy</li>
                </Link>
              </ul>
            </li>
            <li className="p-3">
              <ul className="flex flex-col gap-5">
                <li className="mb-[10px] px-2">
                  <h1 className={styles.heading}>Contacts</h1>
                </li>
                <div className="flex gap-3 px-2">
                  <div className={styles.icon}>
                    {<Email width={26} height={26} fill={"#eaf3f6"} />}
                  </div>
                  <div className="flex flex-col justify-between">
                    <h1 className="text-lg font-semibold text-white">
                      Email At
                    </h1>
                    <h1 className="text-sm text-white">
                      info@alraqiprefab.com
                    </h1>
                  </div>
                </div>
                <div className="flex gap-3  px-2">
                  <div className={styles.icon}>
                    <Mobile width={28} height={28} fill="#eaf3f6" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h1 className="text-lg font-semibold text-white">
                      Mobile No
                    </h1>
                    <h1 className="text-sm text-white">123456789</h1>
                  </div>
                </div>
                <div className="flex gap-3  px-2">
                  <div className={styles.icon}>
                    <Whatsapp width={26} height={26} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h1 className="text-lg font-semibold text-white">
                      What's App
                    </h1>
                    <h1 className="text-sm text-white">123456789</h1>
                  </div>
                </div>
                <div className="flex gap-3  px-2">
                  <div className={styles.icon}>
                    <Location width={26} height={26} fill="#fff" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h1 className="text-lg font-semibold text-white">
                      P.O.Box: 46730, Sharjah - UAE
                    </h1>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t-[0.1px] border-secondary/80">
        <h1 className="text-secondary text-sm py-5">
          Copyright 2009-2023{" "}
          <span className="text-lg font-semibold">AL-RAQI PREFAB</span> PVT LTD
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
