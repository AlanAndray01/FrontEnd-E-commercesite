import React from 'react';
import { ArrowRight } from 'lucide-react';

function ConsumerElectronics() {
  const products = [
    {
      id: 1,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Smart watches',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">Consumer electronics</h2>
      </div>

      {/* Scrollable Products */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 border-r border-gray-200 p-4 w-44">
            <div className="bg-gray-50 rounded-lg mb-3 flex items-center justify-center h-32">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-sm text-gray-900 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="p-4 border-t border-gray-200">
        <a 
          href="/category/consumer-electronics" 
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Source now
          <ArrowRight size={18} className="ml-2" />
        </a>
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
    </div>
  );
}

export default ConsumerElectronics;