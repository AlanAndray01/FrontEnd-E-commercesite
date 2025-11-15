import React, { useState, useEffect } from 'react';

function PromoDeals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if there's a saved end time in localStorage
    let endTime = localStorage.getItem('dealsEndTime');
    
    if (!endTime) {
      // If no end time exists, set it to 5 days from now
      const now = new Date().getTime();
      endTime = now + (5 * 24 * 60 * 60 * 1000); // 5 days in milliseconds
      localStorage.setItem('dealsEndTime', endTime);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        // Timer expired, reset to 5 days
        const newEndTime = now + (5 * 24 * 60 * 60 * 1000);
        localStorage.setItem('dealsEndTime', newEndTime);
        setTimeLeft({
          days: 5,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        // Calculate time left
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
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Smart watches',
      discount: '-25%',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="bg-white py-2 shadow-sm">
      {/* Header with Timer */}
      <div className="flex items-center p-2 justify-between mb-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Deals and offers</h2>
          <p className="text-sm text-gray-500">Electronic equipments</p>
        </div>
        
        {/* Countdown Timer - Removed days box */}
        <div className="flex items-center space-x-2">
          <div className="text-center">
            <div className="bg-gray-100  px-3 py-1 min-w-[40px]">
              <span className="text-lg font-bold text-gray-500">{String(timeLeft.hours).padStart(2, '0')}</span>
            <p className="text-xs text-gray-500 ">Hour</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100  px-3 py-1 min-w-[40px]">
              <span className="text-lg font-bold text-gray-500">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <p className="text-xs text-gray-500 ">Min</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100  px-3 py-1 min-w-[40px]">
              <span className="text-lg font-bold text-gray-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <p className="text-xs text-gray-500 ">Sec</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Product List - No background on images */}
      <div className="flex overflow-x-auto border border-gray-200 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 border border-gray-200 w-40">
            {/* Removed background from image container */}
            <div className="rounded-lg p-4 mb-2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-contain"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 text-center">{product.name}</h3>
            <div className="text-center">
              <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                {product.discount}
              </span>
            </div>
          </div>
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
    </div>
  );
}

export default PromoDeals;