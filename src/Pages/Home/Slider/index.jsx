// import React, { useState, useLayoutEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import "./Slider.css";

// const slideData = [
//   {
//     info: "One of the best organized conferences that we have attended. Oxford Global was very focused on helping us make the most of the event, from coordinating multiple high-value meetings on our behalf to giving us tools like the event app to make networking simple and effective",
//     writer: "Head of Scientific Operations",
//     des: "Sapient Bioanalytics",
//   },
//   {
//     info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
//     writer: "Head of Target & Biomarker Discovery",
//     des: "ABZU",
//   },
//   {
//     info: "It's very fruitful to listen to other key person in other companies how to solve the same problems. This event surpassed my expectations [...] this was an open exchange between persons that have true relevant knowledge in that field",
//     writer: "Monthly Science Exchange Attendee",
//   },
//   {
//     info: "One of the best organized conferences that we have attended. Oxford Global was very focused on helping us make the most of the event, from coordinating multiple high-value meetings on our behalf to giving us tools like the event app to make networking simple and effective",
//     writer: "Head of Scientific Operations",
//     des: "Sapient Bioanalytics",
//   },
//   {
//     info: "I liked the high scientific level of the event and the great organisation, which left enough time for networking and the exchange of ideas and thoughts outside the regular agenda",
//     writer: "Head of Target & Biomarker Discovery",
//     des: "ABZU",
//   },
// ];

// export const Slider = () => {
//   const [size, setSize] = useState(3);

//   useLayoutEffect(() => {
//     function updateSize() {
//       if (window.innerWidth < 950 && window.innerHeight > 670) {
//         setSize(2);
//         console.log(window.innerWidth, 2);
//       }
//       if (window.innerWidth < 670) {
//         {
//           setSize(1);
//           return console.log(window.innerWidth, 1);
//         }
//       }
//       if (window.innerWidth > 949) {
//         setSize(2);
//         console.log(window.innerWidth, 2);
//       }
//     }

//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   return (
//     <Swiper
//       className="!pl-5"
//       modules={[Autoplay, Navigation, Pagination]}
//       // spaceBetween={50}
//       slidesPerView={size}
//       // onSlideChange={() => console.log('slide change')}
//       // onSwiper={(swiper) => console.log(swiper)}
//       navigation={true}
//       pagination={true}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       loop={true}
//       loopPreventsSliding={true}
//     >
//       {slideData.map((item, index) => {
//         return (
//           <SwiperSlide
//             key={index}
//             style={{ height: "auto", paddingBottom: "50px" }}
//           >
//             <div className="flex flex-col h-[100%] px-[25px] py-[22px] rounded-xl bg-lightBlue mr-6">
//               <div className="mb-6">
//                 <h1 className="text-[22px] font-medium leading-[1.4]">
//                   {item.info}
//                 </h1>
//               </div>
//               <div className="">
//                 <h2 className="font-light text-lg">{item.writer}</h2>
//                 <h2 className="font-bold text-lg">{item.des}</h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
