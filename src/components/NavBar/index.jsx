import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";
import logo_1 from "../../assets/icons/logo_1.jpeg";

export const NavBar = () => {
  const { menuOpen, setMenuOpen, menus } = useCtx();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 112 ? setIsScrolled(true) : setIsScrolled(false);
      },
      { passive: true }
    );

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <section
      className={` right-0 left-0 z-[11] bg-white/75 md:bg-white px-2 backdrop-blur  ${
        isScrolled ? "fixed top-0" : "fixed top-0 md:absolute md:top-28 "
      }`}
    >
      <header
        className={`transition duration-300 flex justify-between container-c`}
      >
        {isScrolled ? (
          <div>
            <Link to="/">
              <img src={logo_1} alt="" className="h-20 md:h-28" />
            </Link>
          </div>
        ) : (
          <div className="md:hidden">
            <Link to="/">
              <img src={logo_1} alt="" className="h-20 md:h-28" />
            </Link>
          </div>
        )}

        <div className="hidden md:flex items-center flex-1 w-full">
          <div className="flex justify-start items-center w-full h-[70px]">
            {menus.map((item, index) => {
              return (
                <div className="relative group h-[70px]" key={index}>
                  <Link to={item.path}>
                    <div className={`flex items-center px-5 h-full mx-2}`}>
                      {item.title}
                      {/* {item.icon && (
                        <Image
                          src={item?.icon}
                          alt="logo"
                          width={15}
                          height={15}
                          className="mt-[2px] ml-1 transition duration-300 transform  group-hover:rotate-90"
                        />
                      )} */}
                    </div>
                  </Link>
                  {item.children && (
                    <div className="absolute top-[70px] [&>*:first-child]:border-t-[4px] [&>*:first-child]:border-primary  transition-all duration-300 left-0 overflow-hidden bg-white min-w-[300px] flex-col h-0 group-hover:h-[473px]">
                      {item.children.map((child, index) => {
                        return (
                          <Link to={child.path} key={index}>
                            <div className="px-4 py-3 transition duration-300 border-b-[1px] border-secondary hover:bg-lightBlue">
                              {child.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="min-w-[260px] hidden lg:flex justify-end items-center">
          <div className="p-2">
            <div className="cursor-pointer flex items-center h-[49px] rounded-full px-8 bg-orange border-[1px] border-orange transition duration-500  text-primary font-semibold text-[18px] hover:bg-white hover:text-orange">
              Get in Touch
            </div>
          </div>
        </div>

        <div className="mobile-menu md:hidden flex items-center">
          <div
            className={`bg-slate-300 rounded-sm flex flex-col items-center justify-center gap-[4px] w-[36px] h-[30px]`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-[3px] rounded bg-primary transition-all duration-600 ease-in-out transform ${
                menuOpen ? "-rotate-[47deg]  translate-y-[7px]" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] rounded bg-primary  transition-all duration-600 ease-in-out ${
                menuOpen ? "w-1" : "w-6"
              }`}
            ></div>
            <div
              className={`w-6 h-[3px] rounded bg-primary  transition-all duration-600 ease-in-out transform ${
                menuOpen ? "rotate-[47deg]  -translate-y-[7px]" : ""
              }`}
            ></div>
          </div>
        </div>
      </header>
    </section>
  );
};
