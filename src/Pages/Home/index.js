import React from "react";
import { SliderFull } from "../../components/Sliders";
import { WhatWeDo } from "./WhatWeDo";
import { Services } from "./Services";
import TestimonialArea from "../../components/TestimonialArea";

const Home = () => {
  return (
    <>
      <SliderFull />
      <WhatWeDo />
      <Services />
      <TestimonialArea />
    </>
  );
};

export default Home;
