import React, { useEffect } from "react";
import "./Main_Banner_1.css";
import { Link } from "react-router-dom";
import banner_img from "../../../assets/images/main-banner-logo.svg";
import { animate } from "./Main_Banner_1";

function Main_Banner_1() {
  useEffect(() => {
    animate();
  }, []);

  return (
    <section className="main-banner h-60">
      <canvas id="canvas1"></canvas>
    </section>
  );
}

export default Main_Banner_1;
