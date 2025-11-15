import React from 'react'
import Navbar from './Navbar'
import Subnav from './Subnav'
import Hero from './Hero'
import PromoDeals from './PromoDeals'
import Furniturecategory from './Furniturecategory'
import Electronics from './Electronics'
import Herobanner from './Herobanner'
import RecommendedItems from './RecommendedItems'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Subnav />
            <Hero />
            <PromoDeals />
            <Furniturecategory />
            <Electronics />
            <Herobanner />
            <RecommendedItems />
        </>
    )
}

export default Homepage
