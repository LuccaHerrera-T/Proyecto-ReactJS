import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import ItemList from "./itemlist";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Buscando productos en Firestore...");
        const querySnapshot = await getDocs(collection(db, "products"));

        if (querySnapshot.empty) {
          console.warn("No hay productos en la colección.");
        }

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Productos obtenidos:", fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
