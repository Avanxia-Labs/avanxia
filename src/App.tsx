// App.tsx
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes generales
import Header from './components/Header'
import Footer from './components/Footer' // si lo tienes
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Process from './components/Process'
import SpecialOffer from './components/SpecialOffer'
import Contact from './components/Contact'

// Página individual (Evemundo)
import Evemundo from './components/pages/Evemundo'

function HomePage() {
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
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/evemundo" element={<Evemundo />} />
        </Routes>

        {/* Si tienes un footer global */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
