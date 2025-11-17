import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, User, ArrowLeft, Star, MapPin, CheckCircle, Package } from 'lucide-react';
import Header from './Header';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import SupplierInfo from './SupplierInfo';
import SimilarProducts from './SimilarProducts';
import { recommendedProducts } from '../components2/mockData';

// Main Product Detail Page Component
export default function ProductDetailPage() {
  const { id } = useParams(); // Get product ID from URL
  
  // You can use this id to fetch specific product data
  console.log('Product ID from URL:', id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProductImage />
      <ProductInfo />
      <SupplierInfo />
      <SimilarProducts products={recommendedProducts} />
    </div>
  );
}