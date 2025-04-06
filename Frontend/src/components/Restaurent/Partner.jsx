import React from "react";
import "../../styles/restaurent/Partner.css"; // CSS file for styling
import { FaUsers, FaShoppingBag, FaEnvelope } from "react-icons/fa"; // Import icons from React Icons

const Partner = () => {
  return (
    <section className="partner-section">
      <h2>Why should you partner with Zomato?</h2>
      <div className="benefits-container">
        {/* Benefit 1 */}
        <div className="benefit">
          <FaUsers className="benefit-icon" />
          <h3>Attract new customers</h3>
          <p>Reach the millions of people ordering on Zomato.</p>
        </div>

        {/* Benefit 2 */}
        <div className="benefit">
          <FaShoppingBag className="benefit-icon" />
          <h3>Doorstep delivery convenience</h3>
          <p>
            Easily get your orders delivered through our trained delivery
            partners.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="benefit">
          <FaEnvelope className="benefit-icon" />
          <h3>Onboarding support</h3>
          <p>
            For any support, email us at 
            <p>{"web-support-@gmail.com"}</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
