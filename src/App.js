import React, { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';
import Filter from './components/Filter';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import propertiesData from './assets/properties.json';
import './styles/App.css';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ location: '', price: '', bedrooms: '' });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleAddToCart = (property) => {
    setCart([...cart, property]);
  };

  const handleRemoveFromCart = (property) => {
    setCart(cart.filter(item => item.id !== property.id));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.price || property.price <= parseInt(filters.price)) &&
      (!filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="App">
      <h1>Property Booking App</h1>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      <CheckoutForm />
    </div>
  );
};

export default App;

