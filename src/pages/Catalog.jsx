import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Catalog = () => {
  return (
    <div>
      <h2>Our Catalog</h2>
      <ItemListContainer greeting="Check out our products!" />
    </div>
  );
};

export default Catalog;
