import React from "react";
import "./Navbar.css"; // Scoped CSS

const Navbar = () => {
  return (
    <nav className="latest-navbar">
      <div className="latest-navbar-left">
        <span className="mobile-icon"></span>
        <span className="latest-navbar-text">Get the App</span>
      </div>
      <div className="latest-navbar-right">
        <button className="latest-navbar-btn">Add restaurant</button>
        <button className="latest-navbar-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
