import React from 'react';

const Hero = () => {
    return (

        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 mb-8">
            <div className=" bg-white grid grid-cols-[240px_1fr_240px] gap-1 h-[420px]">

                {/* ======= COLUMN 1: CATEGORY NAVIGATION (Fixed 280px) ======= */}
                <div className=" bg-white border border-gray-100 rounded-lg overflow-hidden">
                    <div className="space-y-1 p-3">
                        {/* Note: I'm using <div> here but you should use <a> or <button> for links */}
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Automobiles</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Clothes and wear</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Home interiors</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Computer and tech</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Tools, equipments</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Sports and outdoor</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Animal and pets</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">Machinery tools</a>
                        <a href="#" // Replace '#' with the actual URL for the Automobiles page
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 p-3 rounded cursor-pointer no-underline block">More category</a>
                    </div>
                </div>

                {/* ======= COLUMN 2: HERO BANNER (Flexible 1fr) ======= */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* The image should be set as a background or as an absolute element */}
                    <img
                        className="h-full w-full "
                        src="src/assets/Image/backgrounds/Banner-board-800x420 2.png"
                        alt="banner"
                    />

                    {/* Content Overlay - Adjust positioning to match the image's design */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start text-left pl-12 pt-16 text-white">
                        <h2 className="text-4xl font-bold mb-4 text-black">
                            Latest trending <br /> Electronic items
                        </h2>
                        <button className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* ======= COLUMN 3: USER/OFFER PANELS (Fixed 250px) ======= */}
                <div className="flex flex-col space-y-4">

                    {/* Top Panel: Hi, user */}
                    <div className="flex flex-col items-center bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="mb-2">
                            {/* Placeholder for the avatar/icon */}
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">Hi, user let's get stated</p>

                        <button className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg mb-2 hover:bg-blue-600 transition">
                            Join now
                        </button>
                        <button className="w-full bg-white text-blue-500 border border-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                            Log in
                        </button>
                    </div>

                    {/* Middle Panel: Offer 1 */}
                    <div className="py-6 bg-orange-400 text-white rounded-lg p-4 shadow-md">
                        <p className="text-lg font-semibold">Get US $10 off</p>
                        <p className="text-sm">with a new supplier</p>
                    </div>

                    {/* Bottom Panel: Offer 2 */}
                    <div className="py-6 bg-teal-400 text-white rounded-lg p-4 shadow-md">
                        <p className="text-sm font-semibold">Send quotes with</p>
                        <p className="text-lg font-semibold">supplier preferences</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;