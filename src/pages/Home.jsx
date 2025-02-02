import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <div>
      <h1>Welcome to our E-commerce!</h1>
      <ItemListContainer greeting="Explore our catalog" />
    </div>
  );
};

export default Home;
