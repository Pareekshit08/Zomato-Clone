import { useState } from "react";
import "../styles/collapsible.css"; // Import the CSS file

export default function Collapsible({title,children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-container">
      {/* Header Section */}
      <div className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapsible-title">{title}</span>
        <span className={`collapsible-arrow ${isOpen ? "collapsible-rotate" : ""}`}>&#9662;</span>
      </div>

      {/* Content Section */}
      {isOpen && (
        <div className="collapsible-content">
            {children}
        </div>
      )}
    </div>
  );
}
