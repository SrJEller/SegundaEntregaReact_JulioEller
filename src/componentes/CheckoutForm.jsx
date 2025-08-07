import { useState } from "react";
import { useCart } from "./CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function CheckoutForm() {
  const { carrito, vaciarCarrito } = useCart();
  const [form, setForm] = useState({ nombre: "", email: "", email2: "", telefono: "" });
  const [errores, setErrores] = useState({});

  const validar = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.email.includes("@")) newErrors.email = "Email inválido";
    if (form.email !== form.email2) newErrors.email2 = "Los correos no coinciden";
    if (!/^\d{8,}$/.test(form.telefono)) newErrors.telefono = "Teléfono inválido (mínimo 8 dígitos)";
    setErrores(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;

    const orden = {
      cliente: { ...form },
      items: carrito,
      total: carrito.reduce((acc, item) => acc + item.total, 0),
      fecha: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      alert(`Orden generada correctamente. ID: ${docRef.id}`);
      vaciarCarrito();
      setForm({ nombre: "", email: "", email2: "", telefono: "" });
    } catch (error) {
      console.error("Error generando la orden:", error);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      <input
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errores.email && <p className="error">{errores.email}</p>}

      <input
        type="email"
        placeholder="Repetir correo"
        value={form.email2}
        onChange={(e) => setForm({ ...form, email2: e.target.value })}
      />
      {errores.email2 && <p className="error">{errores.email2}</p>}

      <input
        type="tel"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
      />
      {errores.telefono && <p className="error">{errores.telefono}</p>}

      <button type="submit">Confirmar compra</button>
    </form>
  );
}