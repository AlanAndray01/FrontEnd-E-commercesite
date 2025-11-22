import React, { useState } from 'react';

function Herobanner() {
  const [formData, setFormData] = useState({
    item: '',
    details: '',
    quantity: '',
    unit: 'Pcs'
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 lg:py-1  mb-6">
      <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 overflow-hidden mb-2 lg:rounded-lg md:rounded-md">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url('https://i.postimg.cc/RhRgTJH5/Group-982.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Content Container */}
        <div className="relative">
          {/* Mobile View */}
          <div className="md:hidden px-6 py-8">
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              An easy way to send<br />
              requests to all suppliers
            </h2>
            
            <button 
              onClick={handleSubmit}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-md transition-colors shadow-md"
            >
              Send inquiry
            </button>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 px-8 rounded-lg lg:px-12 py-12 items-center">
            {/* Left Side - Text */}
            <div className=''>
              <h2 className="text-3xl absolute top-8 left-8 lg:top-12 lg:left-12 lg:text-4xl font-semibold mb-2 text-white leading-tight">
                An easy way to send<br />
                requests to all suppliers
              </h2>
              <p className="text-white text-base mb-24 opacity-90 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Send quote to suppliers
              </h3>

              <div className="space-y-4">
                {/* Item Input */}
                <div>
                  <input
                    type="text"
                    placeholder="What item you need?"
                    value={formData.item}
                    onChange={(e) => setFormData({...formData, item: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Details Textarea */}
                <div>
                  <textarea
                    placeholder="Type more details"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  />
                </div>

                {/* Quantity and Unit */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({...formData, unit: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="Pcs">Pcs</option>
                    <option value="Box">Box</option>
                    <option value="Kg">Kg</option>
                    <option value="Lbs">Lbs</option>
                    <option value="Unit">Unit</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-md"
                >
                  Send inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;