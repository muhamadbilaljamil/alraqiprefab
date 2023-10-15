import React from "react";
import home_1 from "../../assets/images/house_1.jpg";

export const WhatWeDo = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-blue transition duration-300 hover:bg-white",
  };
  return (
    <div className="w-full md:p-[50px] bg-white relative">
      <div className="max-w-[1500px] grid  grid-col-1 md:grid-cols-2 mx-auto z-10 relative">
        <div className="border-[1px] border-primary m-6 p-1 md:m-10 md:p-4 h-fit">
          <img src={home_1} alt="What we do" />
        </div>
        <div className="w-full p-6 md:px-6 md:py-3">
          <div className="mb-5">
            <h1 className="uppercase tracking-[3px] font-thin text-base">
              WHO WE ARE
            </h1>
          </div>
          <div>
            <h1 className="text-xl md:text-[40px] leading-[1.2] font-medium mb-10">
              Where Vision Meets Foundation
            </h1>
          </div>
          <div className="mb-[14px]">
            <h2 className="text-base md:text-[22px] font-normal leading-[1.5] mb-5 text-justify">
              At AL-RAQI PREFAB, we are more than just a prefab house company;
              we are visionary creators of exceptional living spaces. With a
              legacy spanning 14 years in the UAE's construction and housing
              industry, we have consistently pushed the boundaries of
              innovation, design, and sustainability.
            </h2>
          </div>
          <div className="mb-[34px]">
            <h2 className="text-base md:text-[22px] font-normal leading-[1.5] text-justify">
              As industry pioneers, we have honed our craft and expertise,
              evolving into a leader in the prefab housing sector. We take
              immense pride in our ability to craft bespoke homes that
              seamlessly blend aesthetics, functionality, and eco-friendliness.
              As industry pioneers, we have honed our craft and expertise,
              evolving into a leader in the prefab housing sector. We take
              immense pride in our ability to craft bespoke homes that
              seamlessly blend aesthetics, functionality, and eco-friendliness.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
