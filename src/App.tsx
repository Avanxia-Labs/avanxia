import './App.css';

// Importar los componentes creados
import Header from './components/Header'; // Import the new Header component
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio'; // Asegúrate que la extensión sea .tsx si es necesario
import Team from './components/Team';
import Process from './components/Process';
import SpecialOffer from './components/SpecialOffer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header /> {/* Add the Header component here */}
      <Hero />
      <ValueProposition />
      <Portfolio />
      <Services />
      <Pricing />
      <Team />
      <Process />
      <SpecialOffer />
      <Contact />
      {/* Puedes añadir un Footer aquí si lo creas */}
    </div>
  );
}

export default App;

