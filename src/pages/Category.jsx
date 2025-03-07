import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  return <h2>Categoría: {categoryId}</h2>;
};

export default Category;
