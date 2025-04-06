import React from "react";
import AddRestaurantNav from "./AddRestaurantNav";
import "../../styles/restaurent/AddRestaurant.css";

const AddRestaurant = () => {
  return (
    <div className="add-restaurant-container">
      <AddRestaurantNav /> 
      <div className="add-restaurant-content">
        <h1>Add Your Restaurant</h1>
        <p>Partner with Zomato to reach more customers.</p>
      </div>
    </div>
  );
};

export default AddRestaurant;
