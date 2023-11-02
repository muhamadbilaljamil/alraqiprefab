import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import aboutImg1 from "../../assets/image/about/about-g1.png";
import aboutImg2 from "../../assets/image/about/about-g2.png";
import aboutImg3 from "../../assets/image/about/about-g3.png";

const whyData = [
  {
    title: "Unparalleled Quality",
    description:
      "Alraqi Prefab is synonymous with quality. Our products are meticulously designed and crafted to meet the highest industry standards. We use premium materials and state-of-the-art technology to ensure durability and longevity. When you choose Alraqi Prefab, you're investing in products that will stand the test of time.",
  },
  {
    title: "Versatile Product Range",
    description:
      "We understand that every project is unique. That's why Alraqi Prefab offers a wide range of prefab solutions, from modular buildings and residential units to industrial structures and commercial spaces. Our versatility ensures that we can meet the specific needs of your project, no matter how diverse or challenging they may be.",
  },
  {
    title: "Customization Options",
    description:
      "We believe in providing tailor-made solutions to our clients. Alraqi Prefab offers extensive customization options, allowing you to personalize your prefab structures to match your exact requirements. From design to finishes, we work closely with you to bring your vision to life.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "At Alraqi Prefab, we believe that quality shouldn't come at a premium. We offer cost-effective prefab solutions that don't compromise on quality. Our efficient manufacturing processes and supply chain management allow us to provide you with competitively priced products.",
  },
  {
    title: "Timely Delivery",
    description:
      "Time is of the essence in the construction and development industry. Alraqi Prefab understands the importance of meeting deadlines. We pride ourselves on delivering products on time, ensuring that your project stays on schedule and within budget.",
  },
  {
    title: "Expertise and Support",
    description:
      "Our team of skilled professionals boasts years of experience in the prefab industry. We provide expert guidance and support throughout your journey with us, from the initial consultation to project completion. You can rely on us for advice, problem-solving, and efficient project management.",
  },
  {
    title: "Sustainability",
    description:
      "Alraqi Prefab is committed to environmental responsibility. Our sustainable practices and use of eco-friendly materials not only benefit the planet but also ensure that your project complies with the latest environmental standards and regulations.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "The satisfaction of our customers is at the heart of everything we do. We strive for excellence and continuously work to exceed your expectations. Our commitment to customer satisfaction has earned us a loyal client base and numerous positive testimonials.",
  },
];

function AboutWrapperArea() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about-main-wrappper mt-[90px] md:mt-[200px]">
        <div className="container max-w-[1340px] mx-auto">
          <div className="about-tab-wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <div className="about-tab-image-grid text-center">
                  <div className="about-video d-inline-block w-[80%] mx-auto -mb-[25px]">
                    <img src={aboutImg2} alt="aboutIMG" />
                    <div className="video-overlay">
                      <div className="play-icon video-popup">
                        <i
                          onClick={() => setOpen(true)}
                          className="bi bi-play-fill"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <div className="about-image">
                        <img src={aboutImg1} alt="aboutIMG" />
                      </div>
                    </div>
                    <div className="">
                      <div className="about-image">
                        <img src={aboutImg3} alt="aboutIMG" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 mt-5 mt-lg-0">
                <div className="about-tab-wrap">
                  <h2 className="font-spaceG font-extrabold text-[34px] md:text-[45px] leading-normal">
                    About Our Company And{" "}
                    <span className="text-orange">What We Are</span> Offer.
                  </h2>
                  <p className="text-lg text-justify leading-[1.3] my-3">
                    AlRaqi Prefab is your trusted partner in the world of
                    Prefabricated Buildings. With a strong presence in the GCC
                    region, we have established ourselves as pioneers in
                    manufacturing high-quality prefab solutions. Our diverse
                    range of products includes porta cabins, modular buildings,
                    toilet units, security cabins, mosques, villas, container
                    converted units, knock-down structures, and flat-pack
                    deliveries.
                  </p>
                  <p className="text-lg text-justify leading-[1.3] my-3">
                    We are dedicated to upholding the highest standards of
                    quality and workmanship. All our prefab structures are
                    meticulously crafted in our state-of-the-art facilities
                    located in the Sajjaa Industrial area, Sharjah. Our
                    facilities are designed to optimize efficiency and
                    workmanship, ensuring that we consistently deliver products
                    of unparalleled quality.
                  </p>
                  <p className="text-lg text-justify leading-[1.3] my-3">
                    Our commitment to excellence extends to the materials and
                    processes we employ. AlRaqi Prefab sources top-quality
                    tools, anchors, and adhesives from trusted suppliers,
                    ensuring that every component of our structures meets or
                    exceeds industry standards. We meticulously apply these
                    materials under the right conditions to optimize the
                    performance and durability of our prefab solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[10px] md:pt-110 px-4">
            <h2 className="font-spaceG font-extrabold text-[34px] md:text-[45px] leading-normal">
              Why Select <span className="text-orange">AlRaqi Prefab?</span>
            </h2>
            <h2 className="about-wrap-subtitle">
              Your Premier Destination for Quality{" "}
              <span>Products and Services</span>
            </h2>
            <div className="achievement-counter-wrap my-6 md:mt-16">
              <div className="achievement-counter-cards grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyData.map((item, index) => (
                  <div
                    key={index}
                    className="achievement-counter-card flex flex-col justify-start"
                  >
                    <div className="counter-box mb-sm-0 mb-3">
                      <h6>{item.title}</h6>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="3SsK-cxlj_w"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default AboutWrapperArea;
