import React, { useState } from 'react';
import { Heart, CheckCircle, Globe, Shield, MessageSquareText, Flame } from 'lucide-react';

const DesktopProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&h=500&fit=crop'
  ];

  return (
    <div className="hidden lg:flex bg-teal-50 py-2 px-16">
      {/* Left Section - Product Images */}
      <div className="w-96 flex-shrink-0">
        <div className="bg-white  rounded-l-lg overflow-hidden">
          {/* Main Image Display */}
          <div className="w-full aspect-square bg-white  flex items-center justify-center p-4">
            <img
              src={images[selectedImage]}
              alt="Product main view"
              className="w-full h-full border border-gray-200 rounded-lg object-contain transition-opacity duration-300 ease-in-out"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-1 p-4 pb-16 border-gray-200">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-14 h-14 border rounded overflow-hidden transition-all ${
                  selectedImage === index
                    ? 'border-gray-400'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section - Product Details */}
      <div className="flex-1 bg-white px-2 py-4">
        {/* Stock Status */}
        <div className="flex items-center gap-2 text-green-600 text-sm mt-1 mb-2">
          <CheckCircle className="w-4 h-4" />
          <span>In stock</span>
        </div>

        {/* Product Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h1>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((star) => (
              <span key={star} className="text-orange-400 text-lg ">★</span>
            ))}
            <span className="text-gray-300 text-lg">★</span>
          </div>
          <span className="text-orange-400 text-sm font-semibold">9.3</span>
          <span className="text-gray-500 text-sm flex gap-2 items-center">
            <span className="text-gray-400 text-lg">•</span>
            <MessageSquareText className="w-4 h-4 text-gray-400" />
            32 reviews</span>
          <span className="text-gray-500 text-sm flex gap-2 items-center">
            <span className="text-gray-400 text-lg">•</span>
            <Flame className="w-5 h-5 text-gray-400" />
            154 sold</span>
        </div>

        {/* Pricing */}
        <div className="flex gap-4 bg-orange-50 p-4 rounded mb-2">
          <div>
            <div className="text-2xl font-bold text-red-500">$98.00</div>
            <div className="text-xs text-gray-500">50-100 pcs</div>
          </div>
          <div className='border-l border-gray-400 px-4'>
            <div className="text-2xl font-bold text-gray-900">$90.00</div>
            <div className="text-xs text-gray-500">100-700 pcs</div>
          </div>
          <div className='border-l border-gray-400 px-4'>
            <div className="text-2xl font-bold text-gray-900">$78.00</div>
            <div className="text-xs text-gray-500">700+ pcs</div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="space-y-3 text-sm">
          <div className="flex border-b border-gray-200 pb-2">
            <span className="text-gray-500 w-32">Price:</span>
            <span className="text-gray-700">Negotiable</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-32">Type:</span>
            <span className="text-gray-700">Classic shoes</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-32">Material:</span>
            <span className="text-gray-700">Plastic material</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="text-gray-500 w-32">Design:</span>
            <span className="text-gray-700">Modern nice</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-32">Customization:</span>
            <span className="text-gray-700">Customized logo and <br></br>design custom packages</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-32">Protection:</span>
            <span className="text-gray-700">Refund Policy</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="text-gray-500 w-32">Warranty:</span>
            <span className="text-gray-700">2 years full warranty</span>
          </div>
        </div>
      </div>

      {/* Right Section - Supplier Info */}
      <div className="w-78 p-4 flex-shrink-0 rounded-r-lg bg-white space-y-4">
        {/* Supplier Card */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4">
          <div className="flex items-start border-b border-gray-200 gap-3 pb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 font-semibold text-lg">
              R
            </div>
            <div>
              <div className="text-sm text-gray-600">Supplier</div>
              <div className="font-semibold text-gray-900">Guanjoi Trading LLC</div>
            </div>
          </div>

          {/* Supplier Details */}
          <div className="space-y-2 text-sm pb-4 pt-2">
            <div className="flex items-center gap-2 text-gray-400">
              <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5 h-3" />
              <span>Germany, Berlin</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Seller</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Globe className="w-4 h-4" />
              <span>Worldwide shipping</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mb-2 transition-colors">
            Send inquiry
          </button>
          <button className="w-full border border-gray-200 rounded-lg text-blue-500 hover:text-blue-700 font-medium py-2 transition-colors">
            Seller's profile
          </button>
        </div>

        {/* Save for Later */}
        <button className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center gap-2 text-blue-500 hover:text-red-500 hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5" />
          <span className="font-medium ">Save for later</span>
        </button>
      </div>
    </div>
  );
};

export default DesktopProductImage;