import React from 'react'
import { ArrowLeft, ShoppingCart, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleBackClick = () => {
        // Go back to previous page or home if no history
        navigate(-1) // This goes back to previous page
        // OR use this to always go to home:
        // navigate('/')
    }

    return (
        <>
            <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
                <button 
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={handleBackClick}
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                    <button 
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Shopping cart"
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