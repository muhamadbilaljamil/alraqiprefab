import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import porta_cabin1 from "../../assets/images/porta_cabin_1.jpeg";
import porta_cabin2 from "../../assets/images/porta_cabin_2.jpeg";
import porta_cabin3 from "../../assets/images/porta_cabin_3.jpeg";

export const SliderFull = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const HeroSlider = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    speed: 8000,
    spaceBetween: 0,
    loop: true,
    effect: "fade",

    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
    pagination: {
      el: ".hero-pagination",
      type: "custom",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        function numberAppend(d) {
          return d < 10 ? "0" + d.toString() : d.toString();
        }
        return numberAppend(current);
      },
    },
  };

  return (
    <div className="md:mt-28 mt-20 hero-area hero-style-one overflow-hidden">
      <div className="container-fluid p-0">
        <Swiper {...HeroSlider} className="swiper hero-slider-one">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="hero-single-slide ">
                <div className="hero-highlighted-bg ">
                  <img src={porta_cabin1} alt="images" />
                </div>
                <div className="hero-content-bg ">
                  <div className="hero-content position-relative">
                    <h2 className="hero-title">
                      Building <span>Your Dream Home, One Panel at a Time</span>
                    </h2>
                    <p>
                      Watch your vision come to life as we construct your dream
                      home with precision, using advanced prefab technology and
                      expert craftsmanship.
                    </p>
                    <div className="hero-btns">
                      <Link
                        to={`/`}
                        onClick={scrollTop}
                        className="button-outlined-primary"
                      >
                        Make A Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="hero-single-slide ">
                <div className="hero-highlighted-bg">
                  <img src={porta_cabin2} alt="images" />
                </div>
                <div className="hero-content-bg">
                  <div className="hero-content position-relative">
                    <h2 className="hero-title">
                      Sustainability <span>Meets Style</span>
                    </h2>
                    <p>
                      Discover how our eco-friendly prefab construction
                      solutions seamlessly combine sustainability and style,
                      creating homes that are as green as they are gorgeous.
                    </p>
                    <div className="hero-btns">
                      <Link
                        to={``}
                        onClick={scrollTop}
                        className="button-outlined-primary"
                      >
                        Make a Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="hero-single-slide ">
                <div className="hero-highlighted-bg">
                  <img src={porta_cabin3} alt="images" />
                </div>
                <div className="hero-content-bg">
                  <div className="hero-content position-relative">
                    <h2 className="hero-title">
                      Personalized <span>Perfection</span>
                    </h2>
                    <p>
                      Experience the joy of customization as we work hand in
                      hand with you to tailor your prefab home to your unique
                      tastes, needs, and aspirations.
                    </p>
                    <div className="hero-btns">
                      <Link
                        to={``}
                        onClick={scrollTop}
                        className="button-outlined-primary"
                      >
                        Make a Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="slider-arrows text-center d-lg-flex d-none">
        <div
          className="hero-prev"
          tabIndex={0}
          role="button"
          aria-label="Previous slide"
        >
          {" "}
          <i className="bi bi-arrow-left" /> Prev{" "}
        </div>
        <div
          className="hero-next"
          tabIndex={0}
          role="button"
          aria-label="Next slide"
        >
          Next <i className="bi bi-arrow-right" />
        </div>
      </div>
      <div className="hero-pagination d-block w-auto"></div>
    </div>
  );
};
