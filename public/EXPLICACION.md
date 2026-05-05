# 📚 Explicación Completa del Proyecto TECHNet

Este documento explica paso a paso qué hace cada parte del código. Está pensado para aprender desde cero.

---

## 🗂️ Estructura del Proyecto

```
proyecto/
├── index.html          → Página principal con TODO el contenido (Inicio + Planes + Cotización)
├── planes.html         → Página solo de planes
├── cotizacion.html     → Página solo del formulario
├── styles.css          → Estilos visuales compartidos para todas las páginas
├── script.js           → Lógica y comportamiento dinámico
├── EXPLICACION.md      → Este archivo que estás leyendo
├── Inicio.html         → Archivo original (viejo, ya no se usa)
└── scrypt.js           → Archivo original con error de nombre (viejo, ya no se usa)
```

---

## 🌐 1. HTML - Las Páginas

### ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje que define la **estructura** de una página web. Es como el esqueleto de una casa: indica dónde van las paredes, puertas y ventanas.

---

### 📄 index.html - La página principal

Este es el archivo más importante. Tiene **todo el contenido en una sola página** que se ve al hacer scroll.

#### Partes del `<head>`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TECHNet - Inicio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```

| Línea                                       | Qué hace                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| `<meta charset="UTF-8">`                    | Permite usar caracteres especiales como tildes y eñes (á, é, í, ó, ú, ñ) |
| `<meta name="viewport" ...>`                | Hace que la página se vea bien en celulares y tablets                    |
| `<title>`                                   | El texto que aparece en la pestaña del navegador                         |
| `<link rel="stylesheet" href="styles.css">` | **Conecta el archivo CSS** para darle colores y diseño a la página       |

#### La barra de navegación (`<nav>`)

```html
<nav class="navbar">
  <div class="logo">
    <img src="phyton/cargando.png" alt="logo" />
  </div>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#planes">Planes</a></li>
    <li><a href="#cotizacion">Cotización</a></li>
  </ul>
</nav>
```

- `<nav>`: Etiqueta semántica que indica "esto es una barra de navegación"
- `class="navbar"`: Le pone un nombre para poder darle estilos en CSS
- `<img src="...">`: Muestra el logo de la empresa
- `<ul>` + `<li>`: Lista de enlaces
- `href="#inicio"`: Al hacer clic, **hace scroll suave** hasta la sección con `id="inicio"`. El `#` indica que es un enlace interno dentro de la misma página.

#### La sección de Inicio (Hero)

```html
<section id="inicio" class="hero">
  <div class="hero-content">
    <h1>Internet de alta velocidad para tu hogar</h1>
    <p class="hero-subtitle">Planes desde $50.000/mes</p>
    <div class="hero-cta">
      <a href="#cotizacion" class="cta-primary">Contratar Ahora</a>
      <a href="#planes" class="cta-secondary">Ver Planes</a>
    </div>
  </div>
</section>
```

- `<section>`: Divide la página en secciones lógicas
- `id="inicio"`: Identificador único. El navbar usa este ID para saber a dónde scrollear
- `class="hero"`: Clase para darle estilos (fondo degradado, texto centrado, etc.)
- `<h1>`: Título principal de la página (solo debe haber uno por página)
- `<p>`: Párrafo de texto
- `<a href="#cotizacion">`: Botón que lleva a la sección de cotización más abajo
- `class="cta-primary"` y `class="cta-secondary"`: Dos estilos de botón diferentes

#### La sección de Planes

```html
<section id="planes" class="planes">
  <div class="container">
    <h2 class="section-title">Nuestros Planes</h2>
    <div class="plans-grid" id="plans-grid-index">
      <!-- Aquí se insertan los planes con JS -->
    </div>
  </div>
</section>
```

- `id="plans-grid-index"`: Este div está **vacío** en el HTML. JavaScript lo llenará automáticamente con las 3 tarjetas de planes.
- `<!-- ... -->`: Comentario. El navegador lo ignora, es solo para humanos.

#### La sección de Cotización (Formulario)

```html
<section id="cotizacion" class="form-section">
  <div class="container">
    <h2 class="section-title">Solicitar Cotización</h2>
    <form id="form-cotizacion-index" class="form-cotizacion">
      <div class="form-group">
        <label for="nombre-index">Nombre completo</label>
        <input
          type="text"
          id="nombre-index"
          name="nombre"
          placeholder="Tu nombre completo"
          required
        />
      </div>
      ...
    </form>
  </div>
</section>
```

