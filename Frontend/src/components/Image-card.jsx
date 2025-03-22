import React from 'react'
import '../styles/image-cards.css'

const Image_card = ({img,title,subtitle}) => {
  return (
    <>
     <div class="image-card">
            <img src={img}/>
            <div class="image-card-content">
                <div class="image-card-title">{title}</div>
                <div class="image-card-subtitle">{subtitle}</div>
            </div>
        </div>
    </>
  )
}

export default Image_card