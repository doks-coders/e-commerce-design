import React from 'react'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Banner from '../SubComponents/Banner'
import NewArrivals from '../SubComponents/NewArrivals'
import CollectionsDisplay from '../SubComponents/CollectionsDisplay'
import FeaturedProducts from '../SubComponents/FeaturedProducts'
import SubscriptionPanel from '../SubComponents/SubscriptionPanel'
import BenefitsPanel from '../SubComponents/BenefitsPanel'

//Header
//Banner
//NewArrivals
//CollectionsDisplay
//FeaturedProducts
//SubscriptionPanel
//BenefitsPanel

//Footer

const Hompage = () => {
  return (
    <>
    
    <Banner/>
    <NewArrivals/>
    <CollectionsDisplay/>
    <FeaturedProducts/>
    <SubscriptionPanel/>
    <BenefitsPanel/>
    

    </>
  )
}

export default Hompage