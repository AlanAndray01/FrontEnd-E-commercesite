import React, { useState, useEffect } from 'react';

function PromoDeals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let endTime = localStorage.getItem('dealsEndTime');
    if (!endTime) {
      const now = new Date().getTime();
      endTime = now + 5 * 24 * 60 * 60 * 1000;
      localStorage.setItem('dealsEndTime', endTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        const newEndTime = now + 5 * 24 * 60 * 60 * 1000;
        localStorage.setItem('dealsEndTime', newEndTime);
        setTimeLeft({ days: 5, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Laptops',
      discount: '-15%',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'GoPro cameras',
      discount: '-40%',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Headphones',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Canon cameras',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className=" py-2 md:px-4 bg-white md:bg-teal-50 shadow-sm rounded-sm lg:px-12">
      {/* MOBILE: keep existing stacked layout (title + inline timer, products below) */}
      <div className="md:hidden md:px-4">
        <div className=" px-0 flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Deals and offers</h2>
            <p className="text-xs text-gray-500">Electronic equipments</p>
          </div>

          <div className="flex items-center space-x-2">
            {/* Mobile timer (no Days box on small screens) */}
            <div className="flex flex-col items-center bg-gray-100">
              <div className="bg-gray-100 px-4 py-1 rounded text-center min-w-[40px]">
                <span className="text-md font-bold text-gray-700">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500">Hour</p>
            </div>

            <div className="flex flex-col items-center bg-gray-100">
              <div className="bg-gray-100 px-4 py-1 rounded text-center min-w-[40px]">
                <span className="text-md font-bold text-gray-700">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500">Min</p>
            </div>

            <div className="flex flex-col items-center bg-gray-100">
              <div className="bg-gray-100 px-4 py-1 rounded text-center min-w-[30px]">
                <span className="text-md font-bold text-gray-700">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-gray-500">Sec</p>
            </div>
          </div>
        </div>

        {/* mobile horizontal scroll products (unchanged) */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-40 border border-gray-200  bg-white">
              <div className="p-3">
                <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
              </div>
              <div className="px-3 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MD+ (tablet & desktop): left card with title+timer, right products beside it */}
      <div className="hidden md:block px-4">
        <div className="md:grid md:grid-cols-[260px_1fr] items-start">
          {/* Left card: title + stacked timer boxes */}
          <div className="bg-white border md:h-full border-gray-200 rounded-l-lg p-4 flex flex-col items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Deals and offers</h2>
              <p className="text-sm text-gray-500">Electronic equipments</p>
            </div>

            <div className="mt-4 w-full">
              <div className="flex items-center space-x-3 ">
                <div className="flex flex-col items-center bg-gray-100">
                  <div className="bg-gray-100 px-3 py-1 rounded min-w-[48px] text-center">
                    <span className="text-lg font-bold text-gray-700">{String(timeLeft.days).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-500">Days</p>
                </div>

                <div className="flex flex-col items-center bg-gray-100">
                  <div className="bg-gray-100 px-3 py-1 rounded min-w-[48px] text-center">
                    <span className="text-lg font-bold text-gray-700">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-500">Hour</p>
                </div>

                <div className="flex flex-col items-center bg-gray-100">
                  <div className="bg-gray-100 px-3 py-1 rounded min-w-[48px] text-center">
                    <span className="text-lg font-bold text-gray-700">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-500">Min</p>
                </div>

                <div className="flex flex-col items-center bg-gray-100">
                  <div className="bg-gray-100 px-3 py-1 rounded min-w-[48px] text-center">
                    <span className="text-lg font-bold text-gray-700">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-500">Sec</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: products in columns with vertical dividers */}
          <div className="bg-white border border-gray-100 ">
            <div className="grid grid-cols-5 divide-x divide-gray-200 ">
              {products.map((product,) => (
                <div key={product.id} className="flex flex-col items-center justify-center md:px-0 py-6 px-6">
                  <div className="w-32 h-32 md:w-24 md:h-24 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full rounded-lg object-contain" />
                  </div>
                  <h3 className="mt-4 text-sm font-medium text-gray-900">{product.name}</h3>
                  <span className="mt-2 inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
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

export default PromoDeals;