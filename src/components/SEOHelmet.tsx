import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que actualiza dinámicamente el título de la página basado en la ruta actual.
 * Este enfoque es más ligero que react-helmet y funciona bien para Vite/React.
 */
const SEOHelmet = () => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    
    // Actualizar el título según la ruta
    // Páginas principales
    if (path === '/') {
      document.title = 'Marketing Digital, Diseño y Creación de Páginas Web | Avanxia Labs';
    } else if (path === '/about') {
      document.title = 'Conoce a Avanxia Labs | Expertos en Estrategia Digital';
    } else if (path === '/contact') {
      document.title = 'Contacto Avanxia Labs | Hablemos de tu Proyecto Digital';
    }
    // Páginas de categoría de servicio
    else if (path === '/servicios/identidad-de-marca') {
      document.title = 'Diseño de Logotipos e Identidad de Marca | Avanxia Labs';
    } else if (path === '/servicios/desarrollo-web') {
      document.title = 'Creación de Páginas Web con Next.js | Avanxia Labs';
    } else if (path === '/servicios/desarrollo-aplicaciones') {
      document.title = 'Desarrollo de Apps Web y Móviles a Medida | Avanxia Labs';
    } else if (path === '/servicios/gestion-redes-sociales') {
      document.title = 'Manejo de Redes Sociales para Empresas | Avanxia Labs';
    } else if (path === '/servicios/produccion-audiovisual') {
      document.title = 'Producción de Videos y Fotografía Profesional | Avanxia Labs';
    } else if (path === '/servicios/e-commerce') {
      document.title = 'Creación de Tiendas Online (E-commerce) | Avanxia Labs';
    } else if (path === '/servicios/seo-marketing-contenidos') {
      document.title = 'Posicionamiento Web (SEO) y Marketing de Contenidos | Avanxia Labs';
    } else if (path === '/servicios/publicidad-pagada-ppc') {
      document.title = 'Publicidad en Google y Redes Sociales (PPC) | Avanxia Labs';
    } else if (path === '/cotizaciones/gyb-connect') {
      document.title = 'Propuesta de Desarrollo Web para GYB Connect | Avanxia Labs';
    } else if (path === '/presentacion/lasershop') {
      document.title = 'LaserShop - Motor de Generación B2B | Presentación Estratégica Avanxia';
    } else if (path === '/revolucion-ai') {
      document.title = 'Revolucione su Negocio con IA - Oferta Especial | Avanxia Labs';
    } else if (path === '/gracias-revolucion-ai') {
      document.title = 'Gracias por su Interés | Avanxia Labs';
    }
  }, [location]);

  // Este componente no renderiza nada visual
  return null;
};

export default SEOHelmet;
