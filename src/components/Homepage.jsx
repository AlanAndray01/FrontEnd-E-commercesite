import React from 'react'
import Navbar from './Navbar'
import Subnav from './Subnav'
import Hero from './Hero'
import PromoDeals from './PromoDeals'
import Furniturecategory from './Furniturecategory'
import Electronics from './Electronics'
import Herobanner from './Herobanner'
import RecommendedItems from './RecommendedItems'
import Extraservices from './Extraservices'
import Supplier from './Supplier'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Homepage = () => {
    return (
        <div className='bg-teal-50'>
            <Navbar />
            <Subnav />
            <Hero />
            <PromoDeals />
            <Furniturecategory />
            <Electronics />
            <Herobanner />
            <RecommendedItems />
            <Extraservices />
            <Supplier />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Homepage
