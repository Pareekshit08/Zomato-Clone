import React from "react";
import "./Navbar.css";
import { useContext } from "react"; // Scoped CSS
import { context } from "../../Context/context.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const ContextAuth = useContext(context); // assuming your context provides these
  const logout = () =>{
    console.log("Loging out")
    alert("Logout Successfull");
    localStorage.removeItem('auth');
    ContextAuth.setAuth(false);
    navigate("/");
  }
  return (
    <nav className="latest-navbar">
      <div className="latest-navbar-left">
        <span className="mobile-icon"></span>
        <span className="latest-navbar-text">Get the App</span>
      </div>
      <div className="latest-navbar-right">
        <button className="latest-navbar-btn" onClick={()=>{
          navigate("/restaurent");
        }}>Add restaurant</button>
        <button className="latest-navbar-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
