import React, { useState } from 'react';

export default function SavedForLater() {
    const [savedItems, setSavedItems] = useState([
        {
            id: 1,
            name: "Gaming Headset with Mic",
            price: 57.70,
            // Updated link for Headset (using Picsum for stability)
            image: "https://picsum.photos/seed/headset/200/200", 
        },
        {
            id: 2,
            name: "Smartphone with Sleek Design",
            price: 57.70,
            // Updated link for Smartphone (using Picsum for stability)
            image: "https://picsum.photos/seed/smartphone/200/200", 
        },
        {
            id: 3,
            name: "Smartwatch with Sport Band",
            price: 57.70,
            // Updated link for Smartwatch (using Picsum for stability)
            image: "https://picsum.photos/seed/smartwatch/200/200", 
        },
        {
            id: 4,
            name: "Regular Fit Resort Shirt", 
            price: 57.70,
            // Updated link for Shirt (using Picsum for stability)
            image: "https://picsum.photos/seed/shirt/200/200", 
        },
        {
            id: 5,
            name: "Gaming Headset with Mic",
            price: 57.70,
            // Updated link for Headset (using Picsum for stability)
            image: "https://picsum.photos/seed/headset/200/200", 
        },
        {
            id: 6,
            name: "Smartphone with Sleek Design",
            price: 57.70,
            // Updated link for Smartphone (using Picsum for stability)
            image: "https://picsum.photos/seed/smartphone/200/200", 
        },
        {
            id: 7,
            name: "Smartwatch with Sport Band",
            price: 57.70,
            // Updated link for Smartwatch (using Picsum for stability)
            image: "https://picsum.photos/seed/smartwatch/200/200", 
        },
        {
            id: 8,
            name: "Regular Fit Resort Shirt", 
            price: 57.70,
            // Updated link for Shirt (using Picsum for stability)
            image: "https://picsum.photos/seed/shirt/200/200", 
        }
    ]);

    const handleMoveToCart = (id) => {
        // Find the item and log it before removal
        const itemToMove = savedItems.find(item => item.id === id);
        console.log(`Move item to cart:`, itemToMove);
        
        // Remove item from savedItems list
        setSavedItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleRemove = (id) => {
        console.log(`Remove item with ID: ${id}`);
        // Remove item from savedItems list
        setSavedItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-green-100 p-2 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold bg-green-100 text-gray-900 mb-4 px-1">Saved for later</h2>
            
            <div className=" bg-green-100 space-y-2">
                {savedItems.map((item) => (
                    <div key={item.id} className="flex items-center bg-white border border-gray-200 rounded-lg gap-4 p-3">
                        
                        {/* Product Image */}
                        <div className="w-20 h-20 flex-shrink-0">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>

                        {/* Product Details and Buttons */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-normal text-gray-900 leading-tight">
                                {item.name}
                            </h3>
                            <p className="text-lg font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => handleMoveToCart(item.id)}
                                    className="px-3 py-1 text-sm border border-gray-200 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                    Move to cart
                                </button>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="px-3 py-1 text-sm border border-gray-200 text-red-500 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}                                               