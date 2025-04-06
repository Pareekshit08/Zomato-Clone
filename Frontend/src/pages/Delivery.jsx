import React from 'react'
import Collection from '../components/Explore/Collection'
import RestaurentList from '../components/RestaurentList/Restaurantlist'
import Explore from '../components/Explore/Explore'
import Footer from '../components/Footer'
import '../styles/Explore/Delivery.css'

const Delivery = () => {
    const foodItems = [
        { name: "Biryani", image: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
        { name: "Pizza", image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" },
        { name: "Chicken", image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" },
        { name: "Burger", image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" },
        { name: "Dosa", image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" },
        { name: "Thali", image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" },
      ];
    
      const brandItems = [
        { name: "KFC", image: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726664096.png", time: "20 min" },
        { name: "McDonald's", image: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png", time: "18 min" },
        { name: "Burger King", image: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726606653.png", time: "22 min" },
        { name: "Beijing Bites", image: "https://b.zmtcdn.com/data/brand_creatives/logos/8153cd3d5974e429ffc10a83c5b03161_1733119524.png", time: "19 min" },
        { name: "Pizza Hut", image: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png", time: "25 min" },
        { name: "Polar Bear", image: "https://b.zmtcdn.com/data/brand_creatives/logos/89661a97600ff677615036620ef3d992_1729677852.png", time: "16 min" },
      ];
  return (
    <>
      {/* Inspiration Section */}
      <section className="inspiration-section">
        <h2 className="section-title">Inspiration for your first order</h2>
        <div className="food-items-grid">
          {foodItems.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <p className="food-name">{food.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="brands-section">
        <h2 className="section-title">Top brands for you</h2>
        <div className="brands-items-grid">
          {brandItems.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.image} alt={brand.name} className="brand-image" />
              <p className="brand-name">{brand.name}</p>
              <p className="brand-time">{brand.time}</p>
            </div>
          ))}
        </div>
      </section>

    <Collection></Collection>
    <br /><br />
    <center> <h1 style={{color:'black'}}>Restaurents for Dining out</h1></center>
    <br />
    <RestaurentList></RestaurentList>
    <Explore></Explore>
    <Footer></Footer>
    </>
  )
}

export default Delivery