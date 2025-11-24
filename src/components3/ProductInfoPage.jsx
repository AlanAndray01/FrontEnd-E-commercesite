/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, User, ArrowLeft, Star, MapPin, CheckCircle, Package } from 'lucide-react';
import Header from './Header';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import SupplierInfo from './SupplierInfo';
import SimilarProducts from './SimilarProducts';
import { recommendedProducts } from '../components2/mockData';
import MainNavbar from './Navbar';
import SubNav from './Subnav';
import DesktopProductInfo from './DesktopProductInfo';
import Discount from './Discount';
import Footer from './Footer'
import Breadcrumb from './BreadCrumb';


// Main Product Detail Page Component
export default function ProductDetailPage() {
  const { id } = useParams(); // Get product ID from URL
  
  // You can use this id to fetch specific product data
  console.log('Product ID from URL:', id);

  return (
    <div className="min-h-screen bg-teal-50">
      <MainNavbar />
      <SubNav />
      <Header />
      <Breadcrumb />
      <ProductImage />
      <ProductInfo />
      <DesktopProductInfo />
      <SupplierInfo />
      <SimilarProducts products={recommendedProducts} />
      <Discount />
      <Footer />
    </div>
  );
}