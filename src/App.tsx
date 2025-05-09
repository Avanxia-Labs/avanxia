// src/App.tsx
import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeSwitcher from "./components/ThemeSwitcher"; 

// ── Componentes generales ───────────────────────────────
import Header           from "./components/Header";
import Hero             from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Services         from "./components/Services";
import Pricing          from "./components/Pricing";
import Portfolio        from "./components/Portfolio";
import Team             from "./components/Team";
import Process          from "./components/Process";
import SpecialOffer     from "./components/SpecialOffer";
import Contact          from "./components/Contact";

// ── Página individual ───────────────────────────────────
import Evemundo         from "./components/pages/Evemundo";
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

// ── Layouts ─────────────────────────────────────────────
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function PlainLayout() {
  const navigate = useNavigate();

  return (
    <>
      {/* usa los mismos tokens que tu Header principal */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#0f172a] text-card-foreground border-b border-border z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
          >
            <ArrowLeft size={16} />
            Volver
          </button>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Empuje para contenido */}
        <Outlet />
    </>
  );
}

// ── Página Home ─────────────────────────────────────────
function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <SpecialOffer />
      <Portfolio />
      <Services />
      <Pricing />
      <Team />
      <Process />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

// ── App (sin BrowserRouter porque está en main.tsx) ─────
export default function App() {
  return (
    <Routes>
      {/* Rutas CON navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Rutas SIN navbar */}
      <Route element={<PlainLayout />}>
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
      </Route>
    </Routes>
  );
}

