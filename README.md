# Reserva de cita médica accesible

Página de demostración para reservar una cita médica, desarrollada con HTML, CSS y JavaScript puro. La reserva no envía ni almacena datos personales.

---

## ¿Qué es la accesibilidad web?

La accesibilidad web busca que una página pueda ser utilizada por todas las personas, incluidas quienes navegan con teclado, lectores de pantalla, baja visión o diferentes dispositivos.

---

## Estándar aplicado

El referente principal es **WCAG 2.2** del W3C. Sus cuatro principios son:

- **Perceptible:** la información debe poder percibirse, por ejemplo, con texto alternativo en imágenes.
- **Operable:** todos los controles deben funcionar con teclado.
- **Comprensible:** las instrucciones y los errores deben ser claros.
- **Robusto:** el código debe funcionar con navegadores y tecnologías de asistencia.

La página incorpora etiquetas visibles, foco distinguible, contraste adecuado, controles HTML nativos, validación y mensajes de estado accesibles.

---

## Ejemplos importantes

### Botón nativo

Un `div` puede parecer un botón, pero no ofrece la función ni el acceso por teclado de forma automática:

```html
<!-- Incorrecto: es solo un contenedor visual. -->
<div class="submit-button">Confirmar reserva</div>

<!-- Correcto: funciona con teclado y lector de pantalla. -->
<button class="submit-button" type="submit">Confirmar reserva</button>
```

### Etiqueta y campo de formulario

La etiqueta se vincula con el campo mediante `for` e `id`, para comunicar qué dato se debe ingresar:

```html
<label for="email">Correo electrónico</label>
<input id="email" name="email" type="email" required />
```

### Texto alternativo en una imagen

El atributo `alt` describe la imagen para las personas que usan un lector de pantalla:

```html
<img
  class="health-professional"
  src="https://images.unsplash.com/..."
  alt="Profesional de salud con bata blanca en un consultorio"
/>
```

### Foco visible y navegación con teclado

Al navegar con Tab, el foco visible permite identificar el control seleccionado:

```css
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 3px solid #f29d38;
  outline-offset: 3px;
}
```

### Mensajes de estado y validación

Los mensajes nuevos se anuncian a tecnologías de asistencia cuando hay un error o una confirmación:

```html
<div id="form-status" aria-live="polite" aria-atomic="true"></div>
```

También se relaciona cada campo con sus instrucciones y errores:

```html
<input
  id="appointment-date"
  type="date"
  required
  aria-describedby="appointment-date-help appointment-date-error"
/>
```

La página usa validación nativa y JavaScript para impedir fechas pasadas y explicar el error con texto, no solamente con color. Estas prácticas deben comprobarse con teclado, lectores de pantalla y, cuando sea posible, con personas usuarias reales.

---

## Uso

Abre `index.html` en un navegador o visita la página publicada con GitHub Pages: https://milton082.github.io/accesibilidad-web/ .

Más información: [WCAG 2.2 — W3C](https://www.w3.org/TR/wcag/).
