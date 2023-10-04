import React from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";

const MobileMenu = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  const menus = [
    { path: "/topic-area", title: "Brands" },
    { path: "/services", title: "Services" },
    { path: "/about", title: "About" },
    { path: "/oxford-global-plus", title: "Oxford Global PLUS" },
  ];

  return (
    <div
      className={` w-80 bg-secondary border fixed top-0 bottom-0 transitation duration-300 ${
        menuOpen ? "-translate-x-0" : "-translate-x-80"
      }`}
    >
      <div>
        <Link to={"/"}>
          <div className="flex relative h-20 justify-center items-center border">
            <h1 className="font-bold text-[24px]">Conferences</h1>
            <h2 className="absolute bottom-2 right-[100px]"> & co</h2>
          </div>
        </Link>
        <ul className="flex flex-col items-center gap-3">
          {menus.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <div className="py-4 px-8">{item.title}</div>
              </Link>
            );
          })}
          <button onClick={() => setMenuOpen(!menuOpen)}>Back</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
