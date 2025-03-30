import React from "react";
import "./Navbar.css";
import FormCard from "../FormCard/FormCard";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CrimeCity</div>
      <div className="navbar-menu">
        <button className="report-button" onClick={FormCard}>Report a Crime</button>
      </div>
    </nav>
  );
};

export default Navbar;