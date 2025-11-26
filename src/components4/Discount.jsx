import React from 'react'

const Discount = () => {
  return (
    <div className="lg:bg-teal-50 lg:px-8 lg:mx-12 lg:mb-16 md:mb-4 sm:mb-4">
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 md:p-4 text-white lg:px-8 lg:py-6 py-2 flex flex-col md:flex-row items-center justify-between rounded-lg">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-lg md:text-xl font-semibold">
          Super discount on more than 100 USD
        </h2>
        <p className="text-sm md:text-base mt-2">
          Have you ever finally just write dummy info
        </p>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition duration-300">
        Shop now
      </button>
    </div>
    </div>
  )
}

export default Discount
