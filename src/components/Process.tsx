import React from 'react';

const Process = () => {
  const steps = [
    {
      title: 'Descubrimiento y Estrategia',
      details: [
        'Reunión Inicial: Entender objetivos, público, desafíos y visión.',
        'Análisis e Investigación: Mercado, competencia, tendencias.',
        'Propuesta Estratégica: Enfoque, servicios, entregables, cronograma, inversión.',
      ],
    },
    {
      title: 'Diseño y Conceptualización',
      details: [
        'Brief Creativo: Definir dirección estética y funcional.',
        'Wireframes y Prototipos: Definir estructura y UX.',
        'Diseño Visual (UI): Desarrollar interfaz visual atractiva y coherente.',
        'Revisión y Aprobación: Presentar diseños para feedback y ajustes.',
      ],
    },
    {
      title: 'Desarrollo e Implementación (Si aplica)',
      details: [
        '(Para proyectos web/app) Desarrollo Frontend y Backend: Construcción con tecnologías adecuadas (React, Next.js, etc.).',
        '(Para proyectos web/app) Integraciones: Conexión con herramientas necesarias (CRM, pagos, etc.).',
        '(Para proyectos web/app) Pruebas Rigurosas (QA): Asegurar funcionalidad, rendimiento y seguridad.',
      ],
    },
    {
      title: 'Entrega y Seguimiento',
      details: [
        'Entrega Final: Entregar archivos y accesos del proyecto.',
        'Capacitación (Si aplica): Para gestionar elementos entregados.',
        'Soporte Post-Entrega: Seguimiento inicial y resolución de dudas.',
      ],
    },
    {
      title: 'Seguimiento y Crecimiento (Para servicios continuos)',
      details: [
        'Monitorización: Supervisar rendimiento y seguridad.',
        'Análisis y Reportes: Informes periódicos con métricas clave.',
        'Optimización Continua: Ajustar estrategias basadas en datos.',
        'Soporte Continuo: Disponibilidad para dudas y soporte técnico.',
      ],
    },
  ];

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nuestro Proceso Colaborativo Hacia el Éxito</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Creemos en la transparencia y la colaboración. Nuestro proceso está diseñado para asegurar que comprendemos tus necesidades a fondo y trabajamos juntos en cada etapa para lograr los mejores resultados.
        </p>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="mb-10 relative">
              {/* Dot on the line */}
              <div className="absolute left-[-0.6rem] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{index + 1}. {step.title}</h3>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm space-y-1">
                {step.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">*El proceso puede variar ligeramente según el tipo de proyecto.</p>
        <div className="text-center mt-10">
          <a 
            href="#contact" // Link to contact section later
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            ¿Listo para comenzar tu proyecto? Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

