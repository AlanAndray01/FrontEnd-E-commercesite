import ReactCountryFlag from "react-country-flag"

// import React, { useState } from 'react'
import { ChevronRight, CheckCircle, Globe, ShieldCheck } from 'lucide-react'

const SupplierInfo = () => {
    //   const [isWishlisted, setIsWishlisted] = useState(false)

    return (
        <div className="lg:hidden w-full max-w-sm border border-gray-200 rounded-lg p-4 bg-white">
            {/* Top section with supplier info */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    {/* Initials box */}
                    <div className="w-12 h-12 rounded bg-cyan-100 flex items-center justify-center">
                        <span className="text-cyan-600 font-semibold text-lg">R</span>
                    </div>
                    {/* Supplier name */}
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500">Supplier</p>
                        <p className="text-gray-900 font-medium">Guanjoi Trading LLC</p>
                    </div>
                </div>
                {/* Chevron icon */}
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            {/* Bottom section with flags and badges */}
            <div className="flex items-center gap-6">
                {/* Germany flag */}
                <div className="flex items-center gap-2">
                    <ReactCountryFlag
                        countryCode="DE"
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title="DE"
                    />
                    {/* <span className="text-xl">🇩🇪</span> */}
                    <span className="text-gray-700 text-md">Germany</span>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 text-md">Verified</span>
                </div>

                {/* Shipping */}
                <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 text-md">Shipping</span>
                </div>
            </div>
        </div>
    )
}

export default SupplierInfo
