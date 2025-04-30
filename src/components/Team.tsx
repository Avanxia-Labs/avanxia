import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      role: 'Desarrollador Senior',
      skills: 'Backend y Frontend (React, NestJS, AWS, PostgreSQL)',
      description: 'Aportando solidez técnica a nuestros proyectos más complejos.',
      // image: 'path/to/senior-dev.jpg' // Placeholder
    },
    {
      role: 'Desarrollador Junior',
      skills: 'Frontend (React, Next.js, Tailwind)',
      description: 'Asegurando interfaces modernas y funcionales.',
      // image: 'path/to/junior-dev.jpg' // Placeholder
    },
    {
      role: 'Diseñador Junior',
      skills: 'Creatividad Visual (Figma, Adobe CC)',
      description: 'Dando vida a las marcas y experiencias de usuario.',
      // image: 'path/to/designer.jpg' // Placeholder
    },
    {
      role: 'Socio Operativo (Ismael)',
      skills: 'Gestión de Proyectos, Estrategia, UX, Relaciones con Clientes',
      description: 'Lidera la ejecución y la visión estratégica de los proyectos.',
      // image: 'path/to/ismael.jpg' // Placeholder
    },
    {
      role: 'Socio Inversionista (Luis Alberto)',
      skills: 'Dirección Financiera, Visión Estratégica, Networking',
      description: 'Supervisa la dirección financiera y aporta visión estratégica.',
      // image: 'path/to/luis.jpg' // Placeholder
    },
  ];

  const strengths = [
    'Colaboración Integrada: Combinamos habilidades para soluciones completas.',
    'Enfoque en Calidad: Apasionados por la tecnología y el diseño bien ejecutado.',
    'Adaptabilidad: Equipo ágil capaz de adaptarse a cada proyecto y cliente.',
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Conoce al Equipo Detrás de Avanxia Labs</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Somos un equipo apasionado y multidisciplinario de estrategas, diseñadores y desarrolladores comprometidos con el éxito de nuestros clientes. Combinamos experiencia, creatividad y conocimiento técnico para ofrecer soluciones digitales de alto impacto.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              {/* Placeholder for image */}
              {/* <img src={member.image} alt={member.role} className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-300"/> */}
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-300 flex items-center justify-center text-xs text-gray-500">Foto</div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.role}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{member.skills}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Nuestra Fortaleza</h3>
          <ul className="list-disc list-inside inline-block text-left text-gray-700">
            {strengths.map((strength, index) => (
              <li key={index} className="mb-2">{strength}</li>
            ))}
          </ul>
        </div>
         <p className="text-center text-sm text-gray-500 mt-6">*Se puede enriquecer con fotos y descripciones más detalladas.</p>
      </div>
    </section>
  );
};

export default Team;

