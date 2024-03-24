import React from "react";
import "./HomePage.css";
import NavbarMain from "./NavbarMain";

function HomePage() {
  return (
    <>
      <NavbarMain />
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}

export default HomePage;
