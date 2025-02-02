import React, { useState } from "react";
import ItemCount from "../components/ItemCount";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (count) => {
    setQuantity(count);
    console.log(`Added ${count} items to the cart!`);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ProductDetail;
