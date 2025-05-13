import { useState } from 'react';

// Importamos las mismas definiciones de celebraciones del componente original
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

// Funciones del componente original
const getTimeGreeting = (hour: number): string => {
  if (hour >= 5 && hour < 12) {
    return "Buenos días";
  } else if (hour >= 12 && hour < 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
};

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

const GreetingDemo = () => {
  const [hour, setHour] = useState<number>(new Date().getHours());
  const [visits, setVisits] = useState<number>(1);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());
  const [showType, setShowType] = useState<'time' | 'celebration'>('time');
  
  // Genera el mensaje según los parámetros actuales
  const generateMessage = (): string => {
    if (showType === 'celebration') {
      const celebration = celebrations.find(
        c => c.month === month && c.day === day
      );
      
      if (celebration) {
        return `${celebration.message} (${celebration.name})`;
      } else {
        return "No hay celebración para esta fecha. Selecciona otra fecha o cambia a saludo por hora.";
      }
    } else {
      const timeGreeting = getTimeGreeting(hour);
      const visitMessage = getVisitMessage(visits);
      return `${timeGreeting}. ${visitMessage}`;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-8 mt-16">
      <h2 className="text-2xl font-bold mb-6">Demostración de Saludos Personalizados</h2>
      
      <div className="mb-8 bg-background p-6 rounded-lg shadow-md">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowType('time')}
            className={`px-4 py-2 rounded ${showType === 'time' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Saludos por Hora y Visitas
          </button>
          
          <button
            onClick={() => setShowType('celebration')}
            className={`px-4 py-2 rounded ${showType === 'celebration' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Celebraciones Especiales
          </button>
        </div>
        
        {showType === 'time' ? (
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Hora del día:</label>
              <input
                type="range"
                min="0"
                max="23"
                value={hour}
                onChange={(e) => setHour(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-sm mt-1">{hour}:00 - {getTimeGreeting(hour)}</div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Número de visitas:</label>
              <input
                type="range"
                min="1"
                max="10"
                value={visits}
                onChange={(e) => setVisits(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-sm mt-1">{visits} {visits === 1 ? 'visita' : 'visitas'}</div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="mb-4 text-sm">Selecciona una fecha para ver el mensaje de celebración especial:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Mes:</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>
                      {new Date(2023, m - 1, 1).toLocaleString('default', { month: 'long' })}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Día:</label>
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                >
                  {Array.from(
                    { length: new Date(2023, month, 0).getDate() },
                    (_, i) => i + 1
                  ).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm mb-2">Fechas especiales disponibles:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                {celebrations.map((c) => (
                  <div 
                    key={`${c.month}-${c.day}`}
                    className="p-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setMonth(c.month);
                      setDay(c.day);
                    }}
                  >
                    {c.name} ({c.month}/{c.day})
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Vista previa:</h3>
        <div className="bg-gradient-to-r from-primary/80 to-blue-500/80 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-sm font-medium">{generateMessage()}</p>
        </div>
      </div>
    </div>
  );
};

export default GreetingDemo;
