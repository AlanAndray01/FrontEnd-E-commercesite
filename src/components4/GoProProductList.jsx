import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const GoProProductList = () => {
  const [savedProducts] = useState([
    {
      id: 1,
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 99.50,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 99.50,
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 99.50,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 99.50,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop'
    }
  ]);

  const handleMoveToCart = (productId) => {
    console.log('Moving product to cart:', productId);
    // Add your move to cart logic here
  };

  return (
    <div className='my-4 lg:px-8 bg-teal-50'>
      {/* Hidden on mobile and tablet, visible on desktop (lg breakpoint and above) */}
      <div className="bg-white mx-0 lg:mx-12 p-4 rounded-lg hidden lg:block">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Saved for later</h2>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {savedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="bg-gray-50 p-2 flex items-center justify-center h-42">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-44 h-44 object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/f3f4f6/6b7280?text=Product';
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-2">
                  {/* Price */}
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    ${product.price.toFixed(2)}
                  </div>

                  {/* Product Name */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </p>

                  {/* Move to Cart Button - Positioned at bottom */}
                  <div className="mr-16 pr-10 mt-auto">
                    <button
                      onClick={() => handleMoveToCart(product.id)}
                      className="w-full flex items-center justify-center gap-2 px-2 py-1 border border-gray-200 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4 font-semibold" />
                      Move to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoProProductList;