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
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  levelBox: {
    width: '30%',
    padding: 15,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
  },
  levelTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
    textAlign: 'center',
  },
  levelDescription: {
    fontSize: 10,
    lineHeight: 1.4,
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

});

const GybConnectPDF: React.FC = () => {
  return (
    <Document>
      {/* Página 1: Portada e Información del Proyecto */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Propuesta de Desarrollo Web</Text>
        </View>

        <Text style={styles.title}>Sitio Web de Alto Impacto</Text>
        <Text style={styles.title}>para GYB Connect</Text>
        <Text style={styles.subtitle}>Propuesta de Servicios para Desarrollo Web Avanzado</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Resumen del Proyecto</Text>
          <Text style={styles.text}>• Cliente: GYB Connect</Text>
          <Text style={styles.text}>• Fecha de Inicio: Lunes, 24 de junio de 2025</Text>
          <Text style={styles.text}>• Duración Estimada: 4 semanas</Text>
          <Text style={styles.text}>
            El objetivo es desarrollar un sitio web extenso y de alto impacto para GYB Connect, enfocado en la generación de prospectos cualificados y diseñado para funcionar como una herramienta educativa y de ventas. El sitio web se inspirará en la fluidez de las animaciones y la presentación de información de líderes en la industria como Helcim y Green Payments.
          </Text>
          <Text style={styles.text}>
            La estructura se basará en un innovador enfoque de tres niveles de información para maximizar la comprensión del usuario y la confianza en los servicios de GYB Connect.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Beneficios Clave</Text>
          <Text style={styles.bulletPoint}>• Aumento en la generación de prospectos cualificados.</Text>
          <Text style={styles.bulletPoint}>• Mejora la educación y confianza del cliente potencial.</Text>
          <Text style={styles.bulletPoint}>• Posiciona a GYB Connect como una autoridad en su sector.</Text>
          <Text style={styles.bulletPoint}>• Plataforma escalable para futuras estrategias de marketing.</Text>
          <Text style={styles.bulletPoint}>• Diseño de vanguardia que refleja profesionalismo e innovación.</Text>
        </View>
      </Page>

      {/* Página 2: El Enfoque de Tres Niveles */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Metodología</Text>
        </View>

        <Text style={styles.title}>El Enfoque Innovador de Tres Niveles</Text>
        <Text style={styles.subtitle}>Maximizamos la comprensión y confianza del usuario con una estructura de información única.</Text>

        <View style={styles.levelContainer}>
          <View style={styles.levelBox}>
            <Text style={styles.levelTitle}>Nivel 1: Diseño Principal</Text>
            <Text style={styles.levelDescription}>Una experiencia de usuario intuitiva y un diseño de vanguardia que presenta claramente los servicios y propuestas de valor, captando el interés inicial del visitante.</Text>
          </View>
          <View style={styles.levelBox}>
            <Text style={styles.levelTitle}>Nivel 2: Tooltips Interactivos</Text>
            <Text style={styles.levelDescription}>Explicaciones concisas integradas en términos técnicos o frases clave para educar al usuario sin saturar la página, aclarando conceptos complejos del sector fintech.</Text>
          </View>
          <View style={styles.levelBox}>
            <Text style={styles.levelTitle}>Nivel 3: Chatbot con IA</Text>
            <Text style={styles.levelDescription}>Un asistente virtual alimentado con la información de los servicios de GYB Connect, capaz de resolver dudas específicas, guiar a los usuarios y capturar prospectos.</Text>
          </View>
        </View>
      </Page>

      {/* Página 3: Alcance y Entregables */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
           <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Alcance y Entregables</Text>
        </View>
        <Text style={styles.sectionTitle}>2. Alcance del Proyecto y Entregables</Text>
        
        <Text style={{...styles.sectionTitle, fontSize: 14, color: '#3B82F6', borderBottomWidth: 0, marginBottom: 8}}>2.1 Fase 1: Estrategia y Diseño UI/UX (1.5 semanas)</Text>
        <Text style={styles.bulletPoint}>• Sesión de descubrimiento para alinear objetivos y levantamiento de información.</Text>
        <Text style={styles.bulletPoint}>• Clasificación de la Información en los 3 niveles descritos.</Text>
        <Text style={styles.bulletPoint}>• Diseño de la arquitectura de la información y mapa del sitio (10-15 secciones).</Text>
        <Text style={styles.bulletPoint}>• Diseño completo de UI/UX en Figma con especificaciones detalladas.</Text>
        <Text style={styles.bulletPoint}>• Prototipo interactivo para validación del flujo de navegación.</Text>

        <Text style={{...styles.sectionTitle, fontSize: 14, color: '#3B82F6', borderBottomWidth: 0, marginBottom: 8, marginTop: 16}}>2.2 Fase 2: Desarrollo e Implementación (2.5 semanas)</Text>
        <Text style={styles.bulletPoint}>• Desarrollo Frontend con Next.js/React para animaciones fluidas y SEO.</Text>
        <Text style={styles.bulletPoint}>• Integración de los tooltips interactivos en todo el sitio.</Text>
        <Text style={styles.bulletPoint}>• Desarrollo e integración del chatbot con IA entrenado.</Text>
        <Text style={styles.bulletPoint}>• Creación de vistas: Home, Soluciones, Marketing, Terminales, Gateway, Sobre nosotros, Contacto.</Text>
        <Text style={styles.bulletPoint}>• Configuración de formularios de contacto optimizados para Google Ads.</Text>
      </Page>

      {/* Página 4: Presupuesto y Contacto */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
           <Image style={styles.logo} src="/images/portfolio/proyectos/logo.png" />
          <Text style={{ fontSize: 12, color: '#6B7280' }}>Presupuesto y Pagos</Text>
        </View>
        <Text style={styles.sectionTitle}>3. Presupuesto y Plan de Pagos</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Hito</Text></View>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Monto</Text></View>
            <View style={styles.tableColHeader}><Text style={styles.tableCellHeader}>Fecha Límite de Pago</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Primer Pago</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$700 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Viernes, 4 de julio de 2025</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Segundo Pago</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$800 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Viernes, 11 de julio de 2025</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Tercer Pago</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>$1,000 USD</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Martes, 22 de julio de 2025</Text></View>
          </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacto y Próximos Pasos</Text>
            <Text style={styles.text}>Quedamos a su entera disposición para resolver cualquier duda. Estamos convencidos de que podemos construir una herramienta que optimizará su operación y generará un excelente retorno de inversión.</Text>
            
            <View style={{ marginTop: 30, alignItems: 'center', paddingTop: 20, borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
              <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 4 }}>Atentamente,</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#1E40AF', marginBottom: 2 }}>Ismael LSG</Text>
              <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 15 }}>Socio Operativo • Avanxia Labs</Text>
              <Image 
                style={{ width: 120, height: 60, objectFit: 'contain' }} 
                src="/images/cotizaciones/ismael-lsg-signature.png" 
              />
            </View>
    
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 10, color: '#9CA3AF' }}>Avanxia Labs</Text>
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default GybConnectPDF;
