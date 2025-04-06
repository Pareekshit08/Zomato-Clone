import React from 'react'
import Navbar from '../components/Navbar'
import CardsSection from '../components/CardsSection'
import Image_card_sections  from '../components/Image-card-sections'
import LocationCards from '../components/LocationCards'
import Collapsible from '../components/Collapsible'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>

        <Navbar></Navbar>
        <div className="container">
        <CardsSection></CardsSection>
        <br /><br />
        <h1>Collections</h1>
        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</p>
        <a href="#">All Collections in Bengaluru</a>
        <Image_card_sections></Image_card_sections>
        </div>
        <br /><br />
        <div className='Location-Cards'>
          <LocationCards></LocationCards>
        </div>
        <div class="zomato-app-section">

  <div class="zomato-app-container">
    <div class="zomato-app-left">
      <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="Zomato App Preview" class="zomato-app-image" width="80%"/>
    </div>
    <div class="zomato-app-right">
      <h1 class="zomato-app-title">Get the Zomato app</h1>
      <p class="zomato-app-description">
        We will send you a link, open it on your phone to download the app
      </p>

      <div class="zomato-app-options">
  <input type="radio" id="emailOption" name="contactMethod" value="email" />
  <label for="emailOption">Email</label>

  <input type="radio" id="phoneOption" name="contactMethod" value="phone" />
  <label for="phoneOption">Phone</label>
</div>

      <div class="zomato-app-input">
        <input type="text" placeholder="Email" class="zomato-input" />
        <button class="zomato-button">Share App Link</button>
      </div>

      <p class="zomato-download-text">Download app from</p>
      <div class="zomato-app-stores">
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play" class="zomato-store" />
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Store" class="zomato-store" />
      </div>
    </div>
  </div>
</div>

<div class="collapse-it">
  <h3>Explore options near me</h3>
  <br />
  <Collapsible title="Popular cuisines near me">
  <span className="in-span">Bakery near me</span> •
            <span className="in-span">Beverages near me</span> •
            <span className="in-span">Biryani near me</span> •
            <span className="in-span">Burger near me</span> •
            <span className="in-span">Chinese near me</span> •
            <span className="in-span">Desserts near me</span> •
            <span className="in-span">Ice Cream near me</span> •
            <span className="in-span">Juices near me</span> •
            <span className="in-span">Kebab near me</span> •
            <span className="in-span">Mughlai near me</span> •
            <span className="in-span">North Indian near me</span> •
            <span className="in-span">Pizza near me</span> •
            <span className="in-span">Rolls near me</span> •
            <span className="in-span">Sandwich near me</span> •
            <span className="in-span">Seafood near me</span> •
            <span className="in-span">Shake near me</span> •
            <span className="in-span">Sichuan near me</span> •
            <span className="in-span">South Indian near me</span> •
            <span className="in-span">Street near me</span> •
            <span className="in-span">Tea near me</span>

  </Collapsible>
  <br />
  <Collapsible title="Popular Restaurent types near me">
  <span className="in-span">Bakery near me</span> •
            <span className="in-span">Beverages near me</span> •
            <span className="in-span">Biryani near me</span> •
            <span className="in-span">Burger near me</span> •
            <span className="in-span">Chinese near me</span> •
            <span className="in-span">Desserts near me</span> •
            <span className="in-span">Ice Cream near me</span> •
            <span className="in-span">Juices near me</span> •
            <span className="in-span">Kebab near me</span> •
            <span className="in-span">Mughlai near me</span> •
            <span className="in-span">North Indian near me</span> •
            <span className="in-span">Pizza near me</span> •
            <span className="in-span">Rolls near me</span> •
            <span className="in-span">Sandwich near me</span> •
            <span className="in-span">Seafood near me</span> •
            <span className="in-span">Shake near me</span> •
            <span className="in-span">Sichuan near me</span> •
            <span className="in-span">South Indian near me</span> •
            <span className="in-span">Street near me</span> •
            <span className="in-span">Tea near me</span>
            </Collapsible>
  <br />
  <Collapsible title="Top Resataurent Chains">
  <span className="in-span">Bakery near me</span> •
            <span className="in-span">Beverages near me</span> •
            <span className="in-span">Biryani near me</span> •
            <span className="in-span">Burger near me</span> •
            <span className="in-span">Chinese near me</span> •
            <span className="in-span">Desserts near me</span> •
            <span className="in-span">Ice Cream near me</span> •
            <span className="in-span">Juices near me</span> •
            <span className="in-span">Kebab near me</span> •
            <span className="in-span">Mughlai near me</span> •
            <span className="in-span">North Indian near me</span> •
            <span className="in-span">Pizza near me</span> •
            <span className="in-span">Rolls near me</span> •
            <span className="in-span">Sandwich near me</span> •
            <span className="in-span">Seafood near me</span> •
            <span className="in-span">Shake near me</span> •
            <span className="in-span">Sichuan near me</span> •
            <span className="in-span">South Indian near me</span> •
            <span className="in-span">Street near me</span> •
            <span className="in-span">Tea near me</span>
            </Collapsible>
  <br />
  <Collapsible title="Cities We deliver to">
  <span className="in-span">Bakery near me</span> •
            <span className="in-span">Beverages near me</span> •
            <span className="in-span">Biryani near me</span> •
            <span className="in-span">Burger near me</span> •
            <span className="in-span">Chinese near me</span> •
            <span className="in-span">Desserts near me</span> •
            <span className="in-span">Ice Cream near me</span> •
            <span className="in-span">Juices near me</span> •
            <span className="in-span">Kebab near me</span> •
            <span className="in-span">Mughlai near me</span> •
            <span className="in-span">North Indian near me</span> •
            <span className="in-span">Pizza near me</span> •
            <span className="in-span">Rolls near me</span> •
            <span className="in-span">Sandwich near me</span> •
            <span className="in-span">Seafood near me</span> •
            <span className="in-span">Shake near me</span> •
            <span className="in-span">Sichuan near me</span> •
            <span className="in-span">South Indian near me</span> •
            <span className="in-span">Street near me</span> •
            <span className="in-span">Tea near me</span>
  </Collapsible>
</div>
<Footer></Footer>
    </>
  )
}

export default Home

