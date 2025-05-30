import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Comprobar si estamos en un entorno de prerrenderización
const isPrerendering = typeof navigator !== 'undefined' && 
  (navigator.userAgent.includes('ReactSnap') || navigator.userAgent.includes('puppeteer'));

// Aplicar operaciones del lado del cliente solo si no estamos en prerrenderización
if (typeof window !== 'undefined' && !isPrerendering) {
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
}

// Obtener el elemento raíz
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("No se encontró el elemento root");

// Detectar si debemos hidratar o renderizar desde cero
if (rootElement.hasChildNodes()) {
  // Si hay contenido, hidratar (este es el caso cuando react-snap ha prerenderizado)
  hydrateRoot(rootElement, 
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  // Primer renderizado, sin contenido previo
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

// Exportar App para react-snap
export default App;
