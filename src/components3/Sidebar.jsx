import React from 'react';
import { 
  X, 
  Home, 
  Grid, 
  Heart, 
  FileText, 
  Globe, 
  Headphones, 
  Info 
} from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 h-screen"
        onClick={onClose}
      />

      {/* Sidebar with Grid Layout */}
      <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 overflow-y-auto h-screen grid grid-cols-[1fr_3rem]">
        
        {/* Main Content Area */}
        <div className=" overflow-y-auto">
          {/* User Section */}
          <div className="mb-2 p-4 bg-gray-200 ">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className=" space-x-1 flex flex-row">
              <a href="/signin" className="block text-gray-700 hover:text-blue-600 text-sm font-medium">Sign in |</a>
              <a href="/register" className="block text-gray-700 hover:text-blue-600 text-sm font-medium"> Register</a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="px-2 space-y-0.5 mb-2">
            <a href="/" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Home size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Home</span>
            </a>

            <a href="/categories" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Grid size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Categories</span>
            </a>

            <a href="/favorites" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Heart size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Favorites</span>
            </a>

            <a href="/orders" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <FileText size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">My orders</span>
            </a>
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Settings Section */}
          <div className="px-2 space-y-0.5 mb-2">
            <a href="/language" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Globe size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">English | USD</span>
            </a>

            <a href="/contact" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Headphones size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Contact us</span>
            </a>

            <a href="/about" className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-50 rounded transition">
              <Info size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">About</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Footer Links */}
          <div className=" px-3 space-y-1">
            <a href="/user-agreement" className="block py-2.5 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition">
              User agreement
            </a>
            <a href="/partnership" className="block py-2.5 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition">
              Partnership
            </a>
            <a href="/privacy-policy" className="block py-2.5 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition">
              Privacy policy
            </a>
          </div>
        </div>

        {/* Close Button Area - Now part of the grid */}
        <div className="bg-gray-600 flex items-start justify-center pt-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;