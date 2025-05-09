import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // ⬅️  importa BrowserRouter
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>        {/* ⬅️  envuelve la app una sola vez */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
