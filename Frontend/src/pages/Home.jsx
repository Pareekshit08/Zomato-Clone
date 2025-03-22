import React from 'react'
import Navbar from '../components/Navbar'
import CardsSection from '../components/CardsSection'
import Image_card_sections  from '../components/Image-card-sections'
import LocationCards from '../components/LocationCards'
import Collapsible from '../components/Collapsible'

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
<div className="zomato-footer">
<footer class="footer">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato image" width="15%" />
          <br /> <br /><br />
        <div class="footer-container">
            <div class="footer-column">
                <h4>ABOUT ZOMATO</h4>
                <a href="#">Who We Are</a>
                <a href="#">Blog</a>
                <a href="#">Work With Us</a>
                <a href="#">Investor Relations</a>
                <a href="#">Report Fraud</a>
                <a href="#">Press Kit</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="footer-column">
                <h4>ZOMAVERSE</h4>
                <a href="#">Zomato</a>
                <a href="#">Blinkit</a>
                <a href="#">District</a>
                <a href="#">Feeding India</a>
                <a href="#">Hyperpure</a>
                <a href="#">Zomato Live</a>
                <a href="#">Zomaland</a>
                <a href="#">Weather Union</a>
            </div>
            <div class="footer-column">
                <h4>FOR RESTAURANTS</h4>
                <a href="#">Partner With Us</a>
                <a href="#">Apps For You</a>
            </div>
            <div class="footer-column">
                <h4>LEARN MORE</h4>
                <a href="#">Privacy</a>
                <a href="#">Security</a>
                <a href="#">Terms</a>
            </div>
            <div class="footer-column">
                <h4>SOCIAL LINKS</h4>
                <div class="footer-social">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook"/>
                </div>
                <div class="footer-apps">
                    <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Store"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png" alt="Google Play"/>
                </div>
                <div class="footer-select">
                    <select>
                        <option>🇮🇳 India</option>
                        <option>🇺🇸 United States</option>
                        <option>🇬🇧 United Kingdom</option>
                    </select>
                    <select>
                        <option>🌍 English</option>
                        <option>🇫🇷 French</option>
                        <option>🇪🇸 Spanish</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            By continuing past this page, you agree to our <a href="#">Terms of Service</a>, <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a>, and <a href="#">Content Policies</a>.  
            consectetur adipisicing elit. Ab distinctio nulla dolor perferendis eligendi. Dignissimos non natus eos quibusdam facere explicabo adipisci consequuntur nihil blanditiis iusto. Consectetur itaque tempore blanditiis!.  
            2008-2025 &copy; clone™ Ltd. All rights reserved.
        </div>
    </footer>

</div>
    </>
  )
}

export default Home

