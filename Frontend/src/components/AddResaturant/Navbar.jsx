import React, { useState, useRef, useEffect } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { context } from "../../Context/context.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const ContextAuth = useContext(context);
  const navigate = useNavigate();
  const logout = () =>{
    console.log("Loging out")
    alert("Logout Successfull");
    localStorage.removeItem('auth');
    ContextAuth.setAuth(false);
    navigate("/");
  }
  return (
    <>
      {/* Top Navbar */}
      <div className="explore-navbar">
        <div className="explore-navbar-left">
          <span className="get-app"> Get the App</span>
        </div>
        <div className="explore-navbar-right">
          <span className="explore-nav-link" onClick={()=>{
            navigate("/dining");
          }} >Explore</span>
          <span className="explore-nav-link" onClick={logout}>Logout</span>
        </div>
      </div>

    </>
  );
};

export default Navbar;
