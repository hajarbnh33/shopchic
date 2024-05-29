import React, { useState, useEffect } from 'react';
import productsData from '../../data/data.json'; // Importer directement data.json
import Filter from "./Filter";
import CartIcon from './CartIcon';


function Product() {
  const [products, setProducts] = useState([]); //les articles importés depuis data.json

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSort = (order)=>{ //croissant ou décroissant 
    const sortedArticles = [...products].sort((a,b)=>{ // copie l'array des produits // sort permet de trier
      return order === 'asc' ? a.price - b.price : b.price - a.price // order === 'asc' :utilisateur a choisi un tri ascendant // 
    });
    setProducts(sortedArticles)
  }

  return (
    <div>
      <Filter onSort={handleSort} />
      <section className="container_product">
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} id='articles' />
            <div className='container_info'>{
            product.name} - ${product.price}
            <CartIcon/>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Product;