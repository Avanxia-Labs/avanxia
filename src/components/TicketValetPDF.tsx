import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  logo: {
    width: 100,
    height: 30,
    objectFit: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E40AF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  text: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 4,
    marginLeft: 15,
  },
  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  planBox: {
    width: '48%',
    padding: 15,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
    textAlign: 'center',
  },
  planPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
    textAlign: 'center',
    marginBottom: 8,
  },
  planFeature: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#374151',
    marginBottom: 3,
  },
  contactInfo: {
    backgroundColor: '#F0F9FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 11,
    color: '#374151',
    marginBottom: 4,
  },
  moduleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moduleBox: {
    width: '48%',
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 6,
  },
  moduleTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 6,
  },
  moduleDescription: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 6,
  },
  techStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  techColumn: {
    width: '30%',
    padding: 10,
    backgroundColor: '#F8FAFC',
    borderRadius: 6,
  },
  techTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 6,
    textAlign: 'center',
  },
  techItem: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 2,
    textAlign: 'center',
  },
});

interface TicketValetPDFProps {
  // Props pueden ser añadidas aquí si necesitas datos dinámicos
}

const TicketValetPDF: React.FC<TicketValetPDFProps> = () => {
  return (
    <Document>
      {/* Página 1: Portada e Información del Proyecto */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Propuesta Técnica</Text>
        </View>

        <Text style={styles.title}>Sistema de Ticket Digital</Text>
        <Text style={styles.title}>para Valet Parking</Text>
        <Text style={styles.subtitle}>Solución completa para la gestión moderna de valet parking</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Proyecto</Text>
          <Text style={styles.text}>• Cliente: Empresa de Valet Parking</Text>
          <Text style={styles.text}>• Proyecto: Sistema de Ticket Digital</Text>
          <Text style={styles.text}>• Tecnología: Aplicación Web Progresiva (PWA)</Text>
          <Text style={styles.text}>• Modalidad: Desarrollo Full-Stack</Text>
          <Text style={styles.text}>• Entrega: Sistema completo listo para producción</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivo del Proyecto</Text>
          <Text style={styles.text}>
            Desarrollar un sistema digital completo que reemplace los tickets físicos tradicionales 
            por una solución moderna, eficiente y escalable. El sistema permitirá la gestión 
            integral del servicio de valet parking desde el registro del vehículo hasta la 
            entrega final al cliente.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Beneficios Principales</Text>
          <Text style={styles.bulletPoint}>• Eliminación de tickets físicos y reducción de costos operativos</Text>
          <Text style={styles.bulletPoint}>• Mejora significativa en la experiencia del cliente</Text>
          <Text style={styles.bulletPoint}>• Trazabilidad completa de vehículos y operaciones</Text>
          <Text style={styles.bulletPoint}>• Reportes y métricas en tiempo real</Text>
          <Text style={styles.bulletPoint}>• Escalabilidad para múltiples sucursales</Text>
          <Text style={styles.bulletPoint}>• Integración con sistemas de pago modernos</Text>
        </View>
      </Page>

      {/* Página 2: Funcionalidades Principales */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Funcionalidades</Text>
        </View>

        <Text style={styles.title}>Funcionalidades Principales</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Registro de Vehículos Digital</Text>
          <Text style={styles.bulletPoint}>• Captura de datos del vehículo y cliente</Text>
          <Text style={styles.bulletPoint}>• Fotografías automáticas del vehículo</Text>
          <Text style={styles.bulletPoint}>• Generación de código QR único</Text>
          <Text style={styles.bulletPoint}>• Validación de datos en tiempo real</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gestión de Tickets Digitales</Text>
          <Text style={styles.bulletPoint}>• Tickets digitales con códigos QR</Text>
          <Text style={styles.bulletPoint}>• Estados de vehículo en tiempo real</Text>
          <Text style={styles.bulletPoint}>• Historial completo de movimientos</Text>
          <Text style={styles.bulletPoint}>• Búsqueda avanzada de vehículos</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Panel de Control Operativo</Text>
          <Text style={styles.bulletPoint}>• Dashboard con métricas en tiempo real</Text>
          <Text style={styles.bulletPoint}>• Gestión de valets y turnos</Text>
          <Text style={styles.bulletPoint}>• Monitoreo de ocupación del estacionamiento</Text>
          <Text style={styles.bulletPoint}>• Alertas y notificaciones automáticas</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sistema de Comunicación</Text>
          <Text style={styles.bulletPoint}>• Notificaciones SMS automáticas</Text>
          <Text style={styles.bulletPoint}>• Comunicación bidireccional con clientes</Text>
          <Text style={styles.bulletPoint}>• Actualizaciones de estado en tiempo real</Text>
          <Text style={styles.bulletPoint}>• Sistema de confirmaciones</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reportes y Análisis</Text>
          <Text style={styles.bulletPoint}>• Reportes de operaciones diarias</Text>
          <Text style={styles.bulletPoint}>• Métricas de rendimiento</Text>
          <Text style={styles.bulletPoint}>• Análisis de tiempos de servicio</Text>
          <Text style={styles.bulletPoint}>• Exportación de datos</Text>
        </View>
      </Page>

      {/* Página 3: Módulos del Sistema */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Módulos del Sistema</Text>
        </View>

        <Text style={styles.title}>Módulos Principales del Sistema</Text>

        <View style={styles.moduleContainer}>
          <View style={styles.moduleBox}>
            <Text style={styles.moduleTitle}>1. Registro de Vehículos</Text>
            <Text style={styles.moduleDescription}>
              Interfaz intuitiva para el registro rápido de vehículos con captura de datos 
              esenciales y fotografías.
            </Text>
            <Text style={styles.planFeature}>• Formulario optimizado</Text>
            <Text style={styles.planFeature}>• Captura de imágenes</Text>
            <Text style={styles.planFeature}>• Validación automática</Text>
          </View>

          <View style={styles.moduleBox}>
            <Text style={styles.moduleTitle}>2. Gestión de Tickets</Text>
            <Text style={styles.moduleDescription}>
              Sistema completo para la creación, seguimiento y gestión de tickets digitales.
            </Text>
            <Text style={styles.planFeature}>• Códigos QR únicos</Text>
            <Text style={styles.planFeature}>• Estados en tiempo real</Text>
            <Text style={styles.planFeature}>• Búsqueda avanzada</Text>
          </View>

          <View style={styles.moduleBox}>
            <Text style={styles.moduleTitle}>3. Dashboard Operativo</Text>
            <Text style={styles.moduleDescription}>
              Panel de control centralizado con métricas y herramientas de gestión.
            </Text>
            <Text style={styles.planFeature}>• Métricas en tiempo real</Text>
            <Text style={styles.planFeature}>• Gestión de personal</Text>
            <Text style={styles.planFeature}>• Monitoreo de ocupación</Text>
          </View>

          <View style={styles.moduleBox}>
            <Text style={styles.moduleTitle}>4. Portal Administrativo</Text>
            <Text style={styles.moduleDescription}>
              Herramientas avanzadas para administradores y supervisores.
            </Text>
            <Text style={styles.planFeature}>• Gestión de usuarios</Text>
            <Text style={styles.planFeature}>• Configuración del sistema</Text>
            <Text style={styles.planFeature}>• Reportes avanzados</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stack Tecnológico</Text>
          <View style={styles.techStack}>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Frontend</Text>
              <Text style={styles.techItem}>Next.js 14 (React)</Text>
              <Text style={styles.techItem}>TypeScript</Text>
              <Text style={styles.techItem}>Tailwind CSS</Text>
            </View>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Backend</Text>
              <Text style={styles.techItem}>Supabase</Text>
              <Text style={styles.techItem}>PostgreSQL</Text>
              <Text style={styles.techItem}>Real-time</Text>
            </View>
            <View style={styles.techColumn}>
              <Text style={styles.techTitle}>Servicios</Text>
              <Text style={styles.techItem}>Vercel (Hosting)</Text>
              <Text style={styles.techItem}>WhatsApp Business API</Text>
              <Text style={styles.techItem}>Twilio (SMS)</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Página 4: Planes de Desarrollo */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Stack Tecnológico</Text>
        </View>

        <Text style={styles.title}>Planes de Desarrollo</Text>
        <Text style={styles.subtitle}>Dos opciones para adaptarse a sus necesidades y tiempos</Text>

        <View style={styles.planContainer}>
          <View style={styles.planBox}>
            <Text style={styles.planTitle}>Plan Acelerado (MVP)</Text>
            <Text style={styles.planPrice}>$5,850 USD</Text>
            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#6B7280' }}>+ IVA</Text>
            
            <Text style={styles.planFeature}>✓ Duración: 4 Semanas</Text>
            <Text style={styles.planFeature}>✓ Flujo operativo para una sucursal</Text>
            <Text style={styles.planFeature}>✓ Funciones esenciales para iniciar</Text>
            <Text style={styles.planFeature}>✓ Funcionalidades completas en segunda fase</Text>
            
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#F59E0B', marginTop: 8, marginBottom: 4 }}>Funcionalidades que se sacrifican:</Text>
            <Text style={styles.planFeature}>• Arquitectura Multi-Sucursal</Text>
            <Text style={styles.planFeature}>• Exportación avanzada de reportes</Text>
            <Text style={styles.planFeature}>• Filtros avanzados en dashboard</Text>
            <Text style={styles.planFeature}>• Notificaciones por SMS</Text>
            <Text style={styles.planFeature}>• Panel de métricas avanzadas</Text>
          </View>

          <View style={[styles.planBox, { borderColor: '#3B82F6', borderWidth: 2 }]}>
            <Text style={styles.planTitle}>Plan Integral ⭐</Text>
            <Text style={styles.planPrice}>$9,650 USD</Text>
            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10, color: '#6B7280' }}>+ IVA</Text>
            
            <Text style={styles.planFeature}>✓ Duración: 8 Semanas</Text>
            <Text style={styles.planFeature}>✓ Todas las funcionalidades incluidas</Text>
            <Text style={styles.planFeature}>✓ Arquitectura Multi-Sucursal</Text>
            <Text style={styles.planFeature}>✓ Sistema completo de reportes</Text>
            <Text style={styles.planFeature}>✓ Dashboard avanzado con métricas</Text>
            <Text style={styles.planFeature}>✓ Notificaciones SMS y WhatsApp</Text>
            <Text style={styles.planFeature}>✓ Sistema de roles granular</Text>
            <Text style={styles.planFeature}>✓ Exportación avanzada de datos</Text>
            <Text style={styles.planFeature}>✓ Soporte técnico extendido</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Por Qué Elegir a Avanxia Labs?</Text>
          <View style={styles.moduleContainer}>
            <View style={styles.moduleBox}>
              <Text style={styles.moduleTitle}>Diseño de Vanguardia</Text>
              <Text style={styles.moduleDescription}>
                Creamos diseños personalizados aplicando las últimas técnicas de UX/UI, desde 
                wireframes hasta prototipado y validación.
              </Text>
            </View>
            <View style={styles.moduleBox}>
              <Text style={styles.moduleTitle}>Tecnología de Punta</Text>
              <Text style={styles.moduleDescription}>
                Utilizamos tecnologías de última generación como Next.js para tiempos de carga 
                mínimos y máxima seguridad.
              </Text>
            </View>
            <View style={styles.moduleBox}>
              <Text style={styles.moduleTitle}>Calidad Internacional</Text>
              <Text style={styles.moduleDescription}>
                Diseñadores y desarrolladores con experiencia en proyectos para Norteamérica, 
                Europa y México.
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Página 5: Información de Contacto */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Información de Contacto</Text>
        </View>

        <Text style={styles.title}>¿Listo para Comenzar?</Text>
        <Text style={styles.subtitle}>
          Construyamos juntos una herramienta que optimizará tu operación y generará un excelente retorno 
          de inversión.
        </Text>

        <View style={styles.planContainer}>
          <View style={styles.planBox}>
            <Text style={styles.contactTitle}>Contacto</Text>
            <Text style={styles.contactText}>📞 +52 (729) 688 4671</Text>
            <Text style={styles.contactText}>📧 contacto@avanxia.com</Text>
            <Text style={styles.contactText}>📧 ismael@avanxia.com</Text>
            <Text style={styles.contactText}>📍 307 Local 16, St. Miguel Hidalgo</Text>
            <Text style={styles.contactText}>San Mateo Otzacatipan, CP. 50200</Text>
            <Text style={styles.contactText}>Toluca, Edo. Méx.</Text>
          </View>

          <View style={styles.planBox}>
            <Text style={styles.contactTitle}>Siguientes Pasos</Text>
            <Text style={styles.contactText}>1. Revisión de propuesta</Text>
            <Text style={styles.contactText}>2. Reunión de alineación</Text>
            <Text style={styles.contactText}>3. Firma de contrato</Text>
            <Text style={styles.contactText}>4. Pago de anticipo (50%)</Text>
            <Text style={styles.contactText}>5. Reunión de kickoff</Text>
          </View>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Condiciones Comerciales</Text>
          <Text style={styles.contactText}>• Anticipo del 50% para iniciar el proyecto</Text>
          <Text style={styles.contactText}>• Pago final del 50% contra entrega</Text>
          <Text style={styles.contactText}>• Garantía de 3 meses post-entrega</Text>
          <Text style={styles.contactText}>• Soporte técnico incluido durante el desarrollo</Text>
          <Text style={styles.contactText}>• Capacitación del equipo incluida</Text>
        </View>

        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 4 }}>Atentamente,</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1E40AF', marginBottom: 2 }}>Ismael LSG</Text>
          <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 15 }}>Socio Operativo • Avanxia Labs</Text>
          <Image 
            style={{ width: 120, height: 60, objectFit: 'contain' }} 
            src="/images/cotizaciones/ismael-lsg-signature.png" 
          />
        </View>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 10, color: '#9CA3AF' }}>Avanxia Labs</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TicketValetPDF;