// src/components/HorizontalCarousel.tsx
import React, { useRef, useState, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

const HorizontalCarousel: React.FC<Props> = ({ children }) => {
  const trackRef      = useRef<HTMLDivElement | null>(null);
  const totalSlides   = Children.count(children);
  const [index, setI] = useState(0);

  const go = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const newIndex = dir === "next"
      ? Math.min(index + 1, totalSlides - 1)
      : Math.max(index - 1, 0);

    track.scrollTo({
      left: newIndex * track.offsetWidth,
      behavior: "smooth",
    });
    setI(newIndex);
  };

  return (
    <div className="relative w-full">
      {/* Indicadores (puntos) */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-primary" : "bg-primary/30"
            }`}
          />
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={() => go("prev")}
        disabled={index === 0}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2
                   bg-background/60 backdrop-blur p-2 rounded-full shadow
                   disabled:opacity-40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="flex overflow-x-hidden snap-x snap-mandatory
                   scroll-smooth w-full"
      >
        {Children.map(children, (child) => (
          <div
            className="snap-center shrink-0 w-full flex justify-center px-4"
          >
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => go("next")}
        disabled={index === totalSlides - 1}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2
                   bg-background/60 backdrop-blur p-2 rounded-full shadow
                   disabled:opacity-40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default HorizontalCarousel;
