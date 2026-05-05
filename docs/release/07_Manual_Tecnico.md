# 07. Manual Técnico

**Proyecto:** Sitio Web (Frontend) - Módulos Home, Planes y Cotización  
**Autor:** Salgado González, Deivid Yoset  
**Fecha:** 05p/05/2026  
**Versión:** 1.0

## 1. Arquitectura

- Frontend: HTML + CSS + JavaScript (sitio estático).
- Despliegue: Vercel conectado a repositorio Git.
- Datos: MySQL documentado para fase futura mediante API (no directo desde el navegador).

## 2. Estructura del proyecto

- `index.html`: módulo Home
- `planes.html`: módulo Planes
- `cotizacion.html`: módulo Cotización
- `styles.css`: estilos
- `script.js`: lógica en navegador
- `assets/`: recursos (imágenes)

## 3. Ejecución local

- Opción 1: Abrir `index.html` en el navegador.
- Opción 2: VS Code + Live Server:
  - Abrir `index.html` con Live Server.

## 4. Despliegue en Vercel

1. Subir el proyecto a GitHub.
2. En Vercel: New Project → Importar repo.
3. Framework: Other.
4. Deploy.
5. Con cada `git push` se genera un nuevo deployment.

## 5. Mantenimiento y recomendaciones

- Mantener consistencia en rutas de assets.
- Respetar mayúsculas/minúsculas.
- Optimizar imágenes (peso) para carga rápida.
