import React from "react";
import conferences_collaboration from "../../assets/videos/conferences_collaboration.mp4";
import conferences_connection from "../../assets/videos/conferences_connection.mp4";
import conferences_innovate from "../../assets/videos/conferences_innovate.mp4";

export const Hero = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-blue transition duration-300 hover:bg-white",
  };
  return (
    <div className="w-full pt-[150px] px-[50px] pb-[60px] ">
      <div className="max-w-[1360px] mx-auto flex justify-center md:justify-normal flex-wrap-reverse md:flex-nowrap">
        <div className="flex-2 p-3">
          <div>
            <h1 className="text-[60px] leading-[1.2] font-medium mb-10">
              Connect, Collaborate, Innovate
            </h1>
          </div>
          <div className="mb-[40px]">
            <h2 className="text-[36px] font-light leading-[1.5] mb-5">
              Connecting the life science community globally{" "}
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            <li className="min-w-[186px]">
              <button className={`${styles.rounded} ${styles.btnTopicArea}`}>
                Topic areas
              </button>
            </li>
            <li className="min-w-[186px]">
              <button className={`${styles.rounded} ${styles.commonBtnProps}`}>
                Services
              </button>
            </li>
            <li className="min-w-[186px]">
              <button className={`${styles.rounded} ${styles.commonBtnProps}`}>
                About us
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-5 p-3 flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-[300px] h-[300px] flex justify-center items-center">
              <video
                loop="true"
                autoplay="autoplay"
                muted
                className="w-[300px] h-[300px] rounded-full"
              >
                <source src={conferences_collaboration} type="video/mp4" />
              </video>
            </div>
            <div className="hidden w-[330px] h-[330px] md:flex justify-center items-center">
              <video
                loop="true"
                autoplay="autoplay"
                muted
                className="w-[260px] h-[260px] rounded-full"
              >
                <source src={conferences_connection} type="video/mp4" />
              </video>
            </div>
            <div className="hidden relative w-[224px] h-[224px] md:flex justify-center items-center">
              <video
                loop="true"
                autoplay="autoplay"
                muted
                className="absolute -top-4 w-[224px] h-[224px] rounded-full"
              >
                <source src={conferences_innovate} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
