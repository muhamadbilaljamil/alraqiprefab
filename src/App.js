import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/style.css";
import { AppsRoutes } from "./AppRoutes";
import { ContextProvider } from "./context/Context_Provider";
import { Header } from "./components/Headers";
import MobileMenu from "./components/Mobile_Menu";
import Footer from "./components/Footer";
import { TopScreenButton } from "./components/TopScreenButton";
import { SocialIcons } from "./components/Social_Icons";

function App() {
  return (
    <div className="main-app custom-gradient">
      <ContextProvider>
        <Router>
          <TopScreenButton />
          <SocialIcons />
          <MobileMenu />
          <Header />
          <AppsRoutes />
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
