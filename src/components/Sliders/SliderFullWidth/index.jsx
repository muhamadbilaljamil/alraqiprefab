import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import slide1 from "../../../assets/images/prefab_home_1.jpg";
import slide2 from "../../../assets/images/prefab_home_2.jpg";
import slide3 from "../../../assets/images/prefab_home_3.jpg";
import slide4 from "../../../assets/images/prefab_home_4.jpg";
import slide5 from "../../../assets/images/prefab_home_5.jpg";
import slide6 from "../../../assets/images/prefab_home_6.jpg";
import slide7 from "../../../assets/images/prefab_home_7.jpg";
import slide8 from "../../../assets/images/prefab_home_8.jpg";
import slide9 from "../../../assets/images/prefab_home_9.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const slideData = [
  {
    image: slide1,
    info: "One of the best organized conferences that we have attended. Oxford Global was very focused on helping us make the most of the event, from coordinating multiple high-value meetings on our behalf to giving us tools like the event app to make networking simple and effective",
    writer: "Head of Scientific Operations",
    des: "Sapient Bioanalytics",
  },
  {
    image: slide2,
    info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
    writer: "Head of Target & Biomarker Discovery",
    des: "ABZU",
  },
  {
    image: slide3,
    info: "It's very fruitful to listen to other key person in other companies how to solve the same problems. This event surpassed my expectations [...] this was an open exchange between persons that have true relevant knowledge in that field",
    writer: "Monthly Science Exchange Attendee",
  },
  {
    image: slide4,
    info: "One of the best organized conferences that we have attended. Oxford Global was very focused on helping us make the most of the event, from coordinating multiple high-value meetings on our behalf to giving us tools like the event app to make networking simple and effective",
    writer: "Head of Scientific Operations",
    des: "Sapient Bioanalytics",
  },
  {
    image: slide5,
    info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
    writer: "Head of Target & Biomarker Discovery",
    des: "ABZU",
  },
  {
    image: slide6,
    info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
    writer: "Head of Target & Biomarker Discovery",
    des: "ABZU",
  },
  {
    image: slide7,
    info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
    writer: "Head of Target & Biomarker Discovery",
    des: "ABZU",
  },
  {
    image: slide8,
    info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
    writer: "Head of Target & Biomarker Discovery",
    des: "ABZU",
  },
];

export const SliderFull = () => {
  return (
    <div className="relative">
      <Swiper
        className="ralative z-0 h-[320px] mt-28 md:mt-0 md:h-[450px] lg:h-[650px] xl:h-[950px] overflow-hidden"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        pagination={true}
        // navigation={true}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        loopPreventsSliding={true}
      >
        {slideData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={item.image} alt={item.info} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
