import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./componentes/NavBar";
import { Footer } from "./componentes/Footer";
import { Inicio } from "./componentes/Inicio";
import { Muestras } from "./componentes/Muestras";
import { Carrito } from "./componentes/Carrito";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito((prev) => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavBar totalItems={carrito.length} />
        <main className="main-content">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/muestras" element={<Muestras agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito items={carrito} />} />
            <Route path="/catalogo" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;