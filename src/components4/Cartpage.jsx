import React from 'react'
import Shopcart from './Shopcart'
import CartProduct from './CartProduct'
import SavedForLater from './SavedForLater'
import Navbar from './Navbar'
import SecurePayment from './SecurePayment'
import GoProProductList from './GoProProductList'
import Discount from './Discount'
import Footer from './Footer'

const Cartpage = () => {
  return (
    <div className='bg-teal-50'>
      <Navbar /> 
      <Shopcart />
      <CartProduct />
      <SecurePayment />
      <GoProProductList />
      <SavedForLater />
      <Discount />
      <Footer />
    </div>
  )
}

export default Cartpage
