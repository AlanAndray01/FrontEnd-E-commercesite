'use client'

import { useState } from 'react'
import { Heart, FileText, MessageSquareText, Flame } from 'lucide-react'

function ProductInfo() {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const rating = 4
  const totalStars = 5
  const reviews = 32
  const sold = 154
  const price = 129.95
  const quantity = '50-100 pcs'

  return (
    <div className="bg-white p-3 shadow-sm border border-gray-200">
      {/* Rating and Stats */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(totalStars)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-300 text-gray-300'
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-400 mx-1 text-lg">•</span>
        <span className="text-gray-600 text-sm flex items-center gap-1">
          <MessageSquareText className="w-4 h-4 text-gray-400" />
          {reviews} reviews
        </span>
        <span className="text-gray-400 text-lg">•</span>
        <span className="text-gray-600 text-sm flex items-center gap-1">
          <Flame className="w-5 h-5 text-gray-400" /> {sold} sold
        </span>
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Perfect T-shirts for you guys...
      </h2>

      {/* Price */}
      <div className="mb-4">
        <span className="text-red-500 font-bold text-lg">${price.toFixed(2)}</span>
        <span className="text-gray-500 text-sm ml-2">({quantity})</span>
      </div>

      {/* Send Inquiry Button with Wishlist */}
      <div className="flex gap-1 mb-6">
        <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors ">
          Send inquiry
        </button>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`px-3 py-3 rounded-xl border border-gray-100 transition-colors ${
            isWishlisted
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
        >
          <Heart
            className={`w-6 h-6 ${
              isWishlisted
                ? 'fill-red-500 text-red-500'
                : 'text-blue-600'
            }`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-3 mb-6">
        <div className="flex gap-3">
          <span className="text-gray-500 px-2 text-md font-medium min-w-24">Condition</span>
          <span className="text-gray-700 text-md font-medium">Brand new</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500 px-2 text-md font-medium min-w-24">Material</span>
          <span className="text-gray-700 text-md font-medium">Plastic</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500 px-2 text-md font-medium min-w-24">Category</span>
          <span className="text-gray-700 text-md font-medium">Electronics, gadgets</span>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500 px-2 text-md font-medium min-w-24">Item num</span>
          <span className="text-gray-700 text-md font-medium">23421</span>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...
        </p>
        <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
          Read more
        </button>
      </div>
    </div>
  )
}

export default ProductInfo