import { useState } from "react";
import { AnalitosForm } from "./AnalitosForm";
import { Carrito } from "./Carrito";

const MATRICES = ["Agua", "Aire", "Suelo"];
const PRECIO_ANALITO = 200;

export function Muestras({ agregarAlCarrito, carrito }) {
  const [muestraSeleccionada, setMuestraSeleccionada] = useState("");
  const [cantidades, setCantidades] = useState({ Agua: 0, Aire: 0, Suelo: 0 });
  const [analitosPorMatriz, setAnalitosPorMatriz] = useState({
    Agua: [],
    Aire: [],
    Suelo: [],
  });

  const handleCantidadChange = (matriz, cantidad) => {
    const cantidadNumerica = parseInt(cantidad);
    setCantidades((prev) => ({
      ...prev,
      [matriz]: isNaN(cantidadNumerica) ? 0 : cantidadNumerica,
    }));
  };

  const handleSeleccionAnalitos = (matriz, analitosSeleccionados) => {
    setAnalitosPorMatriz((prev) => ({
      ...prev,
      [matriz]: analitosSeleccionados,
    }));
  };

  const handleAgregarAlCarrito = () => {
    const cantidad = cantidades[muestraSeleccionada];
    const analitos = analitosPorMatriz[muestraSeleccionada];
    if (cantidad > 0 && analitos.length > 0) {
      const total = cantidad * analitos.length * PRECIO_ANALITO;
      agregarAlCarrito({
        matriz: muestraSeleccionada,
        cantidad,
        analitos,
        total,
      });
    } else {
      alert("Debe seleccionar al menos una muestra y un analito");
    }
  };

  const calcularPrecioTotal = () => {
    let total = 0;
    for (let matriz of MATRICES) {
      total += analitosPorMatriz[matriz].length * cantidades[matriz] * PRECIO_ANALITO;
    }
    return total;
  };

  return (
    <section className="contenedor-presupuesto">
      <h2 className="titulo-simulador">Simulador de Muestras</h2>

      <div>
        <label>Selecciona una matriz: </label>
        <select
          value={muestraSeleccionada}
          onChange={(e) => setMuestraSeleccionada(e.target.value)}
        >
          <option value="">-- Elegí --</option>
          {MATRICES.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {muestraSeleccionada && (
        <>
          <div>
            <label>Cantidad de muestras para {muestraSeleccionada}:</label>
            <input
              type="number"
              min="0"
              value={cantidades[muestraSeleccionada] || 0}
              onChange={(e) =>
                handleCantidadChange(muestraSeleccionada, e.target.value)
              }
            />
          </div>

          <AnalitosForm
            matriz={muestraSeleccionada.toLowerCase()}
            onAnalitosChange={(analitos) =>
              handleSeleccionAnalitos(muestraSeleccionada, analitos)
            }
          />

          <button onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </button>
        </>
      )}

      <div className="totalizador">
        <h3>Resumen</h3>
        <ul>
          {MATRICES.map((matriz) =>
            cantidades[matriz] > 0 ? (
              <li key={matriz}>
                {matriz}: {cantidades[matriz]} muestras, {analitosPorMatriz[matriz].length} analitos
              </li>
            ) : null
          )}
        </ul>
        <p><strong>Total estimado:</strong> ${calcularPrecioTotal()}</p>
      </div>

    </section>
  );
}