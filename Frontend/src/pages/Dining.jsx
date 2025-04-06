import React from 'react'
import Collection from '../components/Explore/Collection'
import RestaurentList from '../components/RestaurentList/Restaurantlist'
import Explore from '../components/Explore/Explore'
import Footer from '../components/Footer'

const Dining = () => {
  return (
    <>
    <Collection></Collection>
    <br /><br />
    <center> <h1 style={{color:'black'}}>Restaurents for Dining out</h1></center>
    <br />
    <RestaurentList></RestaurentList>
    <Explore></Explore>
    <Footer></Footer>
    </>
  )
}

export default Dining