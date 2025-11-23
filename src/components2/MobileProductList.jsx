import React from 'react';
import { useNavigate } from 'react-router-dom';

function MobileProductList({ products = [], hasSearched = false, viewMode = 'list' }) {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // If no products found AND user has searched
  if ((!products || products.length === 0) && hasSearched) {
    return (
      <div className="lg:hidden flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-2">Sorry! Not Found</p>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      </div>
    );
  }

  // If no products and hasn't searched yet, show nothing or loading state
  if (!products || products.length === 0) {
    return null;
  }

  // Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2); // Convert 0-10 scale to 0-5
    const hasHalfStar = (rating / 2) % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-orange-400">★</span>
        ))}
        {/* Half star */}
        {hasHalfStar && <span className="text-orange-400">★</span>}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  // Grid View Layout
  if (viewMode === 'grid') {
    return (
      <div className="lg:hidden bg-teal-50 p-4">
        {/* Responsive grid: 2 columns on mobile, 3 columns on tablet */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image - Fixed size */}
              <div className="flex justify-center mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded border border-gray-100 flex-shrink-0"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/96x96/f3f4f6/6b7280?text=No+Image';
                  }}
                />
              </div>

              {/* Product Info - Fixed height content */}
              <div className="flex flex-col flex-grow">
                {/* Product Name - Fixed height with line clamp */}
                <h3 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.0rem]">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-sm md:text-base font-bold text-gray-900 ">
                  ${product.price.toFixed(2)}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-1">
                  {renderStars(product.rating)}
                  <span className="text-xs text-orange-500 font-medium">{product.rating}</span>
                </div>

                {/* Orders */}
                <p className="text-xs text-gray-500 mb-2">{product.orders} orders</p>

                {/* Free Shipping */}
                {product.freeShipping && (
                  <span className="text-xs font-semibold text-green-600 mt-auto">
                    Free Shipping
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // List View Layout (default)
  return (
    <div className="lg:hidden bg-teal-50 p-4">
      <div className="space-y-3">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg border border-gray-200 p-3 flex space-x-3 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* Product Image - Fixed size */}
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded border border-gray-100"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/f3f4f6/6b7280?text=No+Image';
                }}
              />
            </div>

            {/* Product Info */}
            <div className="flex-grow">
              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-lg font-bold text-gray-900 mb-1">
                ${product.price.toFixed(2)}
              </p>

              {/* Rating and Orders */}
              <div className="flex items-center space-x-2 mb-1">
                {renderStars(product.rating)}
                <span className="text-sm text-orange-500 font-medium">{product.rating}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{product.orders} orders</span>
              </div>

              {/* Free Shipping */}
              {product.freeShipping && (
                <span className="text-xs font-semibold text-green-600">
                  Free Shipping
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileProductList;