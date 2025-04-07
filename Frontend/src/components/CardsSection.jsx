import React from 'react'
import Card from "./Card"
import "../styles/cards.css"

const CardsSection = () => {

    const data = [
        {img:"https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            title:'Order Online',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, '
        },
        {img:"https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            title:'Dining',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,'
        },
        {img:"https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            title:'Live Events',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,'
        }
    ]

  return (
    <>
    <br /><br />
    <div className="card-container">
    {data.map((item,index)=>
        <Card key={index} img={item.img} title={item.title} description={item.description}/>
    )}
    </div>
    <br /><br />
    </>
  )
}

export default CardsSection

