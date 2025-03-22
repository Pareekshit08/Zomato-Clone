import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <br />
            <navbar>
                <div className="sep">
                Get App
                </div>
                <ul>
                <l>Investor Relations</l>
                <l>Add restaurant</l>
                <l>Login</l>
                <l>Sign Up</l>
                </ul>
            </navbar>
            <br />
            <div className="hero">
                <div className="hero-content">
                    <img className='zom' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato Image" />
                    <p className='hel'>Discover the best food and drinks in Bengaluru</p>
                    <br />
                    <div className="search-container">
                    <div className="dropdown">
                    <span className="location-icon">📍</span>
        <select>
                <option>KIADB Export Promotion</option>
                <option>MG Road</option>
                <option>Whitefield</option>
                <option>Indiranagar</option>
            </select>
        </div>
        <div class="divider"></div>
        <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" class="search-input" placeholder="Search for restaurant, cuisine or a dish"/>
        </div>
    </div>

                </div>
                <br /><br />
            </div>
            <br /><br /><br /><br />
        </div>
    );
};

export default Navbar;
