import React, { useState } from "react";
import axios from "axios";
import "./AddList.css"; // Adjust the path as necessary

const addList = () => {
  const [formData, setFormData] = useState({
    name: "",
    cuisines: "",
    address: "",
    contact: "",
    timing: "",
    rating: { dining: "", delivery: "" },
    reviews: { dining: "", delivery: "" },
    image: "",
    gallery: [""],
    menu: [{ dish: "", price: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("rating.") || name.includes("reviews.")) {
      const [key, subkey] = name.split(".");
      setFormData({
        ...formData,
        [key]: { ...formData[key], [subkey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMenuChange = (index, field, value) => {
    const updatedMenu = [...formData.menu];
    updatedMenu[index][field] = value;
    setFormData({ ...formData, menu: updatedMenu });
  };

  const addMenuItem = () => {
    setFormData({ ...formData, menu: [...formData.menu, { dish: "", price: "" }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await axios.post("http://localhost:3454/api/users/addRestaurant", formData,{withCredentials:true,validateStatus:false,headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }}); 
      if(response.status >= 200 && response.status < 300){
        alert("Restaurant added successfully!");
        window.location.reload(); // Reload the page to see the new restaurant
      setFormData({
        name: "",
        cuisines: "",
        address: "",
        contact: "",
        timing: "",
        rating: { dining: "", delivery: "" },
        reviews: { dining: "", delivery: "" },
        image: "",
        gallery: [""],
        menu: [{ dish: "", price: "" }],
      });
      }else{
        alert("Failed to add restaurant. Please try again.");
      console.error("Error adding restaurant:", response.data.message);
      }
      
  };

  return (
    <div className="add-list-container">
    <form className="form-element" onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Add New Restaurant</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="cuisines" placeholder="Cuisines" value={formData.cuisines} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
      <input name="timing" placeholder="Timing" value={formData.timing} onChange={handleChange} required />
      
      <input name="rating.dining" placeholder="Dining Rating" value={formData.rating.dining} onChange={handleChange} />
      <input name="rating.delivery" placeholder="Delivery Rating" value={formData.rating.delivery} onChange={handleChange} />

      <input name="reviews.dining" placeholder="Dining Reviews" value={formData.reviews.dining} onChange={handleChange} />
      <input name="reviews.delivery" placeholder="Delivery Reviews" value={formData.reviews.delivery} onChange={handleChange} />

      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input name="gallery[0]" placeholder="Gallery Image" value={formData.gallery[0]} onChange={(e) => setFormData({ ...formData, gallery: [e.target.value] })} />

      <h4>Menu</h4>
      {formData.menu.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Dish"
            value={item.dish}
            onChange={(e) => handleMenuChange(index, "dish", e.target.value)}
            required
          />
          <input
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleMenuChange(index, "price", e.target.value)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={addMenuItem}>Add Menu Item</button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default addList;
