import React from 'react'
import Image_card from './Image-card'
import '../styles/image-cards.css'

const Image_card_sections = () => {

    const data =[
      {
        img:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810493.png?output-format=webp",
        title:"The Oberoi Udaivilas",
        subtitle:"Udaipur, India"
      },{
        img:"https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171292.png?output-format=webp",
        title:"The Ritz-Carlton",
        subtitle:"Los Angeles, United States"
      },{
        img:"https://b.zmtcdn.com/data/collections/5aee46adaa9a17993f23fa9b3512cc4b_1710849422.png?output-format=webp",
        title:"The Oberoi Amarvilas",
        subtitle:"Agra, India"
      },{
          img:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png?output-format=webp",
          title:"The Captiol hotel",
          subtitle:"Bangalore, India"
      }
    ]

  return (
    <>
    <div className='image-cards-container'>
        
          {data.map((item,index)=>{
            return(
              <div className='image-card'>
                <Image_card key={index} img={item.img} title={item.title} subtitle={item.subtitle} />
                </div>)
          })}
  
    </div>
    </>
  )
}

export default Image_card_sections