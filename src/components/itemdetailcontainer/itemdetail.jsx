import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    console.log(`Agregado ${cantidad} de ${producto.nombre} al carrito`);
    setAgregado(true);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      {agregado ? (
        <p>Producto agregado al carrito ✅</p>
      ) : (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
