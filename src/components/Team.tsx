// src/components/Team.tsx
import React from 'react'
import { useSectionUnderlineOnView } from '../hooks/use-section-underline'
import { User } from 'lucide-react'
// No necesitamos useNavigate si están en la misma página

interface TeamMember {
  role: string
  skills: string
  description: string
  imageSrc?: string
  objectPosition?: string
}

const teamMembers: TeamMember[] = [
  {
    role: 'Desarrollador',
    skills: 'Backend y Frontend (React, NestJS, AWS, PostgreSQL)',
    description: 'Aportando solidez técnica a nuestros proyectos más complejos.',
    imageSrc: '/images/portfolio/desenior.png',
  },
  {
    role: 'Desarrollador',
    skills: 'Frontend (React, Next.js, Tailwind)',
    description: 'Asegurando interfaces modernas y funcionales.',
    imageSrc: '/images/portfolio/desjunior.jpg',
  },
  {
    role: 'Diseñador',
    skills: 'Creatividad Visual (Figma, Adobe CC)',
    description: 'Dando vida a las marcas y experiencias de usuario.',
    imageSrc: '/images/portfolio/disjunior.jpg',
  },
  {
    role: 'Socio Operativo (Ismael)',
    skills: 'Gestión de Proyectos, Estrategia, UX, Relaciones con Clientes',
    description: 'Lidera la ejecución y la visión estratégica de los proyectos.',
    imageSrc: '/images/portfolio/socioop.jpg',
    objectPosition: 'center 0%',
  },
  {
    role: 'Socio Inversionista (Luis Alberto)',
    skills: 'Dirección Financiera, Visión Estratégica, Networking',
    description: 'Supervisa la dirección financiera y aporta visión estratégica.',
    imageSrc: '/images/portfolio/tauro.jpg',
  },
]

const strengths = [
  'Colaboración Integrada: Combinamos habilidades para soluciones completas.',
  'Enfoque en Calidad: Apasionados por la tecnología y el diseño bien ejecutado.',
  'Adaptabilidad: Equipo ágil capaz de adaptarse a cada proyecto y cliente.',
]

const Team: React.FC = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>()

  return (
    <section id="team" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6">
          <span ref={underlineRef} className="section-title-underline">
            Conoce el Equipo Detrás de Avanxia
          </span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
          Somos un equipo apasionado y multidisciplinario de estrategas, diseñadores y desarrolladores comprometidos con el éxito de nuestros clientes.
        </p>

        {/* GRID responsivo: una columna en móvil, dos/ tres en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl shadow-xl text-center
                         hover:shadow-[0_0_20px_rgba(46,104,255,0.4)]
                         hover:ring-2 hover:ring-primary
                         transform hover:scale-105 transition-all duration-500"
            >
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-card-foreground/10 flex items-center justify-center text-foreground/40">
                {member.imageSrc ? (
                  <img
                    src={member.imageSrc}
                    alt={member.role}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition || 'center' }}
                  />
                ) : (
                  <User size={48} />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.role}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {member.skills}
              </p>
              <p className="text-foreground/70 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Nuestra Fortaleza */}
        <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
              <span className="section-title-underline">
              Nuestra Fortaleza
              </span>
            </h2>
          <ul className="list-disc list-inside inline-block text-left text-foreground/70">
            {strengths.map((s, i) => (
              <li key={i} className="mb-2">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-sm text-foreground/60 italic">
          ¿Quieres formar parte del equipo?{' '}
          {/* ✅ CAMBIO APLICADO AQUÍ */}
          <a
            href="#join-us" // <-- Cambiado a #join-us
            className="text-primary underline hover:text-primary/80"
            onClick={e => {
              e.preventDefault();
              // Buscamos el ID correcto: 'join-us'
              const target = document.getElementById('join-us'); 
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  )
}

export default Team