import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { ContextProvider } from "./context/Context_Provider";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/Mobile_Menu";
import { HomePage } from "./Pages";
import Footer from "./components/Footer";
import Top_Screen_Button_1 from "./components/Top_Screen_button/Top_Screen_Button_1";

function App() {
  return (
    <div className="main-app custom-gradient">
      <ContextProvider>
        <Router>
          <Top_Screen_Button_1 />
          <MobileMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
