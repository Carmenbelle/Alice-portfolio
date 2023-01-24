import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Portfolio from "./Portfolio";
import Aboutme from "./Aboutme";
import Contact from "./Contact";

function MainApp() {
  return (
    <div className="pb-20">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default MainApp;
