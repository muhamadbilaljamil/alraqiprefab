import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { ContextProvider } from "./context/Context_Provider";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/Mobile_Menu";
import { HomePage } from "./Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-app">
      <ContextProvider>
        <Router>
          <NavBar />
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
