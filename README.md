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

Una etiqueta se vincula con el campo mediante `for` e `id`, permitiendo que el lector de pantalla identifique el propósito del control:

```html
<label for="email">Correo electrónico</label>
<input id="email" name="email" type="email" required />
```

El foco visible facilita saber qué elemento se está usando al navegar con Tab:

```css
input:focus-visible,
button:focus-visible {
  outline: 3px solid #f29d38;
  outline-offset: 3px;
}
```

Los cambios de validación y confirmación se comunican a tecnologías de asistencia:

```html
<div id="form-status" aria-live="polite" aria-atomic="true"></div>
```

---

## Uso

Abre `index.html` en un navegador o visita la página publicada con GitHub Pages: https://milton082.github.io/accesibilidad-web/ .

Más información: [WCAG 2.2 — W3C](https://www.w3.org/TR/wcag/).
