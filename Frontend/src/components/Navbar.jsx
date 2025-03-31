import React from 'react';
import '../styles/navbar.css';
import Login from '../Modals/Login';
import SignUp from '../Modals/SignUp';

const Navbar = () => {
    return (
        <div className="navbar">
            <br />
            <nav>
                <div className="sep">
                Get App
                </div>
                <ul>
                <li>Investor Relations</li>
                <li>Add restaurant</li>
                <li>
               <Login/>
                </li>
                <li>
                    <SignUp/>
                    </li>
                </ul>
            </nav>
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
        <div className="divider"></div>
        <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" className="search-input" placeholder="Search for restaurant, cuisine or a dish"/>
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
