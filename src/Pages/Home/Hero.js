import React from "react";
import { NavBar } from "../../components/NavBar";
import { TopHeader } from "../../components/Headers/TopHeader";
import { SliderFull } from "../../components/Sliders/SliderFullWidth";

export const Hero = () => {
  const styles = {};
  return (
    <div className="relative">
      <div className="hidden md:inline-block">
        <TopHeader />
      </div>
      <NavBar />
      <SliderFull />
    </div>
  );
};
