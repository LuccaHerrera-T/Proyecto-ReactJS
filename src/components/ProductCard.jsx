import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card bg-light">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">$ {product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
