import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import products from "../data/products";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  return <ProductDetail product={product} />;
};

export default ItemDetailContainer;
