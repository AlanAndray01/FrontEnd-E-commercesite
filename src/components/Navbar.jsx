import React, { useState } from 'react'; // ADD useState
import { useNavigate } from 'react-router-dom';
import logo from "/src/assets/Layout/Brand/logo-colored.png"
import Sidebar from './Sidebar'; // ADD THIS IMPORT
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
  const navigate = useNavigate();
  const cartItemCount = null;
  const [sidebarOpen, setSidebarOpen] = useState(false); // ADD THIS

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <>
      {/* ADD SIDEBAR COMPONENT */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <nav className='bg-white shadow-md py-1'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          
          {/* Desktop View - NO CHANGES */}
          <div className='hidden md:flex items-start justify-start'>
            {/* ... your existing desktop code ... */}
          </div>

          {/* Mobile View */}
          <div className='md:hidden'>
            {/* Top Row: Menu, Logo, Cart, Profile */}
            <div className='flex items-center justify-between mb-3'>
              <div className='flex items-center space-x-2'>
                <button 
                  onClick={() => setSidebarOpen(true)} // ADD THIS
                  className='p-2' 
                  aria-label="Menu"
                >
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

            {/* Search Bar - Mobile */}
            <div className='mb-3'>
              <div 
                onClick={handleSearchClick}
                className='flex items-center bg-gray-100 rounded-lg px-3 py-2 cursor-pointer'
              >
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  onClick={handleSearchClick}
                  className='bg-transparent focus:outline-none flex-grow text-sm cursor-pointer'
                  placeholder='Search'
                  type="search"
                  readOnly
                />
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default MainNavbar;