- `<form>`: Crea un formulario para que el usuario ingrese datos
- `id="form-cotizacion-index"`: Identificador para que JavaScript lo encuentre
- `<div class="form-group">`: Agrupa cada etiqueta + campo de entrada
- `<label>`: Texto que describe qué debe escribir el usuario
- `<input>`: Campo donde el usuario escribe
  - `type="text"`: Texto normal
  - `type="tel"`: Teléfono (en celulares muestra teclado numérico)
  - `type="email"`: Email (valida que tenga @)
  - `placeholder="..."`: Texto gris de ejemplo que desaparece al escribir
  - `required`: Obliga al usuario a llenar este campo antes de enviar
- `<select>`: Lista desplegable para elegir una opción
- `<textarea>`: Campo de texto grande para escribir varias líneas
- `<button type="submit">`: Botón que envía el formulario

#### La sección de Beneficios

```html
<section class="benefits">
  <div class="container">
    <h2 class="section-title">¿Por qué TECHNet?</h2>
    <div class="benefits-grid">
      <div class="benefit">
        <div class="benefit-icon">🚀</div>
        <h3>Velocidad Garantizada</h3>
        <p>Internet estable sin interrupciones</p>
      </div>
      ...
    </div>
  </div>
</section>
```

- Muestra 3 tarjetas con iconos (emojis) y texto explicando por qué elegir la empresa
- Cada `.benefit` es una tarjeta individual

#### El Footer (Pie de página)

```html
<footer>
  <div class="container">
    <p>&copy; 2026 TECHNet. Todos los derechos reservados.</p>
  </div>
</footer>
```

- `<footer>`: Etiqueta semántica para el pie de página
- `&copy;`: Símbolo de copyright ©

#### El Script al final

```html
<script src="script.js"></script>
```

- **Conecta el archivo JavaScript** para darle comportamiento dinámico a la página
- Se pone al final del `<body>` para que primero cargue todo el HTML y luego el JS

---

### 📄 planes.html - Página de Planes (individual)

Es igual a `index.html` pero **solo tiene la sección de planes**. Sirve para cuando alguien quiere ver solo los planes sin scrollear por toda la página.

Diferencias clave:

- El navbar tiene links a otras páginas: `href="index.html"`, `href="planes.html"`, `href="cotizacion.html"`
- El div de planes tiene `id="plans-grid"` (sin "-index")
- Los botones "Cotizar" son enlaces `<a>` que llevan a `cotizacion.html?plan=Básico`

---

### 📄 cotizacion.html - Página de Cotización (individual)

Es igual al formulario de `index.html` pero en una página aparte.

Diferencias clave:

- El formulario tiene `id="form-cotizacion"` (sin "-index")
- El select tiene `id="plan"` (sin "-index")
- Puede recibir un plan por la URL (`?plan=Básico`) y JavaScript lo preselecciona

---

## 🎨 2. CSS - Los Estilos (styles.css)

### ¿Qué es CSS?

CSS (Cascading Style Sheets) es el lenguaje que da **diseño visual** a la página: colores, tamaños, posiciones, fuentes, etc. Es como la pintura y decoración de una casa.

### Selectores básicos

```css
/* Esto afecta a TODOS los elementos de la página */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

| Propiedad                | Qué hace                                                                  |
| ------------------------ | ------------------------------------------------------------------------- |
| `margin: 0`              | Quita el espacio exterior por defecto                                     |
| `padding: 0`             | Quita el espacio interior por defecto                                     |
| `box-sizing: border-box` | Hace que el ancho/alto incluya el padding y borde (más fácil de calcular) |

### Estilos por clase

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a0a23;
  padding: 15px 30px;
  color: #fff;
}
```

- `.navbar`: El punto (`.`) significa "aplicar a elementos con class="navbar""
- `display: flex`: Activa Flexbox, un sistema para alinear elementos en fila o columna
- `justify-content: space-between`: Separa los elementos al máximo (logo a la izquierda, menú a la derecha)
- `align-items: center`: Centra verticalmente los elementos
- `background: #0a0a23`: Color de fondo azul oscuro (código hexadecimal)
- `color: #fff`: Texto blanco

### El Hero (sección de inicio)

