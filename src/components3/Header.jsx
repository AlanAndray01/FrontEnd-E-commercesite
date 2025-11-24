import React from 'react'
import { ArrowLeft, ShoppingCart, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart');
    };
    
    const handleBackClick = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm lg:hidden">
                <button 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={handleBackClick}
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleCartClick}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="User profile"
                    >
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header