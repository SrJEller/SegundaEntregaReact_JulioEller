import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBFaVBh1nvN7TWLDt1yuNzfHWuH52IXKdQ",
  authDomain: "lab-de-muestras-amb.firebaseapp.com",
  projectId: "lab-de-muestras-amb",
  storageBucket: "lab-de-muestras-amb.firebasestorage.app",
  messagingSenderId: "747422317909",
  appId: "1:747422317909:web:8fba65ea5da300a02c03dc"
};

const app = initializeApp(firebaseConfig);

// ✅ Exportar la instancia de Firestore
export const db = getFirestore(app);