import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileAccessoryPage from './components2/MobileAccessoryPage'
import ProductDetailPage from './components3/ProductInfoPage';
import ScrollToTop from './ScrollToTop';
import Cartpage from './components4/Cartpage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Homepage/>} />
        
        {/* Search Results Page */}
        <Route path='/search' element={<MobileAccessoryPage/>} />
        
        {/* Product Detail Page */}
        <Route path='/product/:id' element={<ProductDetailPage/>} />
        
        {/* Cart Page */}
        <Route path='/cart' element={<Cartpage/>} />
        
        {/* Optional: 404 Page for invalid routes */}
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App