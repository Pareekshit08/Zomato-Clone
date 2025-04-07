import React from 'react'
import Navbar from "../components/AddResaturant/Navbar";
import "../styles/AddRestaurant/addRest.css"
import ResList from '../components/AddResaturant/ResList';
import AddList from '../components/AddResaturant/AddList'

import Footer from "../components/Footer";

const AddRestaurant = () => {
  return (
    <>
      <Navbar />
      <section className="welcome-section-red">
      <h1 className="welcome-text-red">Welcome to your Restaurants page.</h1>
      <br />
      <h2>You can add your Restaurants here</h2>
    </section>
      <ResList />
      <AddList />
      <Footer></Footer>
    </>
  )
}

export default AddRestaurant