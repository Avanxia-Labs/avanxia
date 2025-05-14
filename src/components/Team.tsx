import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { User } from "lucide-react";

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
    <section id="team" className="py-20 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Conoce el Equipo Detrás de Avanxia</span>
        </h2>
        <p className="text-center text-foreground/70 dark:text-foreground/70 mb-12 max-w-3xl mx-auto">
          Somos un equipo apasionado y multidisciplinario de estrategas, diseñadores y desarrolladores comprometidos con el éxito de nuestros clientes. Combinamos experiencia, creatividad y conocimiento técnico para ofrecer soluciones digitales de alto impacto.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl blur-2xl z-0" />
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 z-10">          
              {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl shadow-xl text-center hover:shadow-[0_0_20px_rgba(46,104,255,0.4)] hover:ring-2 hover:ring-primary transform hover:scale-105 transition-all duration-500"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-card-foreground/10 flex items-center justify-center text-foreground/40">
                  <User size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.role}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.skills}</p>
                <p className="text-foreground/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Nuestra Fortaleza</h3>
          <ul className="list-disc list-inside inline-block text-left text-foreground/70">
            {strengths.map((strength, index) => (
              <li key={index} className="mb-2">{strength}</li>
            ))}
          </ul>
        </div>
        <p className="text-center text-sm text-foreground/60 mt-8 italic">
          ¿Quieres formar parte del equipo? <a href="#contact" className="text-primary underline hover:text-primary/80">Contáctanos</a>
        </p>
      </div>
    </section>
  );
};

export default Team;
