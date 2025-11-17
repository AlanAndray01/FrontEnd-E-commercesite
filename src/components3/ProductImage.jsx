import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ProductImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default images if none provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop'
  ];

  const productImages = images.length > 0 ? images : defaultImages;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  // Handle swipe for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Main Image Display */}
      <div 
        className="relative w-full h-96 md:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Navigation Arrows - Bottom Right */}
        <div className="absolute bottom-4 right-4 flex">
          <button
            onClick={prevSlide}
            className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-l-full transition-all duration-200"
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-r-full transition-all duration-200"
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;