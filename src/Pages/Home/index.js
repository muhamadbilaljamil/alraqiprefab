import React from "react";
import { Hero } from "./Hero";
import { TopicAreas } from "./TopicAreas";
import { WhatWeDo } from "./WhatWeDo";
import { OurPeople } from "./OurPeople";
import { CommunityCulture } from "./CommunityCulture";
import { Services } from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <TopicAreas />
      <WhatWeDo />
      <OurPeople />
      <CommunityCulture />
      <Services />
    </>
  );
};

export default Home;
