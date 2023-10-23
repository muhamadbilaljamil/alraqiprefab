import React from "react";
import PackageGrid from "../components/packageGrid/PackageGrid";
import { ReactComponent as RightArrow } from "../assets/icons/double_right_arrow_7.svg";
import porta_cabin from "../assets/images/porta_cabin_2.jpeg";

const DoubleRightArrow = () => (
  <RightArrow className="w-4 h-4 md:w-[20px] md:h-[20px]" stoke="orange" />
);

const whyData = [
  {
    title: "Prefabricated Buildings",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Residential Prefab Homes",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Commercial Prefabricated Structures",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Industrial Prefabricated Facilities",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Modular Offices and Workspaces",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Prefab Retail Spaces",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Educational and Healthcare Facilities",
      },
    ],
  },
  {
    title: "Custom Design and Engineering",

    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Collaborative Design Consultations",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Tailored Architectural Planning",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Structural Engineering Services",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Energy-Efficient and Sustainable Solutions",
      },
      {
        icon: <DoubleRightArrow />,
        title: "3D Visualization and Virtual Tours",
      },
    ],
  },
  {
    title: "Manufacturing and Fabrication",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "State-of-the-Art Production Facilities",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Use of Premium Materials",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Stringent Quality Control",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Efficient Production Processes",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Timely Delivery",
      },
    ],
  },
  {
    title: "Turnkey Construction Services",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Site Preparation and Foundation Work",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Transportation and Installation",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Utility Connections (Plumbing, Electrical, HVAC)",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Interior and Exterior Finishing",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Landscaping and Exterior Amenities",
      },
    ],
  },
  {
    title: "Sustainability and Green Building",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Energy-Efficient Design",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Solar Power Integration",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Sustainable Building Materials",
      },
      {
        icon: <DoubleRightArrow />,
        title: "LEED Certification Assistance",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Waste Reduction and Recycling",
      },
    ],
  },
  {
    title: "Maintenance and Renovation",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: " Routine Maintenance Services",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Building Renovation and Expansion",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Upgrades for Energy Efficiency",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Interior and Exterior Refreshment",
      },
    ],
  },
  {
    title: "Project Management and Consultation",

    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Experienced Project Managers",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Budgeting and Cost Estimation",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Site Assessment and Analysis",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Regulatory Compliance Assistance",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Construction Project Consultation",
      },
    ],
  },
  {
    title: "After-Sales Support",

    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Warranty Coverage",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Repair and Replacement Services",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Technical Support",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Customer Assistance Hotline",
      },
    ],
  },
  {
    title: "Additional Products",
    listData: [
      {
        icon: <DoubleRightArrow />,
        title: "Prefabricated Wall Panels",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Modular Roofing Systems",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Prefab Bathrooms and Kitchens",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Customized Furniture and Fixtures",
      },
      {
        icon: <DoubleRightArrow />,
        title: "Prefabricated Building Components",
      },
    ],
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
    <div className="about-main-wrappper w-full p-6 md:p-[50px] bg-secondary relative z-0 mt-[200px]">
      <div className="max-w-[1500px] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 z-10 relative">
          <div className="md:pr-[60px]">
            <div className="">
              <div className="mb-5">
                <h1 className="uppercase tracking-[3px] font-medium text-base text-orange">
                  Products & Services
                </h1>
              </div>
              <div>
                <h1 className="text-xl md:text-[40px] leading-[1.2] font-medium mb-10">
                  Products and Services Offered by Alraqi Prefab
                </h1>
              </div>
              <div className="mb-[14px]">
                <h2 className="text-base md:text-[22px] font-normal leading-[1.5] mb-5 text-justify">
                  At Alraqi Prefab, we take pride in providing high-quality,
                  innovative, and customizable prefab solutions that cater to a
                  wide range of residential, commercial, and industrial needs.
                  Our commitment to excellence in design, construction, and
                  sustainability ensures that our customers receive top-notch
                  products and services. Here is an overview of the products and
                  services we offer:
                </h2>
              </div>
            </div>
          </div>
          <div>
            <img src={[porta_cabin]} alt="Porta Cabin" />
          </div>
        </div>
        <div className="achievement-counter-wrap mt-16">
          <div className="achievement-counter-cards grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20">
            {whyData.map((item, index) => (
              <div
                key={index}
                className="achievement-counter-card flex flex-col justify-start"
              >
                <div className="counter-box mb-sm-0 mb-3">
                  <h6>{item.title}</h6>
                </div>
                <div>
                  <div className="md:p-3">
                    <div className="flex flex-col">
                      {item.listData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-4 py-2 px-4 md:px-6  bg-white rounded-xl mb-[10px]"
                            key={index}
                          >
                            <div className="flex items-center">{item.icon}</div>
                            <div>
                              <h1 className="text-base md:text-[16px] md:font-[400] leading-normal">
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
            ))}
          </div>
        </div>
      </div>
      <PackageGrid />
    </div>
  );
};
