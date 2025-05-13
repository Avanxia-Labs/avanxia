import { useEffect, useState } from 'react';

// Definimos las celebraciones y días especiales internacionales
interface Celebration {
  month: number;
  day: number;
  name: string;
  message: string;
}

const celebrations: Celebration[] = [
  {
    month: 1,
    day: 1,
    name: "Año Nuevo",
    message: "¡Feliz año nuevo! Que este año traiga innovación y creatividad a todos tus proyectos."
  },
  {
    month: 2,
    day: 14,
    name: "San Valentín",
    message: "En este día del amor, recuerda que el mejor diseño siempre se crea con pasión."
  },
  {
    month: 3,
    day: 8,
    name: "Día Internacional de la Mujer",
    message: "Celebramos la fuerza de las mujeres en tecnología y diseño que inspiran nuestra creatividad."
  },
  {
    month: 3,
    day: 14,
    name: "Día de Pi",
    message: "¡Feliz día 3.14159...! Para los que apreciamos tanto los números como el diseño."
  },
  {
    month: 4,
    day: 22,
    name: "Día de la Tierra",
    message: "Comprometidos con un diseño sostenible para un futuro mejor."
  },
  {
    month: 5,
    day: 1,
    name: "Día del Trabajo",
    message: "Celebramos el trabajo apasionado y la creatividad que transforma ideas en realidad."
  },
  {
    month: 5,
    day: 10,
    name: "Día de las Madres",
    message: "Por todas las madres que nos inspiraron a ser creativos, ¡felicidades!"
  },
  {
    month: 6,
    day: 20,
    name: "Día del Padre",
    message: "Por todos los padres que nos enseñaron a construir y crear, ¡felicidades!"
  },
  {
    month: 9,
    day: 27,
    name: "Día Mundial del Turismo",
    message: "Nuestros diseños viajan por el mundo, como tú, explorando nuevas posibilidades."
  },
  {
    month: 10,
    day: 31,
    name: "Halloween",
    message: "No hay nada más aterrador que un mal diseño. ¡Feliz Halloween!"
  },
  {
    month: 11,
    day: 30,
    name: "Cyber Monday",
    message: "En el día de las compras digitales, recordamos la importancia de la experiencia de usuario."
  },
  {
    month: 12,
    day: 25,
    name: "Navidad",
    message: "¡Felices fiestas! Que la creatividad ilumine tus proyectos en el nuevo año."
  }
];

// Comprobar si hoy es un día especial
const getTodayCelebration = (): Celebration | null => {
  const today = new Date();
  const month = today.getMonth() + 1; // JavaScript months are 0-indexed
  const day = today.getDate();
  
  return celebrations.find(
    celebration => celebration.month === month && celebration.day === day
  ) || null;
};

// Obtener el saludo según la hora
const getTimeGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Buenos días";
  } else if (hour >= 12 && hour < 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
};

// Personalización adicional según el número de visitas
const getVisitMessage = (visits: number): string => {
  if (visits === 1) {
    return "Nos alegra tenerte aquí por primera vez.";
  } else if (visits === 2) {
    return "¡Qué gusto verte de nuevo!";
  } else if (visits >= 3 && visits <= 5) {
    return "Gracias por seguir visitándonos. Tu interés nos inspira.";
  } else {
    return "Eres parte de nuestra comunidad de visitantes frecuentes. Gracias por tu fidelidad.";
  }
};

const PersonalizedGreeting = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  useEffect(() => {
    // Comprobar visitas anteriores
    const visitsCount = parseInt(localStorage.getItem('visitsCount') || '0');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();
    
    // Actualizar contador de visitas (solo si pasó al menos un día desde la última)
    const shouldIncrementVisit = !lastVisit || 
      (new Date(now).getTime() - new Date(lastVisit).getTime() > (24 * 60 * 60 * 1000));
    
    const newVisitCount = shouldIncrementVisit ? visitsCount + 1 : visitsCount;
    localStorage.setItem('visitsCount', newVisitCount.toString());
    localStorage.setItem('lastVisit', now);
    
    // Construir el saludo personalizado
    const timeGreeting = getTimeGreeting();
    const visitMessage = getVisitMessage(newVisitCount);
    const celebration = getTodayCelebration();
    
    let finalGreeting = "";
    
    if (celebration) {
      // Priorizar celebraciones especiales
      finalGreeting = `${celebration.message} (${celebration.name})`;
    } else {
      // Saludo regular con hora y frecuencia de visita
      finalGreeting = `${timeGreeting}. ${visitMessage}`;
    }
    
    setGreeting(finalGreeting);
    
    // Esconder el mensaje después de 8 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Si no hay mensaje o ya no es visible, no renderizar nada
  if (!greeting || !isVisible) return null;
  
  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-gradient-to-r from-primary/80 to-blue-500/80 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm animate-fade-in-up">
      <p className="text-sm font-medium">{greeting}</p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-white/80 hover:text-white"
        aria-label="Cerrar"
      >
        &times;
      </button>
    </div>
  );
};

export default PersonalizedGreeting;
