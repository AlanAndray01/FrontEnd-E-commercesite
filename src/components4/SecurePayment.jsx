import React from 'react'
import { Lock, MessageCircle, Truck } from 'lucide-react'

const SecurePayment = () => {
  const features = [
    { icon: <Lock className="w-6 h-6 text-gray-600" />, title: "Secure payment", desc: "Have you ever finally just" },
    { icon: <MessageCircle className="w-6 h-6 text-gray-600" />, title: "Customer support", desc: "Have you ever finally just" },
    { icon: <Truck className="w-6 h-6 text-gray-600" />, title: "Free delivery", desc: "Have you ever finally just" },
  ]

  return (
    <div className="hidden lg:flex gap-10 items-center bg-teal-50 px-14 mx-8 py-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="p-3 bg-gray-100 rounded-full">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-xs text-gray-400">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SecurePayment