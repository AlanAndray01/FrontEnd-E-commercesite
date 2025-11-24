import React from 'react';

function SimilarProducts({ products = [] }) {
  // If no products, don't show the section
//   if (!products || products.length === 0) {
//     return null;
//   }

  return (
    <div className="bg-teal-50 lg:px-14 py-4">
      <div className="lg:mx-3 lg:p-2 lg:rounded-lg px-4 lg:bg-white sm:bg-teal-50 md:bg-teal-50">
        {/* Section Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 lg:hidden">Similar Products</h2>
        <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-2">Related products</h2>
        
        {/* Scrollable Product Grid - Same for both mobile and desktop */}
        <div className="flex overflow-x-auto space-x-4 p-2 pb-2 scrollbar-hide">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 bg-white p-3 w-36 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="bg-gray-100 rounded-lg mb-2 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-28 object-cover"
                />
              </div>
              
              {/* Product Info - Mobile Layout (price first) */}
              <div className="lg:hidden">
                {/* Price */}
                <p className="text-base font-bold text-gray-900 mb-1">
                  ${product.price.toFixed(2)}
                </p>
                
                {/* Product Name */}
                <p className="text-xs text-gray-600 line-clamp-2">
                  {product.name}
                </p>
              </div>

              {/* Product Info - Desktop Layout (title first, then price) */}
              <div className="hidden lg:block">
                {/* Product Name */}
                <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                  {product.name}
                </p>
                
                {/* Price */}
                <p className="text-base font-bold text-gray-900">
                  ${product.price.toFixed(2)}
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

export default SimilarProducts;