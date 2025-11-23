import React from 'react';
import MobileProductList from './MobileProductList';
import DesktopProductList from './DesktopProductList';

const ProductList = ({ products = [], hasSearched = false, viewMode = 'list' }) => {
  return (
    <div>
      <MobileProductList 
        products={products} 
        hasSearched={hasSearched}
        viewMode={viewMode}
      />
      <DesktopProductList />
    </div>
  );
}

export default ProductList;