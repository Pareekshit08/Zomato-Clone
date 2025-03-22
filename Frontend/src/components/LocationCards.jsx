import React,{useState} from "react";
import "../styles/LocationCards.css";

const locations = [
    { name: "Indiranagar", places: 630 },
    { name: "Marathahalli", places: 1092 },
    { name: "Whitefield", places: 1134 },
    { name: "Koramangala 5th Block", places: 335 },
    { name: "HSR", places: 1062 },
    { name: "Jayanagar", places: 688 },
    { name: "JP Nagar", places: 811 },
    { name: "Sarjapur Road", places: 865 },
    { name: "Malleshwaram", places: 754 },
    { name: "Banashankari", places: 943 },
    { name: "Rajajinagar", places: 812 },
    { name: "Yelahanka", places: 697 },
    { name: "Hebbal", places: 891 },
    { name: "Electronic City", places: 1023 },
    { name: "Basavanagudi", places: 578 },
    { name: "Kengeri", places: 456 },
    { name: "Ulsoor", places: 634 },
    { name: "RT Nagar", places: 723 },
  ];


const LocationCards = () => {

    const [len,setLen] = useState(Math.floor((locations.length)/2));
    const [showMore,setShowMore] = useState(false);
    const seeHandler = () =>{
      setLen((prevLen) => (prevLen === locations.length ? Math.floor(locations.length / 2) : locations.length));
      setShowMore((prev) => !prev);
    }

  return (
    <>
    <div className="locations">

    <p>Popular localities in and around <b>Bengaluru</b></p>
    <div className="location-container">
        {locations.slice(0, len).map((loc, index) => (
            <div key={index} className="location-card">
              <h3>{loc.name}</h3>
              <p>{loc.places} places</p>
              <span className="arrow">›</span>
            </div>
        ))}

      <div className="location-card see-more" onClick={seeHandler}>
        <p>see {showMore?"less":"more"}</p>
      </div>
    </div>

    </div>
        
    </>
  );
};

export default LocationCards;
