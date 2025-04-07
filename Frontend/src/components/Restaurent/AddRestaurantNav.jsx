import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/restaurent/AddRestaurantNav.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {context} from "../../Context/context.jsx";

const AddRestaurantNav = () => {
  const ContextAuth = useContext(context); 
  const navigate = useNavigate();
  const logout = () => {
    console.log("Logging out")
    alert("Logout Successful");
    localStorage.removeItem('auth');
    ContextAuth.setAuth(false);
    navigate("/");
  }
  return (
    <div className="add-restaurant-container">
      {/* Navbar */}
      <nav className="add-restaurant-navbar">
        <div className="nav-left">
          <span className="zomato--brand-name">Zomato</span>
        </div>
        <div className="nav-right">
          <ul>
          <li>
              <Link to="/dining" className="nav-link" >Explore</Link>
            </li>
            <li>
              <Link className="nav-link" onClick={logout}>Log out</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="add-restaurant-content">
        <h1>Partner with Zomato and grow your business</h1>
        <p>0% commission for 1st month!
        Valid for new restaurant partners in select cities</p>
        {/* Register Your Restaurant button redirects to home page */}
        <Link to= "/addrestaurant" className="add-restaurant-btn">
          Add Your Restaurant
        </Link>
      </div>
    </div>
  );
};

export default AddRestaurantNav;
