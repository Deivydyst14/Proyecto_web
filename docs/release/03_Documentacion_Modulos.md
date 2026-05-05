# 03. Documentación por Módulo y Componente

**Proyecto:** Sitio Web (Frontend) - Módulos Home, Planes y Cotización  
**Autor:** Salgado González, Deivid Yoset  
**Fecha:** 04/05/2026  
**Versión:** 1.0

## Módulo 1: Home (Inicio)

- **Archivo:** `index.html`
- **Propósito:** Presentar el sitio y permitir navegación a los demás módulos.
- **Entradas:** clics en botones/enlaces.
- **Salidas:** render de la página, redirección a Planes/Cotización.
- **Reglas/validaciones:** enlaces correctos.
- **Errores comunes:** rutas rotas a CSS/JS/imágenes.

## Módulo 2: Planes

- **Archivo:** `planes.html`
- **Propósito:** Mostrar planes disponibles (fase actual: estáticos).
- **Entradas:** clics en CTA (si aplica).
- **Salidas:** visualización de planes (nombre, descripción, precio).
- **Errores comunes:** imágenes no cargan por rutas o nombres con mayúsculas diferentes.

## Módulo 3: Cotización

- **Archivo:** `cotizacion.html`
- **Propósito:** Capturar datos para cotización.
- **Entradas:** campos del formulario (ej: nombre, email, teléfono, plan, mensaje).
- **Validaciones:** requeridos, formato de email, longitudes mínimas.
- **Salidas:** mensaje de confirmación en pantalla.
- **Observación:** Persistencia en MySQL se implementará en fase futura con API segura.

## Componentes Transversales

- **CSS:** `styles.css`
  - Estilos globales y por secciones.
- **JS:** `script.js`
  - Validaciones del formulario y lógica de interacción.
- **Assets:** `assets/`
  - Imágenes, íconos, etc.
  - Recomendación: ubicar dentro del directorio público de despliegue y referenciar con rutas absolutas.
  -
