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
      {/* <div className="h-[600px] flex justify-center items-center">
        <h1 className="text-lg md:text-6xl font-black">
          Website is under construction... Coming Soon
        </h1>
      </div> */}
      {/* <TopicAreas /> */}
      <WhatWeDo />
      {/* <OurPeople /> */}
      {/* <CommunityCulture /> */}
      <Services />
    </>
  );
};

export default Home;
