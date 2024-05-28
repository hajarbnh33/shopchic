import React, { useState, useEffect } from 'react';
import productsData from '../../data/data.json'; // Importer directement data.json

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Utilisation directe de l'importation des données
    setProducts(productsData);
  }, []);

  return (
    <div className="container_product">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>{product.name} - ${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;