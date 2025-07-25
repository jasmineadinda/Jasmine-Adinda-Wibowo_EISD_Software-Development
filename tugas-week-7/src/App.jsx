import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const processedProducts = products
    .map(product => ({
      ...product,
      price: product.price * 0.2
    }))
    .filter(product => product.rating.rate > 4.0);

  return (
    <div className="app">
      <h1>FakeStore Products</h1>
      <ProductList products={processedProducts} />
    </div>
  );
}

export default App;
