import react from "react"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/electronics">Electrónica</Link>
      <Link to="/category/clothing">Ropa</Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
