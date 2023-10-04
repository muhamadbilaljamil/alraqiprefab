import React from "react";
import cell from "../../assets/images/cells.png";
import community from "../../assets/images/our-community-and-culture.jpg";

export const CommunityCulture = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-white transition duration-300 hover:bg-blue",
  };
  return (
    <div className="w-full px-[50px] py-[80px] bg-white relative">
      <img src={cell} alt="cells" className="absolute z-0 top-0 right-0" />
      <div className="max-w-[1500px] mx-auto flex z-10 relative">
        <div className="max-w-[450px] min-w-[450px] flex justify-center items-center">
          <div className="flex justify-center items-center w-80 h-80 rounded-full overflow-hidden">
            <img src={community} alt="What we do" className="scale-150" />
          </div>
        </div>
        <div className="max-w-[900px] w-full p-3">
          <div className="">
            <div className="mb-5">
              <h1 className="font-medium text-base first-line:leading-normal">
                COMMUNITY & CULTURE
              </h1>
            </div>
            <div>
              <h1 className="text-[58px] leading-[1.2] font-medium mb-10">
                Creating positive impact
              </h1>
            </div>
            <div className="mb-[14px]">
              <h2 className="text-[22px] font-normal leading-[1.5] mb-5">
                Oxford Global is committed both to promoting and using
                sustainable practises to ensure positive impact, and to meeting
                our goals of driving innovation, collaboration, and connection
                across the industry landscape.
              </h2>
            </div>
            <div className="mb-[34px]">
              <h2 className="text-[22px] font-normal leading-[1.5]">
                We are an ambitious and responsible business that aims to meet
                the highest standards of ethics and professionalism, with a
                commitment to legality and willingness to observe community
                values, and proactiveness to promote human rights, help
                communities and protect our natural environment.
              </h2>
            </div>
            <button className={`${styles.rounded} ${styles.btnTopicArea}`}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
