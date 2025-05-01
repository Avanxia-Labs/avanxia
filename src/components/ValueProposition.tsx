import {
  FaCogs,
  FaPalette,
  FaUsers,
  FaGlobeAmericas,
  FaDollarSign,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import { useState } from "react";

/* --------- ICON WRAPPER -------------------------------------------------*/
const IconWrapper = ({ icon: Icon, className }: { icon: IconType; className?: string }) => {
  return (
    <div className={className}>
      <Icon />
    </div>
  );
};

/* --------- DATA ---------------------------------------------------------*/
type Point = {
  title: string;
  desc: string;
  icon: IconType;
};

const points: Point[] = [
  {
    title: "Calidad y Tecnología Superior",
    desc: "Soluciones robustas, rápidas y seguras desplegadas en Vercel o Railway.",
    icon: FaCogs,
  },
  {
    title: "Diseño Excepcional y Personalizado",
    desc: "Identidades visuales únicas y UX que te diferencian.",
    icon: FaPalette,
  },
  {
    title: "Equipo Multidisciplinario In-House",
    desc: "Desarrolladores, diseñadores y marketers integrados.",
    icon: FaUsers,
  },
  {
    title: "Enfoque Bilingüe y Alineación Horaria",
    desc: "Colaboración fluida con EE. UU. y Canadá (ES/EN).",
    icon: FaGlobeAmericas,
  },
  {
    title: "Precios Competitivos",
    desc: "Calidad internacional con tarifas mexicanas.",
    icon: FaDollarSign,
  },
];

/* --------- AUTOPLAY PLUGIN ---------------------------------------------*/
const autoplay =
  (interval = 4000): KeenSliderPlugin =>
  (slider: KeenSliderInstance) => {
    let timer: ReturnType<typeof setTimeout>;
    const clear = () => clearTimeout(timer);
    const next = () => {
      clear();
      timer = setTimeout(() => {
        const { rel, max } = slider.track.details;
        if (rel === max) {
          slider.moveToIdx(0, true);
        } else {
          slider.next();
        }
      }, interval);
    };
    slider.on("created", next);
    slider.on("dragStarted", clear);
    slider.on("animationEnded", next);
    slider.on("updated", next);
    slider.container.addEventListener("pointerenter", clear);
    slider.container.addEventListener("pointerleave", next);
    slider.container.addEventListener("touchstart", clear, { passive: true });
    slider.container.addEventListener("touchend", next);
  };

/* --------- CARD ---------------------------------------------------------*/
const Card = ({
  p,
  active,
}: {
  p: Point;
  active: boolean;
}) => {
  return (
    <div className="keen-slider__slide flex justify-center px-2 md:px-4">
      <div
        className={clsx(
          "relative w-full rounded-3xl p-10 overflow-visible transition-transform duration-300 ease-out",
          "border border-white/15 backdrop-blur-lg bg-white/5 text-gray-100",
          "hover:-translate-y-2",
          active && "ring-2 ring-cyan-400/60 shadow-xl",
          "before:absolute before:inset-px before:rounded-[inherit] before:pointer-events-none",
          "before:bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,.35),transparent_60%),radial-gradient(circle_at_0%_100%,rgba(236,72,153,.35),transparent_60%)]"
        )}
      >
        <IconWrapper icon={p.icon} className="text-5xl mb-6 text-cyan-300" />
        <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
        <p className="opacity-80 leading-relaxed">{p.desc}</p>
      </div>
    </div>
  );
};

/* --------- MAIN COMPONENT ----------------------------------------------*/
const ValueProposition = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: { perView: 1, spacing: 24 },
      breakpoints: {
        "(min-width: 768px)": { slides: { perView: 3, spacing: 32 } },
      },
      mode: "snap",
      rubberband: false,
      loop: false,
      slideChanged(s: KeenSliderInstance) {
        setCurrent(s.track.details.rel);
      },
    },
    [autoplay(4000)]
  );

  return (
    <section id="value-proposition" className="py-24 bg-gray-950 text-gray-100">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">
            ¿Por Qué Elegir Avanxia Labs?
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-4xl mx-auto text-lg md:text-2xl">
          En Avanxia Labs combinamos la <strong>excelencia técnica</strong> con la{" "}
          <strong>creatividad estratégica</strong> para impulsar tu negocio.
        </p>

        {/* Carrusel */}
        <div ref={sliderRef} className="keen-slider overflow-visible">
          {points.map((p, i) => (
            <Card key={i} p={p} active={current === i} />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {points.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la tarjeta ${i + 1}`}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={clsx(
                "w-3 h-3 rounded-full transition-all",
                current === i
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-400/60 hover:bg-cyan-300"
              )}
            />
          ))}
        </div>

        {/* Cita */}
        <p className="text-center text-gray-300 mt-16 italic max-w-4xl mx-auto">
          “Todo lo que necesita un negocio para crecer online, desde branding
          hasta campañas publicitarias, ejecutado por un equipo full-stack con
          estándares internacionales y tarifas mexicanas.”
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;