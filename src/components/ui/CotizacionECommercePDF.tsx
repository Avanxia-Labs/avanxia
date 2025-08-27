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
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  comparisonBox: {
    width: '30%',
    padding: 15,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  comparisonBoxHighlight: {
    width: '30%',
    padding: 15,
    backgroundColor: '#EBF8FF',
    borderWidth: 2,
    borderColor: '#3B82F6',
    borderRadius: 8,
  },
  comparisonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
    textAlign: 'center',
  },
  comparisonDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  comparisonFeature: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#6B7280',
    marginBottom: 2,
  },
  flowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flowBox: {
    width: '18%',
    padding: 10,
    backgroundColor: '#F0F9FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 8,
    alignItems: 'center',
  },
  flowNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 6,
  },
  flowTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 6,
    textAlign: 'center',
  },
  flowDescription: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#374151',
    textAlign: 'center',
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginBottom: 20,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "33.33%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#F8FAFC',
    padding: 8,
  },
  tableCol: {
    width: "33.33%",
    borderStyle: "solid",
    padding: 8,
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  tableCell: {
    fontSize: 10,
  },
  weeklyContainer: {
    marginBottom: 15,
  },
  weekTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
    backgroundColor: '#F0F9FF',
    padding: 8,
    borderRadius: 4,
  },
  weekBullet: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#374151',
    marginBottom: 3,
    marginLeft: 10,
  },
  highlightBox: {
    backgroundColor: '#F0F9FF',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
    marginBottom: 15,
  },
  highlightTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 6,
  },
  highlightText: {
    fontSize: 11,
    lineHeight: 1.4,
    color: '#374151',
  },
  finalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E40AF',
    textAlign: 'center',
    marginVertical: 10,
  },
  signature: {
    marginTop: 30,
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  signatureText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  signatureName: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#1E40AF',
    marginBottom: 2,
  },
  signatureTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 15,
  },
  signatureImage: {
    width: 120,
    height: 60,
    objectFit: 'contain',
  },
  company: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 20,
  },
});

