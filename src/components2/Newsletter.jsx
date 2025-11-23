import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    // Add your subscription logic here
  };

  return (
    <div className="bg-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Subscribe on our newsletter
          </h2>
          
          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>

          {/* Desktop View - Horizontal Form */}
          <div className="hidden md:flex items-center justify-center gap-2 max-w-xl mx-auto">
            <div className="relative w-1/2">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile View - Stacked Form */}
          <div className="md:hidden flex flex-col items-center gap-3 max-w-sm mx-auto">
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;