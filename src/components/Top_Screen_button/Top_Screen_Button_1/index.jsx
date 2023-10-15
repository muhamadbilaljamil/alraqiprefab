import React, { useEffect } from "react";
import "./Top_Screen_Button_1.css";
import { scrollController } from "./scrollController";
import topArrow from "../../../assets/icons/double_right_arrow_8.svg";
import { useCtx } from "../../../context/UseContext";

const Top_Screen_Button_1 = () => {
  const handleScrollTop = () => {
    console.log("Handle Scroll");
    window.scroll({
      top: 0,
      // left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollController();
  }, []);

  return (
    <div className="top-screen-button-wrapper" id="top-screen-button">
      <button onClick={handleScrollTop}>
        <img src={topArrow} alt="top arrow icon" />{" "}
      </button>
    </div>
  );
};

export default Top_Screen_Button_1;
