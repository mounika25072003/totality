import React from 'react';
import './Filter.css';

const Filter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="filter">
      <h2>Filter Properties</h2>
      <div className="filter-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
        />
      </div>
      <div className="filter-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleChange}
        />
      </div>
      <div className="filter-group">
        <label>Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filter;


