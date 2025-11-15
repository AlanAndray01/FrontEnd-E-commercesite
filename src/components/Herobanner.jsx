import React from 'react';

function Herobanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 overflow-hidden">
      {/* Background Pattern/Image */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url('https://i.postimg.cc/RhRgTJH5/Group-982.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative px-6 py-8  md:py-16">
        <h2 className="text-xl md:text-2xl font-bold text-white pb-4 mb-2 max-w-md">
          An easy way to send<br />
          requests to all suppliers
        </h2>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
          Send inquiry
        </button>
      </div>
    </div>
  );
}

export default Herobanner;