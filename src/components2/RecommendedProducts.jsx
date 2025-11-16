import React from 'react';

function RecommendedProducts({ products = [] }) {
  // If no products, don't show the section
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-4">
      <div className="px-4">
        {/* Section Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2">You may also like</h2>
        
        {/* Scrollable Product Grid */}
        <div className="flex overflow-x-auto space-x-4 p-2 pb-2 scrollbar-hide">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 p-3 w-36 cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="bg-gray-100 rounded-lg mb-2 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-28 object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div>
                {/* Price */}
                <p className="text-base font-bold text-gray-900 mb-1">
                  ${product.price.toFixed(2)}
                </p>
                
                {/* Product Name */}
                <p className="text-xs text-gray-600 line-clamp-2">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default RecommendedProducts;