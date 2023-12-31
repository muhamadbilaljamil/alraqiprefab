import React from "react";
import { Slider } from "./Slider";

export const OurPeople = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-blue transition duration-300 hover:bg-white",
  };
  return (
    <div className="w-full px-[50px]  bg-white relative">
      <div className="max-w-[1500px] mx-auto flex z-10 relative">
        <div className="max-w-[555px] pr-[60px] flex flex-col justify-center">
          <div className="mb-5">
            <h1 className="uppercase tracking-[3px] font-thin text-base">
              OUR PEOPLE
            </h1>
          </div>
          <div>
            <h1 className="text-[38px] leading-[1.2] font-medium mb-10">
              What our community is saying...
            </h1>
          </div>
          <div className="mb-[14px]">
            <h2 className="text-[22px] font-normal leading-[1.5] mb-5">
              From knowledge sharing to high-value 1-2-1 meetings, our events
              are packed with networking, education, and insight.
            </h2>
          </div>
        </div>
        <div className="max-w-[945px] w-full p-3">
          <Slider />
        </div>
      </div>
    </div>
  );
};
