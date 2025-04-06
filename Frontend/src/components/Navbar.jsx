import React, { useContext } from 'react';
import '../styles/navbar.css';
import Login from '../Modals/Login';
import SignUp from '../Modals/SignUp';
import { context } from '../Context/context.jsx';

const Navbar = () => {
  const ContextAuth = useContext(context); // assuming your context provides these
  const logout = ()=>{
    ContextAuth.setAuth(false);
    localStorage.removeItem('auth');
    alert("Logout Successfull");
  }

  const alertIt = () => {
    alert("Please login to explore restaurants");
  }

  return (
    <div className="navbar">
      <br />
      <nav>
        <div className="sep">Get the App</div>
        <ul>
          {ContextAuth.auth ? (
            // If logged in
            <>
            <li><a href="/dining">Explore</a></li>
              <li><a href="/restaurent">Add restaurant</a></li>
              <li>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            // If not logged in
            <>
              <li onClick={alertIt}>Explore</li>
              <li><Login /></li>
              <li><SignUp /></li>
            </>
          )}
        </ul>
      </nav>
      <br />
      <div className="hero">
        <div className="hero-content">
          <img
            className='zom'
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="Zomato Image"
          />
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
              <input
                type="text"
                className="search-input"
                placeholder="Search for restaurant, cuisine or a dish"
              />
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
