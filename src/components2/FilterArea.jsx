import React from 'react';
import { SlidersHorizontal, X, Filter, Grid2x2, Menu } from 'lucide-react';

function FilterArea({ sortBy, onSortChange, activeFilters, onFilterRemove, }) {
  const handleSortClick = () => {
    if (sortBy === 'Newest') onSortChange('Price Low');
    else if (sortBy === 'Price Low') onSortChange('Price High');
    else onSortChange('Newest');
  };

  return (
    <div className="bg-white">
      {/* Filter Bar */}
      <div className="border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleSortClick}
            className="flex items-center space-x-2 border p-1 px-2 rounded-lg text-sm text-gray-700 hover:text-gray-900"
          >
            <span className="font-medium">Sort: {sortBy}</span>
            <SlidersHorizontal size={16} className="text-gray-500" />
          </button>
          
          <button className="flex items-center px-4 space-x-2 border p-1 rounded-lg text-sm text-gray-700 hover:text-gray-900">
            <span className="font-medium">Filter ({activeFilters.length})</span>
            <Filter size={16} className="text-gray-500" />
          </button>
        </div>

        <div className="flex items-center border border-gray-100 rounded-lg">
          <button className="p-1.5 rounded-l-lg hover:bg-gray-50">
            <Grid2x2 size={20} className="text-gray-400" />
          </button>
          <button className="p-1.5 rounded-r-lg hover:bg-gray-50">
            <Menu size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Active Filters Chips */}
      {activeFilters.length > 0 && (
        <div className="px-4 py-3 flex flex-wrap gap-2 border-b">
          {activeFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterRemove(filter.id)}
              className="flex items-center space-x-2 bg-white text-gray-500 border border-blue-200 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
            >
              <span>{filter.label}</span>
              <X size={14} className="text-blue-600" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterArea;