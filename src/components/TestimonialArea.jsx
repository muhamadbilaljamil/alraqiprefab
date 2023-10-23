import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import reviewerbg from "../assets/image/reviewer/reviewer.png";
import avatar1 from "../assets/image/reviewer/r-sm1.png";
import avatar2 from "../assets/image/reviewer/r-sm2.png";
import avatar3 from "../assets/image/reviewer/r-sm3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const testData = [
  {
    name: "Ahmed Al-Mansoori",
    location: "Dubai",
    avatar: avatar1,
    says: "Alraqi Prefab exceeded my expectations. Their attention to detail and commitment to quality are commendable. The team was responsive and made the entire process seamless. I would recommend them to anyone seeking prefab solutions.",
  },
  {
    name: "Fatima Al-Hashemi",
    location: "Abu Dhabi",
    avatar: avatar3,
    says: "Alraqi Prefab is a game-changer in the prefab industry. They provided me with a stunning modular structure for my business, which was not only cost-effective but also completed ahead of schedule. Their professionalism is unmatched.",
  },
  {
    name: "Khaled Al-Suwaidi",
    location: "Sharjah",
    avatar: avatar2,
    says: "I chose Alraqi Prefab for my residential project, and I couldn't be happier with the results. The construction process was efficient, and the final product is both durable and aesthetically pleasing. I'm thankful for their expertise and commitment to quality.",
  },
  {
    name: "Sara Al-Khatri",
    location: "Ras Al Khaimah",
    avatar: avatar3,
    says: "I had the pleasure of working with Alraqi Prefab for my villa construction project. Their ability to tailor designs to my exact preferences and the speed with which they executed the project were truly impressive. I'm a satisfied customer.",
  },
  {
    name: "Ali Al-Qubaisi",
    location: "Fujairah",
    avatar: avatar1,
    says: "Alraqi Prefab offers innovative solutions and exceptional customer service. They were able to adapt to the unique requirements of my project and delivered results that surpassed my expectations. I would not hesitate to choose them again.",
  },
  {
    name: "Mariam Al-Hamad",
    location: "Umm Al-Quwain",
    avatar: avatar3,
    says: "Alraqi Prefab is a company I can rely on. They provided me with an eco-friendly prefab structure that aligns perfectly with my vision. Their team's dedication and commitment to sustainability are truly admirable.",
  },
];

function TestimonialArea() {
  const testimonialSlider = {
    modules: [Navigation, Autoplay, Pagination, EffectFade],
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".testi-next",
      prevEl: ".testi-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <div className="testimonial-area testimonial-style-one mt-110">
        <div className="testimonial-shape-group" />
        <div className="container max-w-[1320px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-[8fr_1fr] align-items-center">
            <div className="">
              <div className="section-head-alpha">
                <h2>
                  What Our Clients Say About <span>Alraqi Prefab</span>
                </h2>
                <p>
                  At Alraqi Prefab, we take immense pride in delivering
                  top-notch prefab solutions to our clients in the UAE. Our
                  commitment to excellence and customer satisfaction has earned
                  us the trust and appreciation of our valued customers. Here's
                  what some of our clients have to say about their experiences
                  with us:
                </p>
              </div>
            </div>
            <div className="">
              <div className="md:flex slider-arrows text-center d-lg-flex d-none justify-content-end mb-3">
                <div className="testi-prev custom-swiper-prev" tabIndex={0}>
                  <i className="bi bi-chevron-left" />
                </div>
                <div className="testi-next custom-swiper-next" tabIndex={0}>
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
          </div>
          <Swiper
            {...testimonialSlider}
            className="swiper testimonial-slider-one position-relative"
          >
            <div className="swiper-wrapper">
              {testData.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="testimonial-card testimonial-card-alpha">
                    <div className="testimonial-overlay-img">
                      <img src={reviewerbg} alt="images" />
                    </div>
                    <div className="testimonial-card-top">
                      <div className="qoute-icon">
                        <i className="bx bxs-quote-left" />
                      </div>
                      <div className="testimonial-thumb">
                        <img src={item.avatar} alt="images" />
                      </div>
                      <h3 className="testimonial-count">{`0${index + 1}`}</h3>
                    </div>
                    <div className="testimonial-body">
                      <p>{item.says}</p>
                      <div className="testimonial-bottom">
                        <div className="reviewer-info">
                          <h4 className="reviewer-name">{item.name}</h4>
                          <h6>{item.location}</h6>
                        </div>
                        <ul className="testimonial-rating">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TestimonialArea;
