import React from 'react';

const FilterSection = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="mb-6 flex justify-between items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`tab ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="text-xs text-text-muted font-medium">
        STEP 8: MEMOIZED FILTERING
      </div>
    </div>
  );
};

export default FilterSection;
