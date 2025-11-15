import React from 'react'
import Navbar from './components/Navbar'
import Subnav from './components/Subnav'
import Hero from './components/Hero'
import PromoDeals from './components/PromoDeals'

const App = () => {
  return (
    <div className='bg-[#E5F1FF]'>
    <Navbar />
    <Subnav />
    <Hero />
    <PromoDeals />
    </div>
  )
}

export default App
