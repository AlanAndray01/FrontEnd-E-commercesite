import React from 'react';

const categories = [
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category'
];

const Hero = () => {
    return (
        <div className="max-w-8xl bg-teal-50 py-2 px-0 sm:px-0 lg:px-14">
            {/* Grid layout: left category | banner | right panels
                Outer border/padding/margin applied only on lg+ so mobile shows banner clean */}
            <div className="bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:p-2 lg:m-2 grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] gap-2 items-stretch">

                {/* Left: Category nav (desktop only) */}
                <aside className="hidden lg:block lg:h-[380px]">
                    <div className="overflow-hidden bg-white h-full">
                        <nav className="space-y-0 px-2 h-full">
                            {categories.map((c, i) => (
                                <a
                                    key={c}
                                    href="#"
                                    className={`block text-left w-full px-3 py-2.5 rounded text-sm transition-colors ${i === 0
                                            ? 'text-gray-700 hover:font-medium hover:bg-blue-50'
                                            : 'text-gray-700 hover:font-medium hover:bg-green-50'
                                        }`}
                                >
                                    {c}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Center: Banner */}
                <div className="w-full">
                    {/* No border/shadow/rounding on mobile; applied only from lg */}
                    <div className="relative bg-gradient-to-br from-emerald-200 via-emerald-100 to-white overflow-hidden h-[240px] sm:h-[300px] lg:h-[360px] lg:border lg:shadow-sm lg:rounded-none">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://i.postimg.cc/gJD5RxyB/Banner-board-800x420-2.png"
                            alt="Latest trending electronic items"
                        />

                        {/* Text overlay: keep position and padding so text remains where it was */}
                        <div className="absolute inset-0 flex items-start justify-start p-5 sm:px-14 lg:p-12 pointer-events-none">
                            <div className="max-w-md mt-4 pointer-events-auto">
                                <h2 className="text-2xl lg:text-3xl font-normal text-gray-800 leading-tight">
                                    Latest trending
                                </h2>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-5">
                                    Electronic items
                                </h2>

                                <button
                                    className="inline-flex items-center px-5 py-2.5 bg-white text-black font-medium rounded-md shadow hover:shadow-md hover:bg-gray-50 transition text-sm"
                                    aria-label="Learn more about electronic items"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: User card & offers (desktop only) */}
                <aside className="hidden lg:flex flex-col lg:h-[360px] gap-2">

                    {/* User card */}
<div className="bg-blue-50 border rounded-lg p-2 shadow-sm">
    {/* Avatar and text grouped together */}
    <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
            <p className="text-md text-gray-900 font-semibold">Hi, user</p>
            <p className="text-md text-gray-900 font-semibold">let's get started</p>
        </div>
    </div>

    {/* Buttons stacked below */}
    <div className="flex flex-col gap-2">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium transition">
            Join now
        </button>
        <button className="w-full bg-white hover:bg-gray-100 border border-gray-300 text-blue-600 py-2.5 rounded-xl text-sm font-medium transition">
            Log in
        </button>
    </div>
</div>

                    {/* Offer cards - fill remaining space */}
                    <div className="flex-1 flex flex-col gap-2">
                        {/* Orange offer */}
                        <div className="bg-orange-500 text-white rounded-lg p-2 px-6 shadow-sm flex items-center flex-1">
                            <div className="text-left">
                                <p className="text-lg leading-tight">Get US $10 off</p>
                                <p className="text-sm mt-1">with a new <br></br> supplier</p>
                            </div>
                        </div>

                        {/* Teal offer */}
                        <div className="bg-teal-500 text-white rounded-lg p-2 px-6 shadow-sm flex items-center flex-1">
                            <div className="text-left">
                                <p className="text-base leading-tight">Send quotes with</p>
                                <p className="text-sm mt-1">supplier <br></br> preferences</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Hero;