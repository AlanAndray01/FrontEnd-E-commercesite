import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FaApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const DesktopCartProduct = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      price: 78.99,
      quantity: 9,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      price: 39.00,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      price: 170.50,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 60.00;
  const tax = 14.00;
  const total = subtotal - discount + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleApplyCoupon = () => {
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="hidden lg:block px-16 mx-4 my-1 bg-teal-50 p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          My cart ({cartItems.length})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Left Side - Cart Items - Now takes 3/4 of the space */}
          <div className="lg:col-span-3 space-y-1 rounded-lg bg-white">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 border-b border-gray-200">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/96x96/f3f4f6/6b7280?text=Product';
                    }}
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">
                      Size: {item.size}, Color: {item.color}, Material: {item.material}
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      Seller: {item.seller}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-sm border border-gray-200 p-1 rounded-md text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                      <button className="text-sm border border-gray-200 p-1 rounded-md text-blue-600 hover:text-blue-700 font-medium">
                        Save for later
                      </button>
                    </div>
                  </div>

                  {/* Price and Quantity */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-lg font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Quantity Selector */}
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Buttons */}
            <div className="flex justify-between px-6 py-2 items-center">
              <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to shop
              </button>

              <button
                onClick={handleRemoveAll}
                className="text-blue-600 border border-gray-200 p-2 rounded-lg hover:text-blue-700 font-medium"
              >
                Remove all
              </button>
            </div>
          </div>

          {/* Right Side - Summary - Now takes 1/4 of the space */}
          <div className="lg:col-span-1 space-y-4">
            {/* Coupon Section */}
            <div className="bg-white rounded-lg px-4 py-4 shadow-sm">
              <p className="text-sm text-gray-700 mb-3">Have a coupon?</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="text"
                  placeholder="Add coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full sm:max-w-[200px] md:max-w-[250px] px-3 py-2 border border-gray-300 rounded-lg sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg sm:rounded-l-none text-blue-600 hover:text-blue-700 font-medium text-sm bg-white hover:bg-gray-100 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-red-600">- ${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium text-green-600">+ ${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-xl text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors mb-4">
                Checkout
              </button>

              {/* Payment Icons - FIXED WITH WORKING ICONS */}
              <div className="flex justify-center gap-1 pt-2">
                <img
                  src="https://i.postimg.cc/V5y5Qj5M/american.webp"
                  alt="American Express"
                  className="h-8 w-auto"
                />
                <img
                  src="https://i.postimg.cc/QVLVGpV9/mastercard.webp"
                  alt="Mastercard"
                  className="h-8 w-auto"
                />
                <img
                  src="https://i.postimg.cc/HjGjDQjX/paypal.webp"
                  alt="PayPal"
                  className="h-8 w-auto"
                />
                <img
                  src="https://i.postimg.cc/Sj0jFWj9/visacard.webp"
                  alt="Visa"
                  className="h-8 w-auto"
                />
                <img
                  src="https://i.postimg.cc/XXMXSw-Xf/applepay.webp"
                  alt="Apple Pay"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCartProduct;