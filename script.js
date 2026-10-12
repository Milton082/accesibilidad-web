const form = document.querySelector("#appointment-form");
const statusMessage = document.querySelector("#form-status");
const dateInput = document.querySelector("#appointment-date");

const fields = [
  {
    input: document.querySelector("#full-name"),
    message: "Escribe tu nombre completo.",
  },
  {
    input: document.querySelector("#email"),
    message: "Escribe un correo electrónico válido.",
  },
  {
    input: dateInput,
    message: "Selecciona una fecha válida que no sea anterior a hoy.",
  },
  {
    input: document.querySelector("#reason"),
    message: "Selecciona el motivo de la consulta.",
  },
];

// El límite se calcula localmente para que el control de fecha no ofrezca días pasados.
function todayAsInputValue() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function setDateLimit() {
  dateInput.min = todayAsInputValue();
}

function showFieldError(input, message) {
  const group = input.closest(".field-group");
  const error = document.querySelector(`#${input.id}-error`);
  group.classList.add("has-error");
  input.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function clearFieldError(input) {
  const group = input.closest(".field-group");
  const error = document.querySelector(`#${input.id}-error`);
  group.classList.remove("has-error");
  input.removeAttribute("aria-invalid");
  error.textContent = "";
}

function validateField(field) {
  const { input, message } = field;
  const dateIsPast =
    input === dateInput && input.value && input.value < todayAsInputValue();

  // Aprovecha las reglas nativas required y type=email, y añade la regla de fecha pasada.
  if (!input.validity.valid || dateIsPast) {
    showFieldError(input, message);
    return false;
  }

  clearFieldError(input);
  return true;
}

function showStatus(message, type, moveFocus) {
  statusMessage.textContent = message;
  statusMessage.className = `form-status is-visible is-${type}`;

  // aria-live anuncia el cambio; en errores se lleva el foco al resumen sin recargar la página.
  if (moveFocus) statusMessage.focus();
}

setDateLimit();

fields.forEach((field) => {
  field.input.addEventListener("input", () => validateField(field));
  field.input.addEventListener("change", () => validateField(field));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  setDateLimit();
  const allValid = fields.map(validateField).every(Boolean);

  if (!allValid) {
    showStatus(
      "Revisa los campos marcados e inténtalo nuevamente.",
      "error",
      true,
    );
    return;
  }

  showStatus("¡Reserva registrada con exito!", "success", true);
  form.reset();
  setDateLimit();
});
