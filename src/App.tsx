// src/App.tsx
import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import SEOHelmet from "./components/SEOHelmet";
import PersonalizedGreeting from "./components/PersonalizedGreeting";

import HomePage from "@/components/pages/routes/HomePage";
import ServicesPage from "@/components/pages/routes/ServicesPage";
import AboutPage from "@/components/pages/routes/AboutPage";
import ContactPage from "@/components/pages/routes/ContactPage";
import Portfolio from "@/components/pages/routes/ViewPortfolio";
import SolutionsLandingPage from "./components/pages/routes/SolutionsLandingPage";
import ServiceCategoryPage from "./components/pages/routes/ServiceCategoryPage";
import CotizacionTicketValet from "./components/pages/routes/CotizacionTicketValet";
import CotizacionGybConnect from "./components/pages/routes/CotizacionGybConnect";

// ── Componentes generales ───────────────────────────────
import Header from "./components/Header";

// ── Página individual ───────────────────────────────────
import Evemundo from "./components/pages/Evemundo";
import Gyb from "./components/pages/Gyb";
import Drivers from "./components/pages/Drivers";
import Pool from "./components/pages/Pool";
import Heromatic from "./components/pages/Heromatic";
import Smart from "./components/pages/Smart";
import Autism from "./components/pages/Autism";
import CuatroCaminos from "./components/pages/CuatroCaminos";
import StarCH from "./components/pages/StarCH";
import Hai from "./components/pages/Hai";
import Redentor from "./components/pages/Redentor";
import Incometax from "./components/pages/incometax";
import Apolo from "./components/pages/Apolo";
import Digital from "./components/pages/Digital";
import Dew from "./components/pages/Dew";
import Milenio from "./components/pages/Milenio";
import Engadi from "./components/pages/Engadi";
import Seo from "./components/pages/Seo";
import Publicidad from "./components/pages/Publicidad";

// ── Layouts ─────────────────────────────────────────────
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// ── Layout SIN navbar ───────────────────────────────────
function PlainLayout() {

  return (
    <>
      {/* Header simplificado solo con botón “Volver” */}
 <Header />

      {/* Empuje para que el contenido no quede oculto tras el header */}
      <div className="pt-12">
        <Outlet />
      </div>
    </>
  );
}

// ── Componente para persistir la ruta y restaurarla tras recargar ──
function PersistRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  // Guardar la ruta actual en sessionStorage
  useEffect(() => {
    sessionStorage.setItem("lastPath", location.pathname);
  }, [location.pathname]);

  // Registrar el scroll en cada ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Restaurar la ruta tras recargar
  useEffect(() => {
    const lastPath = sessionStorage.getItem("lastPath");
    const currentPath = location.pathname;

    // Si estamos en la raíz pero había otra ruta guardada, restaurarla
    if (currentPath === "/" && lastPath && lastPath !== "/") {
      navigate(lastPath);
    }
  }, [location, navigate]);

  return null;
}

// ── App (sin BrowserRouter porque se inicializa en main.tsx) ─────
export default function App() {
  return (
    <>
      <PersistRoute />
      <SEOHelmet /> {/* Manejo de títulos SEO */}
      <PersonalizedGreeting />
      <Routes>
        {/* Rutas con Header completo */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/servicios" element={<SolutionsLandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/servicios/:categorySlug"
            element={<ServiceCategoryPage />}
          />
        </Route>

        {/* Rutas SIN navbar, solo botón "Volver" */}
        <Route element={<PlainLayout />}>
          {/* Cotizaciones */}
          <Route path="/cotizaciones/ticket-valet-parking" element={<CotizacionTicketValet />} />
          <Route path="/cotizacion-ticket-valet" element={<CotizacionTicketValet />} />
          <Route path="/cotizaciones/gyb-connect" element={<CotizacionGybConnect />} />
          
          <Route path="/proyectos/evemundo" element={<Evemundo />} />
          <Route path="/proyectos/gyb" element={<Gyb />} />
          <Route path="/proyectos/drivers" element={<Drivers />} />
          <Route path="/proyectos/pool" element={<Pool />} />
          <Route path="/proyectos/heromatic" element={<Heromatic />} />
          <Route path="/proyectos/smart" element={<Smart />} />
          <Route path="/proyectos/autism" element={<Autism />} />
          <Route path="/proyectos/cuatrocaminos" element={<CuatroCaminos />} />
          <Route path="/proyectos/star" element={<StarCH />} />
          <Route path="/proyectos/hai" element={<Hai />} />
          <Route path="/proyectos/incometax" element={<Incometax />} />
          <Route path="/proyectos/redentor" element={<Redentor />} />
          <Route path="/proyectos/apolo" element={<Apolo />} />
          <Route path="/proyectos/digital" element={<Digital />} />
          <Route path="/proyectos/dew" element={<Dew />} />
          <Route path="/proyectos/milenio" element={<Milenio />} />
          <Route path="/proyectos/engadi" element={<Engadi />} />
          <Route path="/proyectos/seo" element={<Seo />} />
          <Route path="/proyectos/publicidad" element={<Publicidad />} />
        </Route>
      </Routes>
    </>
  );
}
