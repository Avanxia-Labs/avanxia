import { useSectionUnderlineOnView } from "../hooks/use-section-underline";

const ValueProposition = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  const points = [
    {
      title: 'Calidad y Tecnología Superior',
      description: 'No dependemos de plantillas. Construimos soluciones web y aplicaciones robustas, rápidas y seguras utilizando código a medida (React, Next.js, NestJS) y las desplegamos en plataformas de alto rendimiento como Vercel y Railway. Esto se traduce en una mejor experiencia de usuario, mayor seguridad y escalabilidad para tu proyecto.',
    },
    {
      title: 'Diseño Excepcional y Personalizado',
      description: 'Creemos en el poder de un diseño único. Nuestro equipo crea identidades visuales y experiencias de usuario (UX/UI) atractivas y funcionales que captan la atención, reflejan la esencia de tu marca y te diferencian de la competencia.',
    },
    {
      title: 'Equipo Multidisciplinario In-House',
      description: 'Contamos con un equipo integrado de desarrolladores, diseñadores y especialistas en marketing que trabajan en conjunto para ofrecer soluciones 360°. Esta sinergia interna garantiza coherencia, eficiencia y resultados óptimos.',
    },
    {
      title: 'Enfoque Bilingüe y Alineación Horaria',
      description: 'Entendemos las necesidades del mercado norteamericano. Nuestros procesos son bilingües (Español/Inglés) y nuestros horarios de trabajo se alinean para facilitar la comunicación y colaboración con clientes en EE. UU. y Canadá.',
    },
    {
      title: 'Precios Competitivos',
      description: 'Ofrecemos la calidad y experiencia de una agencia internacional con la ventaja competitiva de las tarifas mexicanas, brindando un retorno de inversión excepcional.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span ref={underlineRef} className="section-title-underline">¿Por Qué Elegir Avanxia Labs?</span>
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-4xl mx-auto">
          En Avanxia Labs, combinamos la <strong className="font-semibold">excelencia técnica</strong> con la <strong className="font-semibold">creatividad estratégica</strong> para impulsar el crecimiento de tu negocio en el entorno digital. Somos más que una agencia; somos tu socio digital integral, operando desde México para ofrecer talento latino de primer nivel a precios competitivos para el mercado norteamericano (EE. UU. y Canadá).
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-700 mt-12 italic max-w-4xl mx-auto">
          "Todo lo que necesita un negocio para crecer online, desde branding hasta campañas publicitarias, ejecutado por un equipo full-stack de diseñadores, marketers y developers con estándares internacionales y tarifas mexicanas.”
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;

