import React from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";
import logo_1 from "../../assets/icons/logo_1.jpeg";

const MobileMenu = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  const menus = [
    {
      path: "/",
      title: "Home",
      // icon: true,
      // children: [
      //   { path: "/", title: "Services" },
      //   { path: "/", title: "Life Science Capital" },
      // ],
    },
    { path: "/", title: "Services" },
    { path: "/", title: "Gallery" },
    { path: "/", title: "About us" },
    { path: "/", title: "Contact us" },
  ];

  return (
    <div
      className={` w-80 bg-white border fixed top-0 bottom-0 transitation duration-300 z-20 ${
        menuOpen ? "-translate-x-0" : "-translate-x-80"
      }`}
    >
      <div>
        <Link to={"/"}>
          <div className="flex relative justify-center items-center border">
            <Link to="/">
              <img src={logo_1} alt="" className="h-20" />
            </Link>
          </div>
        </Link>
        <ul className="flex flex-col items-center ">
          {menus.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className="w-full text-center hover:bg-blue/5"
              >
                <li className="py-4 px-8 border-b-[1px] border-primary/10">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="absolute bottom-0 w-full text-center hover:bg-blue/5">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" w-full text-primary py-4 px-8 border-t-[1px] border-primary/10"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
