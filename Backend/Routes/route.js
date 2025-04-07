const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

const router = express.Router();
router.get("/check",(req,res)=>{
    res.json({
        "msg":"Succesfully reached the check route;"
    });
});
  
router.post("/addRestaurant", async (req, res) => {
    console.log("body", req.body);
    console.log("user is:", req.user);
    try {
      const userId = req.user.id; // Comes from auth middleware
  
      const {
        name,
        cuisines,
        address,
        contact,
        timing,
        rating,
        reviews,
        image,
        gallery,
        menu,
      } = req.body;
  
      const newRestaurant = new Restaurant({
        userId,
        name,
        cuisines,
        address,
        contact,
        timing,
        rating,
        reviews,
        image,
        gallery,
        menu,
      });
  
      const savedRestaurant = await newRestaurant.save();
      res.status(201).json(savedRestaurant);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });

  router.get("/getRestaurants", async (req, res) => {
    const restaurants = await Restaurant.find({"userId":req.user.id});
    if (!restaurants) {
      return res.status(404).json({ message: "No restaurants found" });
    }
    res.status(200).json(restaurants);
  })
  

module.exports = router;