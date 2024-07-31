import React from 'react';
import './Filter.css';

const Filter = ({ filters, onFilterChange }) => {
  const handleInputChange = (name, value) => {
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <h2>Filter Properties</h2>
      <div className="filter-group">
        <label>Location:</label>
        <input
          type="text"
          value={filters.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Price:</label>
        <input
          type="number"
          value={filters.price || ''}
          onChange={(e) => handleInputChange('price', e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label>Bedrooms:</label>
        <input
          type="number"
          value={filters.bedrooms || ''}
          onChange={(e) => handleInputChange('bedrooms', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;


