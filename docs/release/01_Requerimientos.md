# 01. Requerimientos del Sistema

**Proyecto:** Sitio Web (Frontend) - Módulos Home, Planes y Cotización  
**Autor:** Salgado González, Deivid Yoset  
**Fecha:** 04/05/2026  
**Versión:** 1.0

## 1. Objetivo

Definir los requerimientos funcionales y no funcionales del sistema web (Frontend) compuesto por los módulos: Home, Planes y Cotización.

## 2. Alcance

### Incluye

- Interfaz web estática con HTML, CSS y JavaScript.
- Navegación entre páginas (Home, Planes, Cotización).
- Presentación de planes (contenido visual).
- Formulario de cotización con validaciones en el navegador.
- Despliegue en Vercel.

### No incluye (fase actual)

- Integración directa del navegador con MySQL.
- Persistencia de datos en base de datos desde el frontend.
  > Nota: La integración con MySQL se plantea para una fase futura mediante una API segura (backend).

## 3. Requerimientos Funcionales (RF)

- **RF-01:** El sistema debe mostrar una página de inicio (Home) con navegación a Planes y Cotización.
- **RF-02:** El sistema debe mostrar una página de Planes con información detallada de cada plan.
- **RF-03:** El sistema debe permitir diligenciar un formulario de Cotización.
- **RF-04:** El sistema debe validar campos obligatorios antes de confirmar el envío o mostrar la confirmación.

## 4. Requerimientos No Funcionales (RNF)

- **RNF-01 (Usabilidad):** El sitio debe ser usable en móvil y escritorio.
- **RNF-02 (Rendimiento):** El sitio debe cargar rápidamente con recursos optimizados.
- **RNF-03 (Mantenibilidad):** Código organizado por archivos (HTML/CSS/JS) y estructura clara.
- **RNF-04 (Seguridad):** No incluir credenciales de BD en el frontend.

## 5. Criterios de Aceptación

- **CA-01:** Todas las páginas cargan correctamente en Vercel sin errores 404 de recursos.
- **CA-02:** La navegación entre Home, Planes y Cotización funciona correctamente.
- **CA-03:** El formulario de Cotización muestra mensajes de validación ante datos incompletos.
- **CA-04:** Las imágenes se cargan correctamente en Vercel (rutas correctas y nombres consistentes).
