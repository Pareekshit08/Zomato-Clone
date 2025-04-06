import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer"
import "./Order.css";
import Data from "./data"; 
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const restaurantData = Data;

  const Order = () => {
    const { id } = useParams();
    const restaurant = restaurantData.find((rest) => rest.id === id);
  
    const [showPopup, setShowPopup] = useState(false);
  
    if (!restaurant) {
      return (
        <div className="order-page">
          <Navbar></Navbar>
          <h1>Restaurant Not Found</h1>
          <p>
            The restaurant you're looking for does not exist or the ID is
            incorrect.
          </p>
        </div>
      );
    }
  
    return (
      <>
      <Navbar></Navbar>
      <div className="order-page">
        <header className="order-header">
          <h1 className="restaurant-name">{restaurant.name}</h1>
  
          <div className="restaurant-tags">
            {restaurant.cuisines.split(",").map((cuisine, index) => (
              <span key={index} className="tag">
                {cuisine.trim()}
              </span>
            ))}
          </div>
  
          <p className="restaurant-address">{restaurant.address}</p>
          <p className="restaurant-contact">📞 {restaurant.contact}</p>
          <p className="restaurant-timing">📅 Timings: {restaurant.timing}</p>
  
          <div className="restaurant-rating">
            ⭐ {restaurant.rating.dining} Dining ({restaurant.reviews.dining}) | ⭐{" "}
            {restaurant.rating.delivery} Delivery ({restaurant.reviews.delivery})
          </div>
        </header>
  
        <div className="order-main">
          {/* 📸 Updated Gallery Section */}
          <div className="gallery-section">
  <div className="main-image">
    <img src={restaurant.image} alt={restaurant.name} />
  </div>

  <div className="side-gallery">
    {restaurant.gallery?.slice(0, 2).map((img, index) => (
      <img key={index} src={img} alt={`Gallery ${index + 1}`} />
    ))}

    <button className="view-gallery-btn">View Gallery</button>
  </div>
</div>

  
          <div className="popular-dishes">
            <h3>Popular Dishes</h3>
            <div className="dishes-scroll">
              {restaurant.menu.slice(0, 6).map((item, index) => (
                <div key={index} className="dish-card">
                  {item.dish}
                </div>
              ))}
            </div>
          </div>
  
          <h2 style={{ textAlign: "center" }}>Menu</h2>
          <ul className="menu-list">
            {restaurant.menu.map((item, index) => (
              <li key={index}>
                {item.dish} -{" "}
                <span className="menu-price">{item.price}</span>
              </li>
            ))}
          </ul>
  
          <button className="order-now-button" onClick={() => setShowPopup(true)}>
            Order Now
          </button>
  
          {/* Dynamic Google Map Embed */}
          <div className="map-container">
            <h3>Location Map</h3>
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                restaurant.address
              )}&output=embed`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
  
        <Footer />
  
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Online Ordering is only supported in our mobile app.</p>
              <button
                className="download-button"
                onClick={() => alert("Redirecting to app download...")}
              >
                Download Now
              </button>
              <button
                className="close-popup"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };
  
  export default Order;
  