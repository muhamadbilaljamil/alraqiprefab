import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";

const menus = [
  { path: "/topic-area", title: "Topic area" },
  { path: "/services", title: "Services" },
  { path: "/about", title: "About" },
  // { path: "/oxford-global-plus", title: "Oxford Global PLUS" },
];

const NavBar = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  const [isScrolled , setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setIsScrolled(true) : setIsScrolled(false)
    }, { passive: true });

    return () => {
        window.removeEventListener('scroll', () => {});
    };
}, []);
  
  return (
    <section className="fixed right-0 left-0">
      <header
        className={`transition duration-300 flex h-24 justify-between px-10  ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
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
                  <div className="py-4 px-8 border-b-[4px] border-transparent transition duration-500 hover:border-b-[4px] hover:border-blue">
                    {item.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="min-w-[260px] hidden md:flex justify-end items-center">
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
              className={`w-6 h-[3px] rounded bg-primary  transition-all duration-600 ease-in-out ${
                menuOpen ? "w-1" : ""
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

export default NavBar;
