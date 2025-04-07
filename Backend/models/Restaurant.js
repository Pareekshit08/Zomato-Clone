const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reference to owner
  name: { type: String, required: true },
  cuisines: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  timing: { type: String, required: true },
  rating: {
    dining: { type: String }, 
    delivery: { type: String },
  },
  reviews: {
    dining: { type: String },
    delivery: { type: String },
  },
  image: { type: String },
  gallery: [{ type: String }],
  menu: [
    {
      dish: { type: String, required: true },
      price: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
