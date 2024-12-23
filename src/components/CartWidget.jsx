import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartCount }) => {
  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <FaShoppingCart size={20} />
      {cartCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