const CotizacionECommercePDF: React.FC = () => {
  return (
    <Document>
      {/* Página 1: Portada */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Propuesta de E-commerce</Text>
        </View>

        <Text style={styles.title}>Plataforma E-commerce Completa</Text>
        <Text style={styles.title}>para Productos Digitales</Text>
        <Text style={styles.subtitle}>Sistema integral de ventas automatizado con dashboard administrativo</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Resumen Ejecutivo</Text>
          <Text style={styles.text}>
            Desarrollaremos una plataforma e-commerce completa especializada en la venta de productos digitales, 
            que automatiza todo el proceso desde la llegada del cliente hasta la entrega del producto por email.
          </Text>
          <Text style={styles.text}>
            Este no es un simple landing page, sino un ecosistema completo que incluye sistema de pagos con Stripe, 
            entrega automática por email, dashboard administrativo con autenticación y base de datos en la nube.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Proyecto</Text>
          <Text style={styles.text}>• Tipo: E-commerce de Productos Digitales Completo</Text>
          <Text style={styles.text}>• Duración: 4 semanas de desarrollo intensivo</Text>
          <Text style={styles.text}>• Inversión Total: $1,790 USD</Text>
          <Text style={styles.text}>• Stack: Next.js 14, React, TypeScript, Tailwind CSS, Supabase, Stripe, Resend</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.highlightTitle}>¿Por qué más que un Landing Page?</Text>
          <Text style={styles.highlightText}>
            Un landing page tradicional solo captura leads, pero para vender productos digitales necesita un ecosistema 
            completo que maneje pagos, entregas automáticas y administración del negocio las 24 horas del día.
          </Text>
        </View>
      </Page>

      {/* Página 2: Comparación de Enfoques */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Comparación de Soluciones</Text>
        </View>

        <Text style={styles.title}>¿Landing Page vs E-commerce Completo?</Text>

        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>Landing Page Tradicional</Text>
            <Text style={styles.comparisonDescription}>Solo captura información de contacto y deriva a procesos manuales</Text>
            <Text style={styles.comparisonFeature}>• Procesos de venta manuales</Text>
            <Text style={styles.comparisonFeature}>• Sin sistema de pagos</Text>
            <Text style={styles.comparisonFeature}>• Entrega manual de productos</Text>
            <Text style={styles.comparisonFeature}>• Sin control administrativo</Text>
          </View>
          
          <View style={styles.comparisonBoxHighlight}>
            <Text style={styles.comparisonTitle}>E-commerce Completo</Text>
            <Text style={styles.comparisonDescription}>Plataforma integral que automatiza todo el proceso de venta</Text>
            <Text style={styles.comparisonFeature}>• Pagos automatizados con Stripe</Text>
            <Text style={styles.comparisonFeature}>• Entrega automática por email</Text>
            <Text style={styles.comparisonFeature}>• Dashboard administrativo completo</Text>
            <Text style={styles.comparisonFeature}>• Control total del negocio</Text>
          </View>

          <View style={styles.comparisonBox}>
            <Text style={styles.comparisonTitle}>Escalabilidad</Text>
            <Text style={styles.comparisonDescription}>Sistema que crece con su negocio sin intervención manual</Text>
            <Text style={styles.comparisonFeature}>• Ventas 24/7 automáticas</Text>
            <Text style={styles.comparisonFeature}>• Escalable sin límites</Text>
            <Text style={styles.comparisonFeature}>• Reportes y estadísticas</Text>
            <Text style={styles.comparisonFeature}>• ROI medible y optimizable</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flujo Automatizado del Sistema</Text>
          <Text style={styles.text}>
            Desde que el cliente llega hasta que recibe su producto, todo funciona completamente automático:
          </Text>
        </View>

        <View style={styles.flowContainer}>
          <View style={styles.flowBox}>
            <Text style={styles.flowNumber}>1</Text>
            <Text style={styles.flowTitle}>Landing</Text>
            <Text style={styles.flowDescription}>Cliente llega a landing page profesional y animada</Text>
          </View>
          <View style={styles.flowBox}>
            <Text style={styles.flowNumber}>2</Text>
            <Text style={styles.flowTitle}>Pago Seguro</Text>
            <Text style={styles.flowDescription}>Checkout con Stripe internacional</Text>
          </View>
          <View style={styles.flowBox}>
            <Text style={styles.flowNumber}>3</Text>
            <Text style={styles.flowTitle}>Entrega Automática</Text>
            <Text style={styles.flowDescription}>Producto enviado por email en segundos</Text>
          </View>
          <View style={styles.flowBox}>
            <Text style={styles.flowNumber}>4</Text>
            <Text style={styles.flowTitle}>Control Total</Text>
            <Text style={styles.flowDescription}>Estadísticas en tiempo real</Text>
          </View>
          <View style={styles.flowBox}>
            <Text style={styles.flowNumber}>5</Text>
            <Text style={styles.flowTitle}>Administración</Text>
            <Text style={styles.flowDescription}>Dashboard para gestionar productos</Text>
          </View>
        </View>
      </Page>

      {/* Página 3: Cronograma de Desarrollo */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Cronograma de Desarrollo</Text>
        </View>

        <Text style={styles.title}>Cronograma de Desarrollo - 4 Semanas</Text>

        <View style={styles.weeklyContainer}>
          <Text style={styles.weekTitle}>Semana 1: Setup + Landing Page</Text>
          <Text style={styles.weekBullet}>✓ Configuración completa del proyecto Next.js 14 con todas las tecnologías</Text>
          <Text style={styles.weekBullet}>✓ Diseño y estructura de la base de datos en Supabase</Text>
          <Text style={styles.weekBullet}>✓ Landing page con animaciones y hero section impactante</Text>
          <Text style={styles.weekBullet}>✓ Sección de productos y formularios de captura inicial</Text>
          <Text style={styles.weekBullet}>✓ Diseño responsive completo y componentes reutilizables</Text>
        </View>

        <View style={styles.weeklyContainer}>
          <Text style={styles.weekTitle}>Semana 2: Sistema de Pagos</Text>
          <Text style={styles.weekBullet}>✓ Integración completa de Stripe con productos y precios</Text>
          <Text style={styles.weekBullet}>✓ Formularios con validaciones avanzadas (React Hook Form + Zod)</Text>
          <Text style={styles.weekBullet}>✓ Estados de loading, success y error manejados con Zustand</Text>
          <Text style={styles.weekBullet}>✓ Checkout Sessions API y webhooks para confirmar pagos</Text>
          <Text style={styles.weekBullet}>✓ Páginas de confirmación y cancelación de compra</Text>
        </View>

        <View style={styles.weeklyContainer}>
          <Text style={styles.weekTitle}>Semana 3: Automatización + Dashboard</Text>
          <Text style={styles.weekBullet}>✓ Sistema de emails automático con Resend y templates profesionales</Text>
          <Text style={styles.weekBullet}>✓ Trigger automático post-pago para entrega de productos</Text>
          <Text style={styles.weekBullet}>✓ Sistema de login administrativo con Supabase Auth</Text>
          <Text style={styles.weekBullet}>✓ Dashboard con estadísticas esenciales y KPIs</Text>
          <Text style={styles.weekBullet}>✓ Lista de órdenes y gestión básica de clientes</Text>
        </View>

        <View style={styles.weeklyContainer}>
          <Text style={styles.weekTitle}>Semana 4: Testing + Deploy</Text>
          <Text style={styles.weekBullet}>✓ Testing end-to-end completo de todo el flujo</Text>
          <Text style={styles.weekBullet}>✓ Validaciones de seguridad y manejo robusto de errores</Text>
          <Text style={styles.weekBullet}>✓ Deploy en Vercel con configuración de webhooks en producción</Text>
          <Text style={styles.weekBullet}>✓ Testing en ambiente real con transacciones de prueba</Text>
          <Text style={styles.weekBullet}>✓ Documentación completa y entrega del proyecto funcional</Text>
        </View>
      </Page>

      {/* Página 4: Presupuesto y Entregables */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Presupuesto y Entregables</Text>
        </View>

        <Text style={styles.sectionTitle}>Inversión Total y Plan de Pagos</Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Hito</Text></View>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Monto</Text></View>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Entregables</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Inicio del Proyecto</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$560 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Setup + Landing Page</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Sistema de Pagos</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$560 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Stripe + Checkout Funcional</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Entrega Final</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$670 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Dashboard + Deploy Completo</Text></View>
          </View>
        </View>

        <Text style={styles.finalPrice}>Total de Inversión: $1,790 USD</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Qué Incluye Su Inversión?</Text>
          <Text style={styles.bulletPoint}>• Landing page profesional con animaciones fluidas y diseño responsive</Text>
          <Text style={styles.bulletPoint}>• Sistema de pagos completo con Stripe para aceptar pagos internacionales</Text>
          <Text style={styles.bulletPoint}>• Entrega automática de productos digitales por email</Text>
          <Text style={styles.bulletPoint}>• Dashboard administrativo con autenticación y estadísticas</Text>
          <Text style={styles.bulletPoint}>• Base de datos en la nube configurada en Supabase</Text>
          <Text style={styles.bulletPoint}>• Deploy en producción en Vercel con dominio personalizado</Text>
          <Text style={styles.bulletPoint}>• Código moderno con las mejores prácticas</Text>
          <Text style={styles.bulletPoint}>• Seguridad avanzada y validaciones robustas</Text>
          <Text style={styles.bulletPoint}>• Documentación completa del proyecto</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.highlightTitle}>Un Negocio Digital Completo</Text>
          <Text style={styles.highlightText}>
            No solo obtendrá un sitio web, sino una plataforma de negocios completa que le permitirá vender 
            productos digitales de forma automatizada las 24 horas del día, con control total sobre su operación.
          </Text>
        </View>

        <View style={styles.signature}>
          <Text style={styles.signatureText}>Atentamente,</Text>
          <Text style={styles.signatureName}>Ismael LSG</Text>
          <Text style={styles.signatureTitle}>Socio Operativo • Avanxia Labs</Text>
          <Image 
            style={styles.signatureImage} 
            src="/images/cotizaciones/ismael-lsg-signature.png" 
          />
          <Text style={styles.company}>Avanxia Labs</Text>
        </View>
      </Page>
    </Document>
  );
};

export default CotizacionECommercePDF;