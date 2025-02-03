// Importaciones en products.js
import laptopGaming from "../assets/laptop-gaming.jpeg";
import galaxyS21 from "../assets/galaxy-s21.jpeg";
import sonyHeadphones from "../assets/sony-headphones.jpeg";
import fitbitSmartwatch from "../assets/fitbit-smartwatch.jpeg";
import logitechMouse from "../assets/logitech-mouse.jpeg";
import goproHero10 from "../assets/gopro-hero10.jpeg";
import samsungMonitor from "../assets/samsung-monitor.jpeg";
import corsairKeyboard from "../assets/corsair-keyboard.jpeg";
import ipadPro from "../assets/ipad-pro.jpeg";
import canonEosR6 from "../assets/canon-eos-r6.jpeg";
import xboxController from "../assets/xbox-controller.jpeg";
import lgOledTv from "../assets/lg-oled-tv.jpeg";
import logoTempest from "../assets/logo-tempest.webp";

const products = [
  {
    id: 1,
    name: "Laptop Gaming ROG",
    description: "Laptop de alto rendimiento con procesador i7 y tarjeta gráfica RTX 3060.",
    price: 1500,
    image: laptopGaming,
    category: "Laptops",
    stock: 10,
  },
  {
    id: 2,
    name: "Smartphone Galaxy S21",
    description: "Teléfono inteligente con pantalla AMOLED y cámara de 108 MP.",
    price: 800,
    image: galaxyS21,
    category: "Phones",
    stock: 20,
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos Sony",
    description: "Auriculares con cancelación de ruido y hasta 30 horas de batería.",
    price: 250,
    image: sonyHeadphones,
    category: "Accessories",
    stock: 15,
  },
  {
    id: 4,
    name: "Smartwatch Fitbit",
    description: "Reloj inteligente con monitor de salud y GPS integrado.",
    price: 200,
    image: fitbitSmartwatch,
    category: "Wearables",
    stock: 25,
  },
  {
    id: 5,
    name: "Mouse Gamer Logitech",
    description: "Mouse ergonómico con 12 botones programables y RGB personalizable.",
    price: 80,
    image: logitechMouse,
    category: "Accessories",
    stock: 30,
  },
  {
    id: 6,
    name: "Cámara GoPro Hero 10",
    description: "Cámara de acción 5K con estabilización avanzada y resistente al agua.",
    price: 500,
    image: goproHero10,
    category: "Cameras",
    stock: 12,
  },
  {
    id: 7,
    name: "Monitor Curvo Samsung",
    description: "Monitor QHD de 34 pulgadas con tasa de refresco de 144 Hz.",
    price: 600,
    image: samsungMonitor,
    category: "Monitors",
    stock: 8,
  },
  {
    id: 8,
    name: "Teclado Mecánico Corsair",
    description: "Teclado RGB con switches Cherry MX y diseño compacto.",
    price: 130,
    image: corsairKeyboard,
    category: "Accessories",
    stock: 22,
  },
  {
    id: 9,
    name: "Tablet iPad Pro",
    description: "Tablet con chip M1, pantalla Liquid Retina y compatibilidad con Apple Pencil.",
    price: 1100,
    image: ipadPro,
    category: "Tablets",
    stock: 10,
  },
  {
    id: 10,
    name: "Cámara Canon EOS R6",
    description: "Cámara mirrorless profesional con sensor full-frame y 20 MP.",
    price: 2500,
    image: canonEosR6,
    category: "Cameras",
    stock: 5,
  },
  {
    id: 11,
    name: "Control Xbox Elite Series 2",
    description: "Control inalámbrico premium con personalización avanzada.",
    price: 180,
    image: xboxController,
    category: "Accessories",
    stock: 18,
  },
  {
    id: 12,
    name: "Smart TV LG OLED",
    description: "Televisor 4K OLED con inteligencia artificial y Dolby Vision.",
    price: 2000,
    image: lgOledTv,
    category: "TVs",
    stock: 6,
  },
];

export default products;  