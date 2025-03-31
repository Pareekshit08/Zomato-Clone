import React from 'react'
import "../styles/cards.css"
const Card = ({img,title,description}) => {
  return (
    <>
        <div className="card">
            <img src={img} alt="Live Events"/>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
    </div>
    </>
  )
}

export default Card