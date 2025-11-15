import React from 'react';

function RecommendedItems() {
  const products = [
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 10,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 11,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 12,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 13,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 14,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 15,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 16,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 17,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 18,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 19,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 20,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 21,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 22,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 23,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 24,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 25,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 26,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 27,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop'
    },
    {
      id: 28,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'
    },
    {
      id: 29,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 30,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended items</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Product Image */}
              <div className="bg-gray-50 p-4 flex items-center justify-center h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <p className="text-lg font-bold text-gray-900 mb-2">{product.price}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendedItems;