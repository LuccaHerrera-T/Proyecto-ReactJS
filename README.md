Pasos hasta llegar a este resulado, tuve que buscar en internet y tutoriales de Youtube.

Planificación y Organización:

-Requisitos Iniciales:
Se definieron las funcionalidades principales: navegación entre páginas, carrito funcional, diseño visual personalizado.
-Estructura del Proyecto:
Se organizó en componentes reutilizables (`NavBar`, `CartWidget`, etc.), páginas independientes (`Home`, `Shop`, `Contact`), y un diseño modular para escalabilidad.
-Herramientas Utilizadas:
  - React para la lógica.
  - Vite para iniciar un entorno rápido y moderno.
  - React Router para la navegación.
  - Bootstrap para estilos y diseño responsive.

---

Configuración del Proyecto:

-Crear el Proyecto:
Se utilizó Vite con `npm create vite@latest`.
-Instalación de Dependencias:
  - `react-router-dom` para navegación.
  - `react-icons` para iconos interactivos (carrito).
  - `bootstrap` para diseño rápido y responsive.
-Organización:
  - Componentes reutilizables en una carpeta `/components`.
  - Páginas específicas en `/pages`.
  - Estilos en `/styles`.

---

Desarrollo de Componentes:
-NavBar
  - Contiene enlaces a las páginas principales (Hogar, Tienda, Contacto).
  - Incluye el widget del carrito que muestra el número de productos.
-CartWidget:
  - Representa el ícono del carrito con un contador dinámico (usa un estado global para calcular los productos añadidos).
-ItemListContainer y ProductCard:
  - Generan dinámicamente una lista de productos con sus datos (nombre, descripción, precio, imagen).
  - Cada tarjeta incluye un botón para agregar productos al carrito.
-Cart:
  - Muestra el contenido del carrito, con la lista de productos añadidos y sus precios.
  - Está conectado al estado global para reflejar los cambios en tiempo real.

---

Navegación con React Router:
-Configuración del Router:
  - Se creó un `<Router>` que encapsula las rutas principales: `/` (Hogar), `/shop` (Tienda), `/contact` (Contacto), y `/cart` (Carrito).
  - Se utilizaron `<Routes>` y `<Link>` para navegación sin recargar la página.
  
---

Implementación del Carrito Funcional:
-Manejo del Estado:
  - Se utilizó el hook `useState` para gestionar el estado del carrito en el componente `App`.
  - Cada producto añadido actualiza el estado global del carrito.
-Propagación de Funciones:
  - La función `addToCart` se pasa como prop a `ItemListContainer` y `ProductCard`, permitiendo que cualquier producto sea agregado al carrito.

---

Estilos y Diseño:
-Colores Personalizados:
  - Fondo negro (`background-color: #000`) para el cuerpo.
  - Tarjetas blancas (`background-color: #fff`) para destacar los productos.
  - Botones con colores pastel (azul/morado claro) para una estética moderna.
-Responsive Design:
  - Uso de clases de Bootstrap para diseño adaptable (`col`, `row`, etc.).
  - Menú hamburguesa integrado con `navbar-toggler`.

---

Pruebas y Optimización:
-Pruebas:
  - Se verificó la navegación entre páginas, el conteo de productos en el carrito, y la visualización de los productos añadidos.
-Optimización:
  - Código modular para facilitar cambios futuros.
  - Uso eficiente de props y estados.