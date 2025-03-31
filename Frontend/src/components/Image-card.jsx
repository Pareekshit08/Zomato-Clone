import React from 'react'
import '../styles/image-cards.css'

const Image_card = ({img,title,subtitle}) => {
  return (
    <>
     <div className="image-card">
            <img src={img}/>
            <div className="image-card-content">
                <div className="image-card-title">{title}</div>
                <div className="image-card-subtitle">{subtitle}</div>
            </div>
        </div>
    </>
  )
}

export default Image_card