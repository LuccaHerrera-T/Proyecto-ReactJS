import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });

    fetchProducts.then((data) => {
      if (categoryId) {
        setFilteredProducts(data.filter((product) => product.category === categoryId));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="row">
      {filteredProducts.map((product) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
