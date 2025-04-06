import React from 'react'
import AddRestaurantNav from "../components/Restaurent/AddRestaurantNav";
import AddRestBanner from "../components/Restaurent/AddRestBanner";
import Partner from "../components/Restaurent/Partner";
import Success from "../components/Restaurent/Success";
import FrequentQues from "../components/Restaurent/FrequentQues";
import Footer from "../components/Footer";

const Restaurent = () => {
  return (
    <>
              <AddRestaurantNav />
              <AddRestBanner />
              <Partner />
              <Success />
              <FrequentQues />
              <Footer />
    </>
  )
}

export default Restaurent