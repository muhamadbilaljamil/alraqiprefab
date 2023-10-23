import React from "react";
import { NavBar } from "../../components/NavBar";
import { TopHeader } from "../../components/Headers/TopHeader";

export const Header = () => {
  return (
    <div className="relative">
      <div className="hidden md:inline-block">
        <TopHeader />
      </div>
      <NavBar />
    </div>
  );
};
