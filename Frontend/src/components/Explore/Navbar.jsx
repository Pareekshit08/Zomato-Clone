import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Explore/Navbar.css";

const tabs = [
  { icon: "🍽️", label: "Dining Out", path: "/dining" },
  { icon: "🛵", label: "Delivery", path: "/delivery" },
  { icon: "🍺", label: "Nightlife", path: "/night" },
];

const Navbar = () => {
  const location = useLocation();
  const tabRefs = useRef([]);
  const underlineRef = useRef();

  // Find the active index based on the current path
  const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname);

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    if (currentTab && underlineRef.current) {
      underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
      underlineRef.current.style.left = `${currentTab.offsetLeft}px`;
    }
  }, [activeIndex, location.pathname]);

  return (
    <>
      {/* Top Navbar */}
      <div className="explore-navbar">
        <div className="explore-navbar-left">
          <span className="get-app">📱 Get the App</span>
        </div>
        <div className="explore-navbar-right">
          <span className="explore-nav-link">Add restaurant</span>
          <span className="explore-nav-link">Logout</span>
        </div>
      </div>

      {/* Tab Section */}
      <div className="explore-tabs-container">
        <div className="tab-underline" ref={underlineRef}></div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`explore-tab-item ${activeIndex === index ? "active" : ""}`}
          >
            <Link to={tab.path}>
              <div className="emoji">{tab.icon}</div>
              <span>{tab.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
