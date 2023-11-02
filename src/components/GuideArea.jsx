import React from "react";
import GuideCardGama from "./GuideCardGama";
import team1 from "../assets/image/guide/guide-md4.png";
import team2 from "../assets/image/guide/guide-md5.png";
import team3 from "../assets/image/guide/guide-md6.png";
import team4 from "../assets/image/guide/guide-md7.png";
import team5 from "../assets/image/guide/guide-md8.png";
import team6 from "../assets/image/guide/guide-md12.png";
import team7 from "../assets/image/guide/guide-md10.png";
import team8 from "../assets/image/guide/guide-md11.png";

const teamData = [
  {
    name: "----",
    designation: "Founder/CEO",
    about:
      "As the visionary leader of Alraqi Prefab, [Founder/CEO Name] founded the company with a passion for revolutionizing the construction industry. With [number] years of experience, [Founder/CEO Name] continues to drive our company's growth and innovation.",
    image: team1,
  },
  {
    name: "----",
    designation: "Operations Director",
    about:
      "Responsible for overseeing the day-to-day operations, [Operations Director Name] ensures our projects run smoothly and efficiently. With a background in [relevant industry experience], [Operations Director Name] is a key figure in maintaining our high standards.",
    image: team2,
  },
  {
    name: "----",
    designation: "Design and Engineering Lead ",
    about:
      "Our design and engineering lead, [Design and Engineering Lead Name], is the creative mind behind our prefab designs. With a degree in [relevant field] and [number] years of experience, [Design and Engineering Lead Name] brings innovation to every project.",
    image: team3,
  },
  {
    name: "----",
    designation: "Production Manager",
    about:
      "[Production Manager Name] manages our state-of-the-art manufacturing facility, ensuring that our prefab components are built to the highest standards of quality. Their [number] years of experience in [manufacturing industry] make them an invaluable part of the team.",
    image: team4,
  },
  {
    name: "----",
    designation: "Sales and Marketing Director",
    about:
      "Our Sales and Marketing Director, [Sales and Marketing Director Name], is responsible for spreading the word about our cutting-edge prefab solutions. With a background in [marketing or sales experience], they are passionate about connecting with clients.",
    image: team5,
  },
  {
    name: "----",
    designation: "Project Manager",
    about:
      "Our project managers, such as [Project Manager Name], are the driving force behind the successful execution of prefab projects. With a strong background in project management and [relevant industry experience], they ensure our clients' needs are met on time and on budget.",
    image: team6,
  },
  {
    name: "----",
    designation: "Architectural Designer ",
    about:
      "[Architectural Designer Name] is the creative genius responsible for the aesthetics of our prefab designs. With a background in [architecture or design], they infuse our projects with beauty and functionality.",
    image: team7,
  },
  {
    name: "----",
    designation: "Construction Supervisor",
    about:
      "On-site, our construction supervisors, like [Construction Supervisor Name], are dedicated to ensuring that every prefab component is assembled correctly and safely. Their expertise in [construction industry] is unmatched.",
    image: team8,
  },
];

function GuideArea() {
  return (
    <>
      <div className="guide-area guide-style-one px-4 py-6 md:py-32">
        <div className="container max-w-[1320px] mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>Meet the Team</h2>
                <p className="my-4">
                  At Alraqi Prefab, we take pride in the skilled and dedicated
                  team of professionals who work tirelessly to deliver
                  exceptional prefab solutions. Our team is the driving force
                  behind our success, bringing together diverse talents and
                  expertise to provide innovative and sustainable building
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((team, index) => (
              <GuideCardGama team={team} index={index} />
            ))}
          </div>
          <div className="pt-8 md:pt-16">
            <p>
              These are just a few of the dedicated professionals who make up
              the Alraqi Prefab team. We believe that our people are our
              greatest asset, and their collective expertise and commitment to
              excellence are what set us apart in the world of prefab
              construction.
            </p>
            <p>
              If you'd like to learn more about our team or get in touch with
              any of our experts, please don't hesitate to reach out. We look
              forward to working with you on your next prefab project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideArea;
