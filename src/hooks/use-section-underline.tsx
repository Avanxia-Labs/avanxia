import { useEffect, useRef } from "react";

// Hook para activar el underline en mobile cuando el título está en viewport
export function useSectionUnderlineOnView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Solo activar en mobile
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  return ref;
}
