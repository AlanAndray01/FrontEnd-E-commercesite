import React from 'react';
import logo from "/src/assets/Layout/Brand/logo-colored.png"
import {
  ShoppingBag,
  Search,
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  Menu,
} from 'lucide-react';

function MainNavbar() {
  const cartItemCount = null;

  return (
    <nav className='bg-white shadow-md py-1'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        
        {/* Desktop View */}
        <div className='hidden md:flex items-start justify-start'>
          {/* Left Section: Logo */}
          <div className='flex items-center space-x-2'>
            <a href="#" className="flex items-center space-x-2">
              <img src={logo} alt="Brand Logo" className="h-10 w-30" />
            </a>
          </div>

          {/* Center Section: Search Bar Group */}
          <div className='flex-grow flex justify-center mx-8'>
            <div className='flex items-center border-2 border-blue-400 rounded-lg overflow-hidden w-full max-w-xl'>
              <input
                className='focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 text-sm flex-grow'
                placeholder='Search'
                type="search"
              />
              <select
                className='cursor-pointer focus:outline-none h-full px-3 text-md text-gray-600 border-l border-blue-400 bg-white'
                id="category"
                name="category"
              >
                <option value="all">All category</option>
                <option value="clothing">Clothing</option>
                <option value="shoes">Shoes</option>
                <option value="furniture">Furniture</option>
                <option value="accessories">Accessories</option>
                <option value="electronics">Electronics</option>
              </select>
              <button
                className='bg-blue-500 text-white h-full px-4 text-sm font-medium flex items-center justify-center'
                type="submit"
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Section: Utility Icons and Labels */}
          <div className='flex items-center space-x-6 text-sm text-gray-500'>
            <a href="/account" className='flex flex-col items-center hover:text-blue-600 transition' aria-label="Account Profile">
              <User size={20} />
              <span className="mt-1">Profile</span>
            </a>
            <a href="/messages" className='flex flex-col items-center hover:text-blue-600 transition' aria-label="Messages">
              <MessageSquare size={20} />
              <span className="mt-1">Message</span>
            </a>
            <a href="/orders" className='flex flex-col items-center hover:text-blue-600 transition' aria-label="My Orders">
              <Heart size={20} />
              <span className="mt-1">Orders</span>
            </a>
            <a href="/cart" className='relative flex flex-col items-center hover:text-blue-600 transition' aria-label="Shopping Cart">
              <ShoppingCart size={20} />
              <span className="mt-1">My cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className='md:hidden'>
          {/* Top Row: Menu, Logo, Cart, Profile */}
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-2'>
              <button className='p-2' aria-label="Menu">
                <Menu size={24} className="text-gray-700" />
              </button>
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} alt="Brand Logo" className="h-8 w-24" />
              </a>
            </div>

            <div className='flex items-center space-x-3'>
              <a href="/cart" className='relative' aria-label="Shopping Cart">
                <ShoppingCart size={24} className="text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    {cartItemCount}
                  </span>
                )}
              </a>
              <a href="/account" aria-label="Account Profile">
                <User size={24} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className='mb-3'>
            <div className='flex items-center bg-gray-100 rounded-lg px-3 py-2'>
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                className='bg-transparent focus:outline-none flex-grow text-sm'
                placeholder='Search'
                type="search"
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default MainNavbar;