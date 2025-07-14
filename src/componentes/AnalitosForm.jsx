import { useEffect, useState } from "react";

const analitosPorMatriz = {
  agua: ["pH", "Conductividad", "TDS", "OD", "Turbidez"],
  aire: ["PM2.5", "PM10", "CO2", "NO2", "SO2"],
  suelo: ["Nitratos", "Fosfatos", "Metales Pesados", "pH", "Materia Org."]
};

const precioPorAnalito = 1500;

export function AnalitosForm({ matriz, onAnalitosChange }) {
  const [seleccionados, setSeleccionados] = useState([]);

  useEffect(() => {
    setSeleccionados([]);
    if (onAnalitosChange) {
      onAnalitosChange([]); 
    }
  }, [matriz]);

  const toggleAnalito = (analito) => {
    let nuevos;
    if (seleccionados.includes(analito)) {
      nuevos = seleccionados.filter((a) => a !== analito);
    } else {
      nuevos = [...seleccionados, analito];
    }
    setSeleccionados(nuevos);
    if (onAnalitosChange) {
      onAnalitosChange(nuevos);
    }
  };

  const matrizKey = matriz?.toLowerCase();

  if (!matrizKey || !analitosPorMatriz[matrizKey]) return null;

  return (
    <div className="analitos-form">
      <h4>Selecciona los parámetros para {matriz}:</h4>
      <ul>
        {analitosPorMatriz[matrizKey].map((analito) => (
          <li key={analito}>
            <label>
              <input
                type="checkbox"
                checked={seleccionados.includes(analito)}
                onChange={() => toggleAnalito(analito)}
              />
              {analito} (+${precioPorAnalito})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
