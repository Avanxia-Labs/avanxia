import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// 1. Eliminar preferencia previa de modo claro
localStorage.removeItem("theme");

// 2. Forzar modo oscuro antes de que React monte
document.documentElement.classList.remove('light');
document.documentElement.classList.add('dark');

// 3. Montar la app normalmente
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
