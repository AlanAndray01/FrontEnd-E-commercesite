import React from 'react';

const Hero = () => {
    return (

        <div className="max-w-7xl mx-auto sm:px-6 mb-10">
            {/* MAIN GRID:
              - Mobile: 1 column (stacks banner only, as sidebars are hidden)
              - Large Screens (lg): 3-column layout as specified
            */}
            <div className="bg-white grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-5">

                {/* ======= COLUMN 1: CATEGORY NAVIGATION (Desktop Only) ======= */}
                {/* - hidden: Hides on mobile/tablet
                  - lg:block: Appears on large screens
                  - h-[420px]: Fixed height to match the banner
                */}
                {/* <div className="hidden lg:block bg-white border border-gray-200 rounded-lg overflow-y-auto h-[420px]">
                    <div className="space-y-1 p-2"> */}
                        {/* Added bg-gray-100 to first item to match "selected" state in screenshot */}
                        {/* <a href="#"
                            className="w-full text-left bg-white border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Automobiles</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Clothes and wear</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Home interiors</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Computer and tech</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Tools, equipments</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Sports and outdoor</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Animal and pets</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">Machinery tools</a>
                        <a href="#"
                            className="w-full text-left bg-transparent border-none text-gray-700 hover:bg-gray-100 hover:font-semibold p-2 rounded cursor-pointer no-underline block">More category</a>
                    </div>
                </div> */}

                {/* ======= COLUMN 2: HERO BANNER (Visible on all screens) ======= */}
                {/*
                  - h-[300px]: Height for mobile/tablet
                  - lg:h-[420px]: Height for desktop
                */}
                <div className="relative bg-teal-50 sm:rounded-lg overflow-hidden h-[240px] lg:h-[420px]">
                    <img
                        className="h-full w-full object-cover" // Added object-cover
                        src="https://i.postimg.cc/gJD5RxyB/Banner-board-800x420-2.png" // Assuming this is your teal banner image
                        alt="banner"
                    />

                    {/* Content Overlay - Responsive padding and text size */}
                    <div className="absolute inset-0 flex  flex-col justify-start items-start p-6 lg:p-10">
                        <h2 className="text-2xl lg:text-4xl .mb-4 text-black mt-4">
                            Latest trending <br /> <strong>Electronic items</strong>
                        </h2>
                        <button className="bg-white text-blue-500 font-semibold my-8 px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* ======= COLUMN 3: USER/OFFER PANELS (Desktop Only) ======= */}
                {/*
                  - hidden: Hides on mobile/tablet
                  - lg:flex: Appears on large screens as a flex column
                  - h-[420px]: Fixed height to match
                */}
                {/* <div className="hidden lg:flex flex-col space-y-4 h-[420px]"> */}

                    {/* Top Panel: Hi, user - Restructured to match image */}
                    {/* <div className="flex flex-col items-start bg-blue-100 border border-gray-200 rounded-lg p-4 shadow-sm flex-shrink-0">
                        <div className="flex items-center space-x-3 mb-3 w-full">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <p className="text-lg font-semibold text-gray-700">Hi, user <br /> let's get started</p>
                        </div> */}

                        {/* <button className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg mb-2 hover:bg-white hover:text-blue-500 transition">
                            Join now
                        </button>
                        <button className="w-full bg-white text-blue-500 border border-gray-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                            Log in
                        </button>
                    </div> */}

                    {/* Middle Panel: Offer 1 - Added flex-grow */}
                    {/* <div className="bg-orange-400 text-white rounded-lg p-4 shadow-sm flex-grow flex flex-col justify-center">
                        <p className="text-lg font-semibold">Get US $10 off</p>
                        <p className="text-sm">with a new supplier</p>
                    </div> */}

                    {/* Bottom Panel: Offer 2 - Added flex-grow */}
                    {/* Used teal-500 for a closer color match to the image */}
                    {/* <div className="bg-teal-500 text-white rounded-lg p-4 shadow-sm flex-grow flex flex-col justify-center">
                        <p className="text-sm font-semibold">Send quotes with</p>
                        <p className="text-lg font-semibold">supplier preferences</p>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    );
}

export default Hero;