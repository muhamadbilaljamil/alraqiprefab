import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

import { ContextProvider } from "./context/Context_Provider";
import { Header } from "./components/Headers";
import MobileMenu from "./components/Mobile_Menu";
import { HomePage } from "./Pages";
import Footer from "./components/Footer";
import { TopScreenButton } from "./components/TopScreenButton";
import { SocialIcons } from "./components/Social_Icons";
import { Gallery } from "./components/gallary";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Services } from "./Pages/Services";

function App() {
  return (
    <div className="main-app custom-gradient">
      <ContextProvider>
        <Router>
          <TopScreenButton />
          <SocialIcons />
          <MobileMenu />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