```css
.hero {
  background: linear-gradient(to right, #00c4ff, #0077b6);
  color: #fff;
  text-align: center;
  padding: 80px 20px;
}
```

- `background: linear-gradient(...)`: Crea un degradado de color de izquierda a derecha
- `text-align: center`: Centra el texto horizontalmente
- `padding: 80px 20px`: Espacio interno de 80px arriba/abajo y 20px a los lados

### Las tarjetas de planes

```css
.plans-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.plan-card {
  background: #f4f4f4;
  border-radius: 8px;
  padding: 25px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.plan-card:hover {
  transform: translateY(-5px);
}
```

- `display: flex` + `flex-wrap: wrap`: Las tarjetas se ponen en fila y si no caben, bajan a la siguiente línea
- `gap: 25px`: Espacio entre tarjetas
- `border-radius: 8px`: Esquinas redondeadas
- `box-shadow`: Sombra debajo de la tarjeta para efecto 3D
- `transition: transform 0.2s`: Animación suave cuando cambia la posición
- `.plan-card:hover`: Estilos que se aplican cuando el mouse pasa encima
- `transform: translateY(-5px)`: Mueve la tarjeta 5 píxeles hacia arriba (efecto de levitar)

### El formulario

```css
.form-cotizacion {
  max-width: 500px;
  margin: 0 auto;
  background: #f4f4f4;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

- `max-width: 500px`: No crece más de 500 píxeles de ancho
- `margin: 0 auto`: Centra el formulario horizontalmente (0 arriba/abajo, automático a los lados)

```css
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
```

- `width: 100%`: Ocupa todo el ancho disponible del contenedor
- `border: 1px solid #ccc`: Borde gris claro de 1 píxel

---

## ⚡ 3. JavaScript - La Lógica (script.js)

### ¿Qué es JavaScript?

JavaScript es el lenguaje de **programación** de la web. Hace que las páginas sean interactivas: botones que responden, formularios que se validan, contenido que aparece dinámicamente, etc.

### Estructura general

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // Todo el código va aquí adentro
});
```

- `document`: Representa toda la página HTML
- `addEventListener("DOMContentLoaded", ...)`: Espera a que el HTML esté completamente cargado antes de ejecutar el código
- `() => { ... }`: Es una "función flecha", una forma moderna de escribir funciones en JavaScript

### Detectar en qué página estamos

```javascript
const currentPage = window.location.pathname.split("/").pop();
```

- `window.location.pathname`: Obtiene la ruta del archivo actual (ej: `/proyecto/index.html`)
- `.split("/")`: Divide el texto en partes usando `/` como separador
- `.pop()`: Toma la última parte (ej: `index.html`)

### Los datos de los planes

```javascript
const plans = [
  { name: "Básico", speed: "20 Mbps", price: "$50.000/mes" },
  { name: "Hogar", speed: "50 Mbps", price: "$80.000/mes" },
  { name: "Pro", speed: "100 Mbps", price: "$120.000/mes" },
];
```

- Esto es un **array de objetos**. Es como una tabla de datos en el código.
- Cada objeto tiene 3 propiedades: `name`, `speed` y `price`
- JavaScript usa estos datos para crear las tarjetas dinámicamente

### Crear tarjetas dinámicamente (para index.html)

```javascript
const plansGridIndex = document.getElementById("plans-grid-index");

