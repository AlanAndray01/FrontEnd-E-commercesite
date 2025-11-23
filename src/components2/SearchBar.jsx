import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, User, Search } from 'lucide-react';
import { categories } from './mockData';

function SearchBar({ searchQuery, onSearchChange, selectedCategory, onCategoryChange }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    // Hide on desktop (lg and up), show on mobile/tablet
    <header className="lg:hidden bg-white border-b sticky top-0 z-10">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Mobile accessory</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleCartClick}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ShoppingCart size={24} className="text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <User size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto px-4 pb-3 space-x-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat === 'All' ? 'all' : cat.toLowerCase())}
            className={`whitespace-nowrap text-sm font-medium pb-2 transition-colors ${
              selectedCategory === (cat === 'All' ? 'all' : cat.toLowerCase())
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}

export default SearchBar;