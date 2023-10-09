import React from "react";
import { ReactComponent as Handshake } from "../../assets/icons/handshake-solid.svg";
import { ReactComponent as Global } from "../../assets/icons/globe-solid.svg";
import { ReactComponent as AddressCard } from "../../assets/icons/address-card-regular.svg";
import { ReactComponent as File } from "../../assets/icons/file-lines-regular.svg";
import { ReactComponent as Clander } from "../../assets/icons/calendar-days-solid.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/double_right_arrow_7.svg";

const listData = [
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Porta Cabins",
    // description:
    // "Amplify your reach through a tailored presence at our high-level events",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Container Converted Units",
    // description:
    // "Create dedicated digital sessions designed to attract your target audience",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Modular Concepts",
    // description:
    // "Curated environments designed to create meaningful conversations",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Villas",
    // description: "Create exposure and drive messaging to target demographics",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Refurbished Units",
    // description:
    // "Bespoke event creation, management and marketing built to your design",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Double Storey Units",
    // description:
    // "Bespoke event creation, management and marketing built to your design",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Mosques",
    // description:
    // "Bespoke event creation, management and marketing built to your design",
  },
  {
    icon: <RightArrow height={35} width={35} />,
    title: "Majlis",
    // description:
    // "Bespoke event creation, management and marketing built to your design",
  },
];

export const Services = () => {
  const styles = {
    rounded:
      "px-10 py-4 rounded-full border-[1px] border-blue text-primary text-4 font-medium",
    commonBtnProps: "transition duration-300 hover:bg-white",
    btnTopicArea: "bg-blue transition duration-300 hover:bg-white",
  };
  return (
    <div className="w-full p-[50px] bg-sceondary relative">
      <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-2 mx-auto z-10 relative">
        <div className="pr-[60px]">
          <div className="">
            <div className="mb-5">
              <h1 className="uppercase tracking-[3px] font-thin text-base">
                Products & Services
              </h1>
            </div>
            <div>
              <h1 className="text-[40px] leading-[1.2] font-medium mb-10">
                Building the Future, One Prefab at a Time
              </h1>
            </div>
            <div className="mb-[14px]">
              <h2 className="text-[22px] font-normal leading-[1.5] mb-5 text-justify">
                At Al Raqi Prefab, we understand that every homeowner's vision
                is unique. That's why we offer comprehensive customization
                options. Work closely with our expert design team to bring your
                dream home to life, tailoring every detail to your preferences.
                From layout adjustments to interior finishes, your home will
                reflect your distinct style and needs.We are dedicated to
                sustainable construction practices that minimize our
                environmental footprint and reduce energy consumption. Our
                prefab homes are designed with eco-friendly materials and
                energy-efficient features, ensuring not only a comfortable
                living space but also a commitment to a greener future.
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-col">
            {listData.map((item, index) => {
              return (
                <div
                  className="flex gap-4 px-8 pt-2 pb-4 bg-white rounded-xl mb-[10px]"
                  key={index}
                >
                  <div className="flex items-center">{item.icon}</div>
                  <div>
                    <h1 className="mt-2 mb-[5px] text-[22px] font-[700] leading-normal">
                      {item.title}
                    </h1>
                    <h2 className="text-[16px] font-[400] leading-normal">
                      {item.description}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
