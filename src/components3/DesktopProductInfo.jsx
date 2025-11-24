import { useState } from 'react';
import { Check } from 'lucide-react';

const DesktopProductInfo = () => {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'shipping', label: 'Shipping' },
        { id: 'about', label: 'About seller' }
    ];

    const recommendedProducts = [
        {
            id: 1,
            name: "Men Blazers Sets",
            description: "Elegant Formal",
            price: "$700 - $99.50",
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop"
        },
        {
            id: 2,
            name: "Men Shirt Sleeve",
            description: "Polo Contrast",
            price: "$700 - $99.50",
            image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&h=150&fit=crop"
        },
        {
            id: 3,
            name: "Apple Watch Series",
            description: "Space Gray",
            price: "$700 - $99.50",
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=150&h=150&fit=crop"
        },
        {
            id: 4,
            name: "Basketball Crew",
            description: "Socks Long Stuff",
            price: "$700 - $99.50",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=150&h=150&fit=crop"
        },
        {
            id: 5,
            name: "New Summer Men's",
            description: "castrol T-Shirts",
            price: "$700 - $99.50",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop"
        }
    ];

    return (
        <div className="hidden lg:block bg-teal-50 px-12 py-2">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-5" style={{ gridTemplateColumns: '70% 28%' }}>
                    {/* Left Column - Tabs and Content (70%) */}
                    <div>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            {/* Tab Buttons */}
                            <div className="flex space-x-1 border-b border-gray-200 mb-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-3 font-medium text-sm transition-colors ${activeTab === tab.id
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="prose max-w-none">
                                {activeTab === 'description' && (
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>

                                        <div className="border-t border-gray-200 p-2">
                                            <div className="">
                                                <div className="flex">
                                                    <span className="text-gray-600 px-2 border border-gray-200 bg-gray-100 w-40">Model</span>
                                                    <span className="border border-gray-200 w-48  px-2 text-gray-900">#8786867</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-gray-600 px-2 bg-gray-100 border border-gray-200 w-40">Style</span>
                                                    <span className="border border-gray-200 w-48  px-2 text-gray-900">Classic style</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-gray-600 px-2 bg-gray-100 border border-gray-200 w-40">Certificate</span>
                                                    <span className="border border-gray-200 w-48  px-2 text-gray-900">ISO-898921212</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-gray-600 px-2 bg-gray-100 border border-gray-200 w-40">Size</span>
                                                    <span className="border border-gray-200 w-48 px-2  text-gray-900">34mm x 450mm x 19mm</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="text-gray-600 px-2 bg-gray-100 border border-gray-200 w-40">Memory</span>
                                                    <span className="border border-gray-200 w-48 px-2  text-gray-900">36GB RAM</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 space-y-2">
                                                <div className="flex items-center">
                                                    <Check className="w-5 h-5 text-gray-400 mr-3" />
                                                    <span className="text-gray-700">Some great feature name here</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Check className="w-5 h-5 text-gray-400 mr-3" />
                                                    <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Check className="w-5 h-5 text-gray-400 mr-3" />
                                                    <span className="text-gray-700">Duis aute irure dolor in reprehenderit</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Check className="w-5 h-5 text-gray-400 mr-3" />
                                                    <span className="text-gray-700">Some great feature name here</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div className="text-gray-600">
                                        <p>Reviews content will be displayed here...</p>
                                    </div>
                                )}

                                {activeTab === 'shipping' && (
                                    <div className="text-gray-600">
                                        <p>Shipping information will be displayed here...</p>
                                    </div>
                                )}

                                {activeTab === 'about' && (
                                    <div className="text-gray-600">
                                        <p>About seller information will be displayed here...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - You May Like (30%) */}
                    <div>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">You may like</h3>
                            <div className="space-y-4">
                                {recommendedProducts.map((product) => (
                                    <div key={product.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 truncate">
                                                {product.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 truncate">
                                                {product.description}
                                            </p>
                                            <p className="text-sm font-semibold text-gray-900">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopProductInfo;