import React from 'react'
import "../styles/cards.css"
const Card = ({img,title,description}) => {
  return (
    <>
        <div class="card">
            <img src={img} alt="Live Events"/>
            <div class="card-content">
                <div class="card-title">{title}</div>
                <div class="card-description">{description}</div>
            </div>
    </div>
    </>
  )
}

export default Card