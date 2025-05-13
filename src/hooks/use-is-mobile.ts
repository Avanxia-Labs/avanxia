import { useState, useEffect } from 'react';

/**
 * Hook que detecta si la vista actual es móvil basado en el ancho de la ventana
 * @param mobileWidth Ancho máximo en píxeles para considerar vista móvil (por defecto 768px)
 * @returns boolean que indica si la vista actual es móvil
 */
export function useIsMobile(mobileWidth: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < mobileWidth : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidth);
    };

    // Configuración inicial
    handleResize();

    // Agregar event listener para cambios de tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar event listener al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileWidth]);

  return isMobile;
}

export default useIsMobile;