if (plansGridIndex) {
  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = "plan-card";
    card.innerHTML = `...HTML de la tarjeta...`;
    plansGridIndex.appendChild(card);
  });
}
```

| Línea                              | Explicación                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| `document.getElementById("...")`   | Busca un elemento HTML por su ID                             |
| `if (plansGridIndex)`              | Solo ejecuta el código si el elemento existe (evita errores) |
| `plans.forEach((plan) => { ... })` | Repite el código una vez por cada plan (3 veces)             |
| `document.createElement("div")`    | Crea un nuevo `<div>` en memoria                             |
| `card.className = "plan-card"`     | Le asigna la clase para que tenga estilos CSS                |
| `card.innerHTML = "..."`           | Le pone el contenido HTML dentro                             |
| `plansGridIndex.appendChild(card)` | Lo agrega al final del div en la página                      |

### Botón "Cotizar" que scrollea al formulario

```javascript
plansGridIndex.querySelectorAll(".plan-cta").forEach((btn) => {
  btn.addEventListener("click", () => {
    const planName = btn.getAttribute("data-plan");
    if (planSelectIndex) {
      planSelectIndex.value = planName;
    }
    document
      .getElementById("cotizacion")
      .scrollIntoView({ behavior: "smooth" });
  });
});
```

- `querySelectorAll(".plan-cta")`: Encuentra TODOS los botones con esa clase
- `btn.addEventListener("click", ...)`: Escucha cuando alguien hace clic en el botón
- `btn.getAttribute("data-plan")`: Lee el valor del atributo `data-plan` del HTML
- `planSelectIndex.value = planName`: Cambia el valor del select del formulario
- `scrollIntoView({ behavior: "smooth" })`: Hace scroll suave hasta la sección de cotización

### Manejar el envío del formulario

```javascript
formCotizacionIndex.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.",
  );
  formCotizacionIndex.reset();
});
```

- `"submit"`: Evento que ocurre cuando el usuario presiona el botón de enviar
- `e.preventDefault()`: **Evita que la página se recargue** (comportamiento por defecto de los formularios)
- `alert(...)`: Muestra una ventana emergente con el mensaje
- `formCotizacionIndex.reset()`: Limpia todos los campos del formulario

### Preseleccionar plan desde la URL (para cotizacion.html)

```javascript
const urlParams = new URLSearchParams(window.location.search);
const planFromUrl = urlParams.get("plan");
if (planFromUrl && planSelect) {
  planSelect.value = planFromUrl;
}
```

- `window.location.search`: Obtiene la parte de la URL después del `?` (ej: `?plan=Básico`)
- `new URLSearchParams(...)`: Crea un objeto para leer los parámetros de la URL
- `.get("plan")`: Obtiene el valor del parámetro `plan`
- `planSelect.value = planFromUrl`: Selecciona automáticamente esa opción en el `<select>`

---

## 🔗 4. Cómo se conectan HTML, CSS y JS

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   HTML      │────→│    CSS      │     │     JS      │
│ (Estructura)│     │  (Diseño)   │←────│(Comportam.) │
└─────────────┘     └─────────────┘     └─────────────┘
       ↑                                      ↓
       └──────────────────────────────────────┘
              JS modifica el HTML en tiempo real
```

1. El navegador lee el **HTML** y construye la estructura de la página
2. Encuentra `<link rel="stylesheet" href="styles.css">` y aplica los **estilos CSS**
3. Encuentra `<script src="script.js">` y ejecuta el **JavaScript**
4. El JavaScript puede crear, modificar o eliminar elementos HTML dinámicamente

---

## 🎯 5. Flujo de uso típico

### Escenario 1: Usuario en index.html

1. Entra a `index.html` y ve el hero con el título
2. Scrollea hacia abajo y ve los 3 planes generados por JavaScript
3. Hace clic en "Cotizar Hogar"
4. La página hace scroll suave hasta el formulario
5. El campo "Plan de interés" ya tiene seleccionado "Hogar"
6. Llena sus datos y envía
7. Aparece un mensaje de éxito y el formulario se limpia

### Escenario 2: Usuario en planes.html

1. Entra a `planes.html` y ve solo los planes
2. Hace clic en "Cotizar Pro"
3. El navegador va a `cotizacion.html?plan=Pro`
4. En la página de cotización, el plan "Pro" ya está seleccionado

---

## 🐛 6. El error que se corrigió

En el archivo original `Inicio.html`, la última línea era:

```html
<script src="script.js"></script>
```

Pero el archivo de JavaScript se llamaba **`scrypt.js`** (con "y" en lugar de "i"). Por eso el navegador nunca encontraba el archivo y los planes no aparecían.

**Solución:** Se creó un archivo nuevo llamado correctamente `script.js`.

---

## 💡 Consejos para seguir aprendiendo

1. **Abre la consola del navegador** (F12 → Consola) para ver errores de JavaScript
2. **Inspecciona elementos** (clic derecho → Inspeccionar) para ver el HTML y CSS en tiempo real
3. **Modifica valores en el inspector** para experimentar sin romper el código
4. **Lee documentación en MDN Web Docs** (developer.mozilla.org) - es la mejor referencia
5. **Prueba cambiar colores en CSS** para ver cómo afecta el diseño

---

¡Eso es todo! Ahora entiendes qué hace cada parte del proyecto. 🚀
