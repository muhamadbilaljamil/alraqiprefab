import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { SRLWrapper } from "simple-react-lightbox";

import g_sm1 from "../../assets/image/gallary/g-sm1.png";
import tourfullscreen02 from "../../assets/image/gallary/tourfullscreen02.png";

import g_sm2 from "../../assets/image/gallary/g-sm2.png";
import tourfullscreen07 from "../../assets/image/gallary/tourfullscreen07.png";

import g_11 from "../../assets/image/gallary/g-11.png";
import tourfullscreen03 from "../../assets/image/gallary/tourfullscreen03.png";

import g_xl1 from "../../assets/image/gallary/g-xl1.png";
import tourfullscreen04 from "../../assets/image/gallary/tourfullscreen04.png";

import g_12 from "../../assets/image/gallary/g-12.png";
import tourfullscreen05 from "../../assets/image/gallary/tourfullscreen05.png";

import g_xl2 from "../../assets/image/gallary/g-xl2.png";
import tourfullscreen01 from "../../assets/image/gallary/tourfullscreen01.png";

import g_13 from "../../assets/image/gallary/g-13.png";
import tourfullscreen06 from "../../assets/image/gallary/tourfullscreen06.png";

function GallaryWrapper() {
  const gallarySlideOne = {
    modules: [Navigation, Autoplay, Pagination, EffectFade],
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    autoplay: {
      delay: 9000,
    },
    navigation: {
      nextEl: ".gallary-next1",
      prevEl: ".gallary-prev1",
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  const gallaryslidertwo = {
    modules: [Navigation, Autoplay, Pagination, EffectFade],
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    autoplay: {
      delay: 12000,
    },
    navigation: {
      nextEl: ".gallary-next2",
      prevEl: ".gallary-prev2",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <SRLWrapper>
        <div className="gallary-wrapper mt-32">
          <div className="container mx-auto">
            <div className="gallary-group pt-110">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Projects Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div className="gallary-button-prev gallary-prev1">
                    <i className="bi bi-chevron-double-left" />
                  </div>
                  <div className="gallary-button-next gallary-next1">
                    <i className="bi bi-chevron-double-right" />
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="row">
                  <Swiper
                    {...gallarySlideOne}
                    className="swiper  gallary-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={g_sm1} alt="ImageGallery" />
                          <a
                            href={tourfullscreen02}
                            className="gallary-item-overlay"
                          >
                            <img src={g_sm1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={g_sm2} alt="ImageGallery" />
                          <a
                            href={tourfullscreen07}
                            className="gallary-item-overlay"
                          >
                            <img src={g_sm2} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={g_11} alt="ImageGallery" />
                          <a
                            href={tourfullscreen03}
                            className="gallary-item-overlay"
                          >
                            <img src={g_11} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={g_xl1} alt="ImageGallery" />
                          <a
                            className="gallary-item-overlay"
                            href={tourfullscreen04}
                          >
                            <img src={g_xl1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={g_12} alt="ImageGallery" />
                          <a
                            href={tourfullscreen05}
                            className="gallary-item-overlay"
                          >
                            <img src={g_12} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={g_xl2} alt="ImageGallery" />
                          <a
                            href={tourfullscreen01}
                            className="gallary-item-overlay"
                          >
                            <img src={g_xl2} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={g_13} alt="ImageGallery" />
                          <a
                            href={tourfullscreen06}
                            className="gallary-item-overlay"
                          >
                            <img src={g_13} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* <div className="gallary-group pt-110">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Project's Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div
                    className="gallary-button-prev gallary-prev2"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-double-left" />
                  </div>
                  <div
                    className="gallary-button-next gallary-next2"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-double-right" />
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="row">
                  <Swiper
                    {...gallaryslidertwo}
                    className="swiper gallary-slider2"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a className="gallary-item-overlay" href={image1}>
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img src={image1} alt="ImageGallery" />
                          <a href={image1} className="gallary-item-overlay">
                            <img src={image1} alt="ImageGallery" />
                          </a>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}
export default GallaryWrapper;
