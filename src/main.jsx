import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ✅ importación por defecto
import './index.css';
import './componentes/Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);