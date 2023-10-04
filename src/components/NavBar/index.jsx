import React, { useState } from "react";
// import "./Nav_Bar.css";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";

const menus = [
  { path: "/topic-area", title: "Brands" },
  { path: "/services", title: "Services" },
  { path: "/about", title: "About" },
  { path: "/oxford-global-plus", title: "Oxford Global PLUS" },
];

const NavBar = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  console.log("Menu Open: ", menuOpen);
  return (
    <header
      className="bg-secondary flex h-24 justify-between px-10 "
      id="header-section"
    >
      <div className="w-[260px] flex justify-start items-center">
        <Link to={"/"}>
          <div className="relative">
            {/* <img className="pointer" src={img} alt="Main Logo SVG" /> */}
            <h1 className="font-bold text-[24px]">Conferences</h1>
            <h2 className="absolute right-6 -bottom-5"> & co</h2>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex justify-center items-center flex-1 w-full">
        <div className="flex justify-center p-[10px] w-full">
          {menus.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <div className="py-4 px-8">{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="min-w-[260px] hidden md:flex justify-end items-center">
        <div className="p-2">
          <div className="flex items-center h-[49px] bg-orange rounded-full px-8 text-primary font-semibold text-[18px]">
            Get in Touch
          </div>
        </div>
      </div>

      <div className="mobile-menu md:hidden flex items-center">
        <div
          className={`hamburger flex flex-col ${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-8 h-[3px] bg-secondary bar1"></div>
          <div className="w-8 h-[3px] bg-secondary bar2"></div>
          <div className="w-8 h-[3px] bg-secondary bar3"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
