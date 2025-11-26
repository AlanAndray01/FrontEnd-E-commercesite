import React, { useState, useMemo } from 'react';
import { MoreVertical, Minus, Plus } from 'lucide-react';

// =================================================================
// 1. MobileCartProduct Component (Displays individual items)
//    - Now only uses local state and helper functions.
// =================================================================
function CartItem({ item, updateQuantity, handleMenuClick }) {
    return (
        <div key={item.id} className="p-4">
            
            {/* Top Row: Image, Details, Menu */}
            <div className="flex gap-3 mb-3">
                {/* Image */}
                <div className="w-16 h-16 flex-shrink-0">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded" 
                    />
                </div>

                {/* Details and Menu Button */}
                <div className="flex-1 min-w-0 flex justify-between">
                    <div className="pr-4">
                        <h3 className=" text-gray-900 text-sm font-semibold leading-tight">
                            {item.name}
                        </h3>
                        {/* Item metadata (size, color, seller) */}
                        <div className="text-xs text-gray-500 mt-1">
                            <p>Size: <span className="text-gray-500">{item.size}</span>, Color: <span className="text-gray-500">{item.color}</span></p>
                            <p>Seller: <span className="text-gray-500">{item.seller}</span></p>
                        </div>
                    </div>
                    
                    {/* More Icon Button */}
                    <button 
                        onClick={() => handleMenuClick(item.id)}
                        className="text-gray-400 hover:text-gray-600 self-start p-1 -m-1"
                    >
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Bottom Row: Quantity Controls and Price */}
            <div className="flex justify-between items-center">
                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-300 rounded-md w-32 h-9">
                    {/* Minus Button */}
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-50 transition-colors h-full rounded-l-md"
                    >
                        <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    {/* Quantity Input/Display */}
                    <span className="flex-1 text-base font-normal text-center border-l border-r border-gray-300 h-full flex items-center justify-center">
                        {item.quantity}
                    </span>
                    {/* Plus Button */}
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 transition-colors h-full rounded-r-md"
                    >
                        <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
                
                {/* Total Price for item */}
                <span className="text-lg font-medium text-gray-900">
                    ${(item.pricePerUnit * item.quantity).toFixed(2)}
                </span>
            </div>
            
        </div>
    );
}

// =================================================================
// 2. CartSummary Component (Displays totals and checkout)
// =================================================================
function CartSummary({ cartItems = [] }) {
    // Dynamic calculations based on cart items
    const { subtotal, totalItems, shipping, tax, total } = useMemo(() => {
        let calculatedSubtotal = 0;
        let calculatedTotalItems = 0;

        cartItems.forEach(item => {
            calculatedSubtotal += item.pricePerUnit * item.quantity;
            calculatedTotalItems += item.quantity;
        });

        // Rules for shipping and tax
        const calculatedShipping = 10.00; // Flat $10 shipping
        const taxRate = 0.07; // 7% tax rate
        const calculatedTax = calculatedSubtotal * taxRate;

        const calculatedTotal = calculatedSubtotal + calculatedShipping + calculatedTax;

        return {
            subtotal: calculatedSubtotal,
            totalItems: calculatedTotalItems,
            shipping: calculatedShipping,
            tax: calculatedTax,
            total: calculatedTotal,
        };
    }, [cartItems]);

    return (
        <div className="w-full mx-auto bg-white p-4 border border-gray-200 shadow-sm">

            {/* Summary details */}
            <div className="space-y-2 mb-4">
                <div className="flex justify-between text-base text-gray-700">
                    <span>Items ({totalItems}):</span>
                    <span className="font-normal">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                    <span>Shipping:</span>
                    <span className="font-normal">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                    <span>Tax :</span>
                    <span className="font-normal">${tax.toFixed(2)}</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center  border-gray-200 mb-6">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-green-500 hover:bg-green-700 text-white font-medium py-3 rounded-md transition-colors text-lg">
                Checkout ({totalItems} items)
            </button>
        </div>
    );
}

// =================================================================
// 3. Exported Default Component (Main Container)
// =================================================================
export default function MobileCartProduct() {
    // This state manages the data for both the product list and the summary
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "T-shirts with multiple colors for men",
            size: "medium",
            color: "gray",
            seller: "Artel Market",
            pricePerUnit: 78.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop"
        },
        {
            id: 2,
            name: "Solid Backpack blue jeans large size",
            size: "medium",
            color: "gray",
            seller: "Artel Market",
            pricePerUnit: 78.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop"
        },
        {
            id: 3,
            name: "Water boiler black for kitchen, 1200 Watt",
            size: "medium",
            color: "gray",
            seller: "Artel Market",
            pricePerUnit: 78.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&h=200&fit=crop"
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return; 
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleMenuClick = (id) => {
        // Functionality for the menu button (e.g., delete item)
        console.log('Menu clicked for item:', id);
    };

    return (
        <div className="lg:hidden container mx-auto flex flex-col lg:flex-row">
            
            {/* Cart Product List */}
            <div className="lg:w-2/3 bg-white border border-gray-200 shadow-sm divide-y divide-gray-200">
                {cartItems.map((item) => (
                    <React.Fragment key={item.id}>
                        <CartItem 
                            item={item} 
                            updateQuantity={updateQuantity} 
                            handleMenuClick={handleMenuClick} 
                        />
                        {/* Removed the internal <hr> since the container has a `divide-y` */}
                    </React.Fragment>
                ))}
            </div>

            {/* Cart Summary (Fixed width for summary) */}
            <div className="lg:w-1/3">
                <CartSummary cartItems={cartItems} />
            </div>
        </div>
    );
}