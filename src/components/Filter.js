import React from 'react';

const Filter = ({ filters, onFilterChange }) => (
  <div className="filter">
    <label>
      Location:
      <input
        type="text"
        value={filters.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      />
    </label>
    <label>
      Price:
      <input
        type="number"
        value={filters.price}
        onChange={(e) => onFilterChange('price', e.target.value)}
      />
    </label>
    <label>
      Bedrooms:
      <input
        type="number"
        value={filters.bedrooms}
        onChange={(e) => onFilterChange('bedrooms', e.target.value)}
      />
    </label>
  </div>
);

export default Filter;

