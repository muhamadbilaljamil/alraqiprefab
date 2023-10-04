import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import { ContextProvider } from "./context/Context_Provider";
import NavBar from "./components/NavBar";

function App() {
  const linkpath = "/naveed_hussainVnoCDcq9DlAsfVNpimIJjx6oXprD429b";
  return (
    <div className="main-app">
      <ContextProvider>
        <Router>
          <NavBar />
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
