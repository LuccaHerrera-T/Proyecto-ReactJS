import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'PlayStation®5 Digital Edition (slim)', description: 'Disponibilidad: En stock Marca: Playstation Peso con empaque: 4.212 kg Producto con devolución Producto de: Amazon', price: 509.220, image: '/src/images/play 5.jpg' },
    { id: 2, name: 'Meta Quest 3 512GB — The Most Powerful Quest — Ultimate Mixed Reality Experiences — Get Batman: Arkham Shadow and a 3-Month Trial of Meta Quest+ Included', description: 'Disponibilidad: En stock Marca: Meta Peso con empaque: 1.577 kg Producto con devolución Producto de: Amazon', price: 654.830, image: '/src/images/meta.jpg' },
    { id: 3, name: 'STANLEY Classic Vacuum Insulated Wide Mouth Bottle – BPA-Free 18/8 Stainless Steel Thermos, Keeps Beverages Hot or Cold for 24 Hours', description: 'Capacidad: 1.1 Quarts Número de artículos: Up to 1 Color: Green Material: Stainless Steel', price: 41.820, image: '/src/images/termo.jpg' },
    { id: 4, name: 'HP Victus 15.6 i5 Gaming Laptop, 15.6" FHD 1920*1080 144Hz, Intel Core i5-12450H, NVIDIA GeForce RTX 3050, 32GB RAM, 1TB SSD, Backlit KB, Touchpad, SD Card Reader, Webcam, HDMI, Wi-Fi 6, W11 H, Blue', description: 'Disponibilidad: En stock Marca: Hp Peso con empaque: 2.470 kg Producto con devolución Producto de: Amazon', price: 810.250, image: '/src/images/hp.jpg' },
    // Agrega más productos
    //   { id: numero, name: 'nombre del prducto', description: 'Descripción', price: $, image: '/src/images/ nombrre de la imagen' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, totalPrice: product.price }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <Router>
      <NavBar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
