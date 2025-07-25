import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
}

export default ProductCard;
