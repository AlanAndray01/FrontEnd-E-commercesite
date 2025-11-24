 
import React, { useState, useMemo } from 'react';
import { products, recommendedProducts } from './mockData';
import SearchBar from './SearchBar';
import FilterArea from './FilterArea';
import ProductList from './ProductList';
import RecommendedProducts from './RecommendedProducts';
import MainNavbar from './Navbar';
import SubNav from './Subnav';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

const MobileAccessoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('Newest');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const hasSearched = searchQuery.trim() !== '' || selectedCategory !== 'all' || activeFilters.length > 0;

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory.toLowerCase());
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    activeFilters.forEach(filter => {
      if (filter.type === 'brand') {
        filtered = filtered.filter(p => p.brand === filter.label);
      }
      if (filter.type === 'storage') {
        filtered = filtered.filter(p => p.storage === filter.label);
      }
    });

    if (sortBy === 'Price Low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price High') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchQuery, selectedCategory, activeFilters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavbar />
      <SubNav />
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FilterArea 
        sortBy={sortBy}
        onSortChange={setSortBy}
        activeFilters={activeFilters}
        onFilterRemove={(id) => setActiveFilters(activeFilters.filter(f => f.id !== id))}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <Breadcrumb />
      <ProductList 
        products={filteredProducts}
        hasSearched={hasSearched}
        viewMode={viewMode}
      />
      {/* Add this component */}
      <RecommendedProducts products={recommendedProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default MobileAccessoryPage;