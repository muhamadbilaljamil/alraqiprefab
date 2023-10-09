import React from "react";
import { Link } from "react-router-dom";
import logo_1 from "../../assets/icons/logo_1.jpeg";
import { ReactComponent as Email } from "../../assets/icons/email_1.svg";
import { ReactComponent as Mobile } from "../../assets/icons/mobile_1.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp_1.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone_1.svg";

const styles = {
  icon: "w-12 h-12  bg-white flex justify-center items-center rounded-full",
};
// border-[1px] border-white/70

export const TopHeader = () => {
  return (
    <section className="absolute z-10 top-0 left-0 right-0 backdrop-blur bg-primary/80">
      <div className="container-c h-28 flex justify-between items-center px-4">
        <Link to="/">
          <img src={logo_1} alt="" className="h-28" />
        </Link>
        <div className="flex gap-x-4">
          <div className="flex gap-3 px-2">
            <div className={styles.icon}>
              {<Email width={26} height={26} fill={"#eaf3f6"} />}
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-semibold text-white">Email At</h1>
              <h1 className="text-sm text-white">info@alraqiprefab.com</h1>
            </div>
          </div>
          <div className="flex gap-3  px-2">
            <div className={styles.icon}>
              <Mobile width={28} height={28} fill="#eaf3f6" />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-semibold text-white">Mobile No</h1>
              <h1 className="text-sm text-white">+971 55 827 3554</h1>
            </div>
          </div>
          <div className="hidden lg:flex gap-3  px-2">
            <div className={styles.icon}>
              <Whatsapp width={26} height={26} />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-semibold text-white">What's App</h1>
              <h1 className="text-sm text-white">+971 55 827 3554</h1>
            </div>
          </div>
          <div className="hidden lgm:flex gap-3  px-2">
            <div className={styles.icon}>
              <Phone width={26} height={26} fill="#fff" />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-semibold text-white">Telephone</h1>
              <h1 className="text-sm text-white">------</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
