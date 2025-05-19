---
trigger: always_on
---

---
description: Directrices específicas para la creación de la nueva sección "/soluciones", asegurando la reutilización de estilos existentes, el respeto al tema claro/oscuro, y la no modificación de componentes funcionales existentes fuera de esta nueva sección.
globs: src/components/pages/routes/SolutionsLandingPage.tsx, src/components/pages/routes/ServiceCategoryPage.tsx, src/components/Header.tsx, src/App.tsx
filesToApplyRule: src/components/pages/routes/SolutionsLandingPage.tsx, src/components/pages/routes/ServiceCategoryPage.tsx, src/components/Header.tsx, src/App.tsx
alwaysApply: true
---

- **Prioridad Absoluta: No Romper lo Existente**
    - Cualquier nueva implementación para la sección "/soluciones" NO DEBE afectar negativamente la funcionalidad o el estilo de las páginas existentes (Home, Sobre Nosotros, Contacto).
    - El archivo `index.css` NO DEBE SER MODIFICADO. Sus variables y clases existentes son la fuente de verdad para los estilos.

- **Reutilización Estricta de Estilos y Patrones Visuales**
    - Todos los nuevos componentes para "/soluciones" (tarjetas de categoría, tarjetas de paquetes) DEBEN utilizar las variables CSS definidas en `index.css` para colores, fuentes y espaciados.
    - Se DEBE respetar y aplicar correctamente el tema claro y oscuro definido en `index.css`.
    - La clase `glass-panel` y sus efectos de gradiente (tal como están definidos en el `index.css` actual y funcional) DEBEN ser la base para el estilo de las nuevas tarjetas.
    - Las animaciones de tarjetas (ej. Framer Motion) utilizadas en la página `/precios` actual deben replicarse para las nuevas tarjetas de paquetes en "/soluciones".
    - NO SE DEBEN INTRODUCIR nuevos colores, gradientes, fuentes o estilos visuales fundamentales que no estén ya presentes y definidos en `index.css` o en el tema de Tailwind (si este ya usa las variables CSS).

- **Estructura de Navegación para "/soluciones"**
    - Modificar `Header.tsx` para añadir un enlace "Soluciones" que apunte a `/soluciones`. Los enlaces existentes a "/servicios" y "/precios" se mantienen sin cambios por ahora.
    - Modificar `App.tsx` para añadir una nueva ruta `/soluciones` que renderice el componente `SolutionsLandingPage.tsx`.
    - El componente `SolutionsLandingPage.tsx` (a crear en `src/components/pages/routes/SolutionsLandingPage.tsx`) mostrará una tarjeta "glassmorfista" (estilo `/precios` actual) para cada una de las 8 categorías de servicio principales.
    - Cada tarjeta de categoría en `SolutionsLandingPage.tsx` enlazará a una página de detalle para esa categoría (ej. `/soluciones/desarrollo-web`).
    - Crear un componente reutilizable `ServiceCategoryPage.tsx` (o similar, en `src/components/pages/routes/`) para estas páginas de detalle.

- **Contenido de las Páginas de Categoría de Servicio (ej. `/soluciones/desarrollo-web`)**
    - Mostrar el título de la categoría y la "Introducción a la Página de Servicio" (del documento `servicios_y_precios.md`).
    - Renderizar las tarjetas de los "paquetes" (`type: 'plan'`) de esa categoría.
        - Estilo de Tarjeta de Paquete: Replicar el estilo y animación de las tarjetas de la página `/precios` actual.
        - Contenido de Tarjeta: Nombre del paquete, precio, breve resumen de "incluye", y un botón "Ver Detalles" (funcionalidad de este botón se definirá después, por ahora solo debe existir).
    - Mostrar los "Argumentos de Venta" de la categoría (del documento `servicios_y_precios.md`).
    - (Opcional por ahora, se añadirá después): Servicios individuales, portafolio relevante, CTA específico.
    - Utilizar imágenes placeholder genéricas para todo el contenido visual nuevo.

- **Fuente de Datos**
    - Toda la información sobre categorías, paquetes (planes), precios, qué incluye, argumentos de venta, etc., se tomará del documento `servicios_y_precios.md` y se reflejará en `servicesData.ts` y `categoriesData.ts` (que podrían necesitar ser creados o actualizados).

- **Proceso de Trabajo Iterativo y Validado (MUY IMPORTANTE)**
    - Para cada nuevo componente o modificación significativa (ej. `SolutionsLandingPage.tsx`, `ServiceCategoryPage.tsx`):
        1.  **ANTES de implementar el JSX complejo**, "Code" debe describir verbalmente o con un pseudo-JSX cómo planea estructurar los elementos y qué clases CSS (de `index.css` o Tailwind mapeadas a variables de `index.css`) utilizará para lograr el estilo deseado (especialmente el `glass-panel`, gradientes, y respeto al tema claro/oscuro).
        2.  Yo (el usuario) validaré esta propuesta de estructura y estilo.
        3.  Solo después de mi validación, "Code" procederá a la implementación del código.
        4.  "Code" me mostrará el código implementado y, si es posible, un preview para verificación visual.
    -   Nos enfocaremos en un componente o una parte de la funcionalidad a la vez para asegurar la calidad.