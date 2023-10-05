import React from "react";
import { ReactComponent as Handshake } from "../../assets/icons/handshake-solid.svg";
import { ReactComponent as Global } from "../../assets/icons/globe-solid.svg";
import { ReactComponent as AddressCard } from "../../assets/icons/address-card-regular.svg";
import { ReactComponent as File } from "../../assets/icons/file-lines-regular.svg";
import { ReactComponent as Clander } from "../../assets/icons/calendar-days-solid.svg";

const listData = [
  {
    icon: <Handshake height={35} fill="var(--blue)" />,
    title: "In-Person Events",
    description:
      "Amplify your reach through a tailored presence at our high-level events",
  },
  {
    icon: <Global height={35} fill="var(--blue)" />,
    title: "Digital Services",
    description:
      "Create dedicated digital sessions designed to attract your target audience",
  },
  {
    icon: <AddressCard height={35} fill="var(--blue)" />,
    title: "Lead Generation",
    description:
      "Curated environments designed to create meaningful conversations",
  },
  {
    icon: <File height={35} fill="var(--blue)" />,
    title: "Content Services",
    description: "Create exposure and drive messaging to target demographics",
  },
  {
    icon: <Clander height={35} fill="var(--blue)" />,
    title: "Event Management",
    description:
      "Bespoke event creation, management and marketing built to your design",
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
    <div className="w-full px-[50px] pt-[110px] pb-[130px] bg-sceondary relative">
      <div className="max-w-[1500px] mx-auto flex z-10 relative">
        <div className="max-w-[710px] pr-[60px]">
          <div className="">
            <div className="mb-5">
              <h1 className="uppercase tracking-[3px] font-thin text-base">
                Services
              </h1>
            </div>
            <div>
              <h1 className="text-[58px] leading-[1.2] font-medium mb-10">
                Driving impact, awareness, and business generation
              </h1>
            </div>
            <div className="mb-[14px]">
              <h2 className="text-[22px] font-normal leading-[1.5] mb-5">
                Our extensive and engaged community extends across large,
                mid-size and innovative start-ups within the pharma and biotech
                space, with a dedicated audience spanning a range of
                specialisms. Whether you have content to share, are looking for
                ways to enhance your brand visibility or would like to increase
                engagement with prospective customers, Oxford Global can offer
                valuable access to your target demographic through our range of
                event & content services.
              </h2>
            </div>
            <button className={`${styles.rounded} ${styles.commonBtnProps}`}>
              Our Services
            </button>
          </div>
        </div>
        <div className="max-w-[790px] w-full p-3">
          <div className="flex flex-col">
            {listData.map((item, index) => {
              return (
                <div
                  className="flex gap-4 px-8 pt-2 pb-4 bg-white rounded-xl mb-[10px]"
                  key={index}
                >
                  <div className="flex items-center">{item.icon}</div>
                  <div>
                    <h1 className="mt-2 mb-[5px] text-[30px] font-[700] leading-normal">
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
