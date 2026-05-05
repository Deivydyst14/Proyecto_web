# 06. Base de Datos (MySQL) - Documentación

**Proyecto:** Sitio Web (Frontend) - Módulos Home, Planes y Cotización  
**Autor:** Salgado González, Deivid Yoset  
**Fecha:** 05/05/2026  
**Versión:** 1.0

## 1. Descripción

En la fase actual, el sistema es exclusivamente Frontend. La base de datos MySQL se documenta como parte del diseño para una futura integración mediante una API segura.

## 2. Tablas sugeridas

### 2.1 Tabla: planes

- id (INT, PK, AI)
- nombre (VARCHAR)
- descripcion (TEXT)
- precio (DECIMAL)
- activo (BOOLEAN)

### 2.2 Tabla: cotizaciones

- id (INT, PK, AI)
- nombre (VARCHAR)
- email (VARCHAR)
- telefono (VARCHAR)
- plan_id (INT, FK)
- mensaje (TEXT)
- fecha_creacion (DATETIME)

## 3. Nota de seguridad

- No se deben incluir credenciales de MySQL en el frontend.
- La conexión debe hacerse desde un backend/API (ej: funciones serverless en Vercel).

## 4. Script SQL (anexar como script.sql)

Se recomienda incluir el archivo `docs/BD/script.sql` con la creación de tablas.
