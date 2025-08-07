import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./componentes/NavBar";
import { Footer } from "./componentes/Footer";
import { Inicio } from "./componentes/Inicio";
import { Muestras } from "./componentes/Muestras";
import { Carrito } from "./componentes/Carrito";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import "./App.css";
import "./firebaseConfig";
import { CheckoutForm } from "./componentes/CheckoutForm";
import { CartProvider } from "./componentes/CartContext";

function App() {
  return (
    <CartProvider> {/* ✅ ENVOLVÉ TODO CON ESTE CONTEXTO */}
      <BrowserRouter>
        <div className="app-wrapper">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/muestras" element={<Muestras />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/catalogo" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="*" element={<Inicio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;