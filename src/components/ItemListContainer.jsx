<<<<<<< HEAD
import React from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = ({ products, addToCart }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
=======
import React from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = ({ products, addToCart }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
>>>>>>> f091336 (prueba 02)
