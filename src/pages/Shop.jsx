import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

const Shop = ({ products, addToCart }) => {
  return <ItemListContainer products={products} addToCart={addToCart} />;
};

export default Shop;
