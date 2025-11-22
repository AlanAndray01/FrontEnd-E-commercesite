// ...existing code...
import React from 'react';
import { Search, LayoutGrid, Send, ShieldCheck } from 'lucide-react';

const Extraservices = () => {
    const services = [
        {
            id: 1,
            title: 'Source from Industry Hubs',
            icon: Search,
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop'
        },
        {
            id: 2,
            title: 'Customize Your Products',
            icon: LayoutGrid,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
        },
        {
            id: 3,
            title: 'Fast, reliable shipping by ocean or air',
            icon: Send,
            image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop'
        },
        {
            id: 4,
            title: 'Product monitoring and inspection',
            icon: ShieldCheck,
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-10 mb-8">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our extra services</h2>

            {/* Desktop View - Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div
                            key={service.id}
                            /* make card relative and allow overflow so icon can overlap image+text */
                            className="relative bg-white rounded-lg overflow-visible border border-gray-200 hover:shadow-lg transition-shadow duration-300 pb-6"
                        >
                            {/* Image Container (keep overflow-hidden so image respects rounded top) */}
                            <div className="relative h-28 overflow-hidden rounded-t-lg">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Icon badge moved out so it can overlap image and text.
                  Position using negative bottom so it's half on image, half on text. */}
                            <div className="absolute bottom-16 right-3 bg-teal-100 rounded-full p-3 shadow-md z-10">
                                <IconComponent className="w-6 h-6 text-gray-700" />
                            </div>


                            {/* Text Content - add top padding so icon doesn't cover text */}
                            <div className="py-2 p-3">
                                <h3
                                    className="text-base font-medium text-gray-900 leading-snug"
                                    dangerouslySetInnerHTML={{
                                        __html: service.id === 1 ? "Source from<br>Industry Hubs" :
                                            service.id === 2 ? "Customize Your<br>Products" :
                                                service.id === 3 ? "Fast, reliable shipping<br>by ocean or air" :
                                                    service.id === 4 ? "Product monitoring<br>and inspection" : service.title
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile View - Horizontal Scroll */}
            <div className="md:hidden flex overflow-x-auto scrollbar-hide gap-4">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div
                            key={service.id}
                            className="relative flex-shrink-0 w-60 bg-white rounded-lg overflow-visible border border-gray-200 shadow-sm"
                        >
                            {/* Image Container */}
                            <div className="relative h-28 overflow-hidden rounded-t-lg">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Icon badge - same overlap behavior on mobile */}
                            <div className="absolute bottom-14 right-3 bg-teal-100 rounded-full p-3 shadow-md z-10">
                                <IconComponent className="w-6 h-6 text-gray-700" />
                            </div>

                            {/* Text Content */}
                            <div className="py-4 p-3">
                                <h3
                                    className="text-base font-medium text-gray-900 leading-snug"
                                    dangerouslySetInnerHTML={{
                                        __html: service.id === 1 ? "Source from<br>Industry Hubs" :
                                            service.id === 2 ? "Customize Your<br>Products" :
                                                service.id === 3 ? "Fast, reliable shipping<br>by ocean or air" :
                                                    service.id === 4 ? "Product monitoring<br>and inspection" : service.title
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default Extraservices;
// ...existing code...