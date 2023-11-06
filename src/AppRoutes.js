import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./Pages";
import { Gallery } from "./components/gallary";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Services } from "./Pages/Services";

export const AppsRoutes = () => {
  const common_components = [
    "/gallery",
    "/porta-cabins",
    "/security-cabins",
    "/modular-concepts",
    "/container-converted-units",
    "/refurbished-units",
    "/double-storey-units",
    "/toilet-GRP-units",
    "/mosques",
    "/villas",
    "/majlis",
  ];

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      {common_components.map((path) => (
        <Route path={path} element={<Gallery />} />
      ))}
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};
