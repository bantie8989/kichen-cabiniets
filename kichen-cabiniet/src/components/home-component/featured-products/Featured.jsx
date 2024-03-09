import './featured.css'

import React from 'react';

const Featured = () => {
  const products = [
    {
      id: 1,
      image: 'https://example.com/product1.jpg',
      name: 'Modern Cabinet',
      price: '$1200',
    },
    {
      id: 2,
      image: 'https://example.com/product2.jpg',
      name: 'Traditional Cabinet',
      price: '$1500',
    },
    {
      id: 3,
      image: 'https://example.com/product3.jpg',
      name: 'Rustic Cabinet',
      price: '$1800',
    },
    {
      id: 4,
      image: 'https://example.com/product4.jpg',
      name: 'Contemporary Cabinet',
      price: '$2000',
    },
  ];

  return (
    <section className="featured-products">
      <h2>Newest Cabinet Styles</h2>
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="cta-button">Learn More</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featured;