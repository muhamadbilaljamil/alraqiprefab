import React from "react";
import topArrow from "../../assets/icons/whatsapp_2.svg";
import { Link } from "react-router-dom";

export const SocialIcons = () => {
  return (
    <Link to="https://wa.me/971558273554">
      <div className="fixed bottom-[80px] right-[15px] flex justify-center items-center z-50 w-12 h-12 rounded-[50px] bg-[#67c15e] shadow-md shadow-primary/40">
        <button onClick={() => {}}>
          <img src={topArrow} alt="top arrow icon" width={34} />
        </button>
      </div>
    </Link>
  );
};
