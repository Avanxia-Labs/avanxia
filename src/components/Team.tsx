import { useSectionUnderlineOnView } from "../hooks/use-section-underline";

const Team = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  const teamMembers = [
    {
      role: 'Desarrollador Senior',
      skills: 'Backend y Frontend (React, NestJS, AWS, PostgreSQL)',
      description: 'Aportando solidez técnica a nuestros proyectos más complejos.',
    },
    {
      role: 'Desarrollador Junior',
      skills: 'Frontend (React, Next.js, Tailwind)',
      description: 'Asegurando interfaces modernas y funcionales.',
    },
    {
      role: 'Diseñador Junior',
      skills: 'Creatividad Visual (Figma, Adobe CC)',
      description: 'Dando vida a las marcas y experiencias de usuario.',
    },
    {
      role: 'Socio Operativo (Ismael)',
      skills: 'Gestión de Proyectos, Estrategia, UX, Relaciones con Clientes',
      description: 'Lidera la ejecución y la visión estratégica de los proyectos.',
    },
    {
      role: 'Socio Inversionista (Luis Alberto)',
      skills: 'Dirección Financiera, Visión Estratégica, Networking',
      description: 'Supervisa la dirección financiera y aporta visión estratégica.',
    },
  ];

  const strengths = [
    'Colaboración Integrada: Combinamos habilidades para soluciones completas.',
    'Enfoque en Calidad: Apasionados por la tecnología y el diseño bien ejecutado.',
    'Adaptabilidad: Equipo ágil capaz de adaptarse a cada proyecto y cliente.',
  ];

  return (
    <section id="team" className="py-16 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Conoce el Equipo Detrás de Avanxia</span>
        </h2>
        <p className="text-center text-foreground/70 dark:text-foreground/70 mb-12 max-w-3xl mx-auto">
          Somos un equipo apasionado y multidisciplinario de estrategas, diseñadores y desarrolladores comprometidos con el éxito de nuestros clientes. Combina experiencia, creatividad y conocimiento técnico para soluciones digitales de alto impacto.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card border border-border rounded-lg shadow p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-card-foreground/10 flex items-center justify-center text-xs text-foreground/50">
                Foto
              </div>
              <h3 className="text-xl font-semibold mb-1 text-foreground">{member.role}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.skills}</p>
              <p className="text-foreground/70 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Nuestra Fortaleza</h3>
          <ul className="list-disc list-inside inline-block text-left text-foreground/70">
            {strengths.map((strength, index) => (
              <li key={index} className="mb-2">{strength}</li>
            ))}
          </ul>
        </div>
        <p className="text-center text-sm text-foreground/50 mt-6">*Se puede enriquecer con fotos y descripciones más detalladas.</p>
      </div>
    </section>
  );
};

export default Team;