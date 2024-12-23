import React from 'react';

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);
  };

  return (
    <div className="container mt-4 text-light">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> <br />
                  <span>Precio unitario: ${item.price}</span> <br />
                  <span>Cantidad: {item.quantity}</span> <br />
                  <span>Total: ${item.totalPrice.toFixed(2)}</span>
                </div>
                <div>
                  <button className="btn btn-success btn-sm me-2" onClick={() => addToCart(item)}>+</button>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total del Carrito: ${calculateTotalPrice()}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
