import React from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../../context/UseContext";
import logo_1 from "../../assets/icons/logo_1.jpeg";
import { ReactComponent as Email } from "../../assets/icons/email_1.svg";
import { ReactComponent as Mobile } from "../../assets/icons/mobile_1.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp_1.svg";

const styles = {
  icon: "w-10 h-10  bg-white flex justify-center items-center rounded-full",
  border: " border-[1px] border-primary/40 ",
};

const MobileMenu = () => {
  const { menuOpen, setMenuOpen } = useCtx();
  const menus = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/",
      title: "Services",
      icon: true,
      children: [
        { path: "/", title: "Porta Cabins" },
        { path: "/", title: "Security Cabins" },
        { path: "/", title: "Modular Concepts" },
        { path: "/", title: "Container Converted Units" },
        { path: "/", title: "Refurbished Units" },
        { path: "/", title: "Double Storey Units" },
        { path: "/", title: "Eye Wash Units" },
        { path: "/", title: "Toilet / GRP Units" },
        { path: "/", title: "Mosques" },
        { path: "/", title: "Villas" },
        { path: "/", title: "Majlis" },
      ],
    },
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
      <div className="flex flex-col justify-between h-full">
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
        <div className="flex gap-y-5 items-center flex-col">
          <div className="w-[290px] mx-auto flex gap-3 px-2 items-center ">
            <div className={`${styles.icon} ${styles.border}`}>
              {<Email width={20} height={20} fill={"#eaf3f6"} />}
            </div>
            <div className="flex flex-col justify-between ">
              <Link to="emailto:info@alraqiprefab.com">
                <h1 className="text-xs text-primary">info@alraqiprefab.com</h1>
              </Link>
              <Link to="emailto:sales@alraqiprefab.com">
                <h1 className="text-xs text-primary">sales@alraqiprefab.com</h1>
              </Link>
            </div>
          </div>

          <div className="w-[290px] mx-auto flex gap-3  px-2 items-center">
            <div className={`${styles.icon} ${styles.border}`}>
              <Mobile width={20} height={20} fill="#eaf3f6" />
            </div>
            <div className="flex flex-col justify-between">
              <Link to="tel:971558273554">
                <h1 className="text-xs text-primary">+971 55 827 3554</h1>
              </Link>
              <Link to="tel:971524844246">
                <h1 className="text-xs text-primary">+971 52 484 4246</h1>
              </Link>
            </div>
          </div>

          <Link
            to={"https://wa.me/971558273554"}
            className="w-[290px] mx-auto flex gap-3  px-2"
          >
            <div className={`${styles.icon} ${styles.border}`}>
              <Whatsapp width={20} height={20} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xs text-primary">+971 55 827 3554</h1>
            </div>
          </Link>

          <div className="w-full text-center hover:bg-blue/5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" w-full text-primary py-4 px-8 border-t-[1px] border-primary/10"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
