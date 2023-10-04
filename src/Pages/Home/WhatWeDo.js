import React from "react";
import biologics from "../../assets/images/biologics.png";
import home_page from "../../assets/images/home_page.png";

export const WhatWeDo = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-blue transition duration-300 hover:bg-white",
  };
  return (
    <div className="w-full px-[50px] py-[80px] bg-white relative">
      <img
        src={biologics}
        alt="biologics"
        className="absolute z-0 top-0 right-0"
      />
      <div className="max-w-[1500px] mx-auto flex z-10 relative">
        <div className="max-w-[600px] pr-[60px]">
          <img src={home_page} alt="What we do" />
        </div>
        <div className="max-w-[900px] w-full p-3">
          <div className="">
            <div className="mb-5">
              <h1 className="font-medium text-base first-line:leading-normal">
                WHAT WE DO
              </h1>
            </div>
            <div>
              <h1 className="text-[58px] leading-[1.2] font-medium mb-10">
                Connecting the right people at the right time
              </h1>
            </div>
            <div className="mb-[14px]">
              <h2 className="text-[22px] font-normal leading-[1.5] mb-5">
                At Oxford Global, we believe in the power of knowledge and
                community. Our mission is to be the go-to source for industry
                news, trends, and insights, providing our audience with the
                tools they need to succeed in a rapidly evolving landscape.
              </h2>
            </div>
            <div className="mb-[34px]">
              <h2 className="text-[22px] font-normal leading-[1.5]">
                We are committed to driving real innovation and progress through
                thought leadership, community portals, and partnerships.
              </h2>
            </div>
            <button className={`${styles.rounded} ${styles.commonBtnProps}`}>
              About us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
