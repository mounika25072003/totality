import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onAddToCart }) => (
  <div className="property-card">
    <img src={property.image} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.description}</p>
    <p>${property.price}</p>
    <button onClick={() => onAddToCart(property)}>Add to Cart</button>
  </div>
);

export default PropertyCard;





