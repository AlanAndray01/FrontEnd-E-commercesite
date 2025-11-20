import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Shopcart() {
  const navigate = useNavigate();

  const handleBack = () => {
  if (window.history.state && window.history.state.idx > 0) {
    navigate(-1); // Go back if there's history
  } else {
    navigate('/'); // Otherwise go to home
  }
};

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center px-4 py-4">
        <button 
          onClick={handleBack}
          className="mr-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">
          Shopping cart
        </h1>
      </div>
    </div>
  );
}
export default Shopcart