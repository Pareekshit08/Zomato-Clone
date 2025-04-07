import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ResList.css";

const ResList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("http://localhost:3454/api/users/getRestaurants", {
          withCredentials: true,
          validateStatus: false,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.status === 200) {
          setRestaurants(res.data);
        } else {
          setError("No restaurants found or unauthorized.");
        }
      } catch (err) {
        setError("Failed to load restaurants.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <p className="owner-restaurant-loader">Loading...</p>;
  if (error) return <p className="owner-restaurant-error">{error}</p>;

  return (
    <div className="owner-restaurant-list">
      {restaurants.map((rest) => (
        <div className="owner-restaurant-card" key={rest._id}>
          <img src={rest.image} alt={rest.name} className="owner-restaurant-image" />
          <div className="owner-restaurant-info">
            <h2>{rest.name}</h2>
            <p><strong>Cuisines:</strong> {rest.cuisines}</p>
            <p><strong>Address:</strong> {rest.address}</p>
            <p><strong>Timings:</strong> {rest.timing}</p>
            <p><strong>Contact:</strong> {rest.contact}</p>
            <p><strong>Ratings:</strong> Dining: {rest.rating?.dining}, Delivery: {rest.rating?.delivery}</p>
            <p><strong>Reviews:</strong> Dining: {rest.reviews?.dining}, Delivery: {rest.reviews?.delivery}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResList;
