import React from 'react';

function ProductList({ products = [], hasSearched = false }) {
  // If no products found AND user has searched
  if ((!products || products.length === 0) && hasSearched) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
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

  return (
    <div className="bg-gray-50 p-4">
      <div className="space-y-3">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg border border-gray-200 p-3 flex space-x-3 hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded border border-gray-100"
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

export default ProductList;