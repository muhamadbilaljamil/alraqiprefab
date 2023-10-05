import React from "react";
import { ReactComponent as Biologics } from "../../assets/icons/biologics.svg";
import { ReactComponent as Biomarkers } from "../../assets/icons/biomarkers.svg";
import { ReactComponent as Cell_gene } from "../../assets/icons/cell_&_gene.svg";
import { ReactComponent as Discovery } from "../../assets/icons/discovery.svg";
import { ReactComponent as FormulationDelivery } from "../../assets/icons/formulation_&_delivery.svg";
import { ReactComponent as Immuno } from "../../assets/icons/immuno.svg";
import { ReactComponent as Omics } from "../../assets/icons/omics.svg";
import { ReactComponent as PharmaTec } from "../../assets/icons/pharma_tec.svg";
import { ReactComponent as Sustainability } from "../../assets/icons/sustainability.svg";

const cardsInfo = [
  {
    icon: <Biologics width={75} height={75} fill="var(--blue)" />,
    title: "Biologics",
    description:
      "Accelerating Biologics Research for Unleashing Their Full Therapeutic Potential",
  },
  {
    icon: <Biomarkers width={75} height={75} fill="var(--blue)" />,
    title: "Biomarkers",
    description:
      "Revolutionizing Biomarker Research Across Therapeutic Areas and Drug Development Stages",
  },
  {
    icon: <Cell_gene width={75} height={75} fill="var(--blue)" />,
    title: "Cell & Gene",
    description:
      "Advancing Cell & Gene Development for Clinical and Commercial Success",
  },
  {
    icon: <Discovery width={75} height={75} fill="var(--blue)" />,
    title: "Discovery",
    description:
      "Accelerating Drug Discovery Pipelines and Research Collaborations for Faster Results",
  },
  {
    icon: <FormulationDelivery width={75} height={75} fill="var(--blue)" />,
    title: "Formulation & Delivery",
    description:
      "Enhancing Therapeutic Modalities with Advanced Drug Formulation, Delivery and Product Development",
  },
  {
    icon: <Immuno width={75} height={75} fill="var(--blue)" />,
    title: "Immuno",
    description:
      "Redefining Patient Care with Innovative and Accelerated Immunotherapy Design and Delivery",
  },
  {
    icon: <Omics width={75} height={75} fill="var(--blue)" />,
    title: "Omics",
    description:
      "Elevating Disease Insights with Multi-Omics Approaches for Precision Treatment",
  },
  {
    icon: <PharmaTec width={75} height={75} fill="var(--blue)" />,
    title: "Pharma Tec",
    description:
      "Digitally Transforming Pharma R&D and Patient Health for Better Outcomes",
  },
  {
    icon: <Sustainability width={75} height={75} fill="var(--blue)" />,
    title: "Sustainability",
    description:
      "Empowering Individuals and Teams to Accelerate the Transition to Sustainable Healthcare",
  },
];

export const TopicAreas = () => {
  const styles = {};
  return (
    <div className="p-12">
      <div className="max-w-[1500px] mx-auto p-3">
        <div className="mb-5">
          <h1 className="uppercase tracking-[3px] font-thin text-base text-center">
            TOPIC AREAS
          </h1>
        </div>
        <div className="mb-5">
          <h1 className="font-medium text-[58px] text-center leading-normal">
            Explore the Areas
          </h1>
        </div>
        <div className="px-[15%] mb-10">
          <h2 className="text-[26px] font-medium leading-normal text-center mb-5">
            Our brands bring together the industry's most influential leaders
            and scientific experts, inspiring thought-provoking and insightful
            content that offers a unique perspective on R&D trends and
            challenges
          </h2>
        </div>
        <div className="flex flex-wrap">
          {cardsInfo.map((card, index) => {
            return (
              <div className="min-w-[33.3%] max-w-[33.3%] p-3" key={index}>
                <div className="group bg-secondary transition duration-300 p-6 rounded-xl hover:bg-primary">
                  <div className="mb-4">{card.icon}</div>
                  <div className="mb-4">
                    <h1 className="transition duration-300 font-bold text-3xl group-hover:text-white">
                      {card.title}
                    </h1>
                  </div>
                  <div className="">
                    <h2 className="transition duration-300 font-normal text-xl  group-hover:text-white">
                      {card.description}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
