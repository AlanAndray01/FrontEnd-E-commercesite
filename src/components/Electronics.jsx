import React from 'react';
import { ArrowRight } from 'lucide-react';
import promoImage0 from '../assets/Image/backgrounds/image 98.png';

// const promoImage = 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=800&fit=crop';
const promoImage = promoImage0

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
    },
    {
      id: 7,
      name: 'Home appliance',
      price: 'From USD 19',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Coffee maker',
      price: 'From USD 10',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-white lg:px-14 lg:py-2 overflow-hidden lg:bg-teal-50">
      {/* MOBILE VIEW - unchanged */}
      <div className="md:hidden border border-gray-200 mb-2">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Consumer electronics</h2>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 border-r border-gray-200 p-2 w-44">
              <div className="mb-3 p-1 flex items-center justify-center h-32">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm px-4 text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm px-4 text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <a
            href="/category/consumer-electronics"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Source now
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>

      {/* DESKTOP / TABLET (md+) - left promo panel + right grid with horizontal item rows */}
      <div className="hidden md:block px-15 mx-2">
        <div className="md:grid md:grid-cols-[260px_1fr]">
          {/* Left promo area - relative so content can be top-left */}
          <div
            className="p-5 bg-cover rounded-l-lg bg-center relative "
            style={{ backgroundImage: `url(${promoImage})` }}
            aria-hidden="true"
          >
            {/* Top-left content */}
            <div className="absolute top-4 left-4 p-2 rounded-md max-w-[180px]">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Consumer <br></br>electronics</h2>
              <a
                href="/category/consumer-electronics"
                className="inline-flex items-center bg-white font-semibold text-black-600 px-4 py-2 rounded shadow-sm hover:text-blue-600"
              >
                Source now
                {/* <ArrowRight size={16} className="ml-2" /> */}
              </a>
            </div>
            {/* ensure left panel keeps height consistent with grid */}
            <div className="hidden md:block h-full" />
          </div>

          {/* Right product grid: 4 columns x 2 rows, with dividers; each item is horizontal (text left, small image right) */}
          <div className="border-1 border-gray-200 bg-white">
            <div className="grid grid-cols-4 divide-x divide-y divide-gray-200">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-start justify-between p-4 min-h-[120px] bg-white"
                >
                  <div className="pr-4">
                    <h4 className="text-md text-gray-900 font-medium">{product.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                  </div>

                  <div className="flex-shrink-0 ml-4 pt-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-contain rounded-sm border border-gray-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default ConsumerElectronics;