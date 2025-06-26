// Validación de formulario de contacto
document.getElementById('contactoForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    this.reset();
  });
  
  // Feedback del test de seguridad
  $(document).ready(function () {
    $('.test-opcion').on('click', function () {
      if ($(this).hasClass('correcta')) {
        alert("¡Correcto! Esa es una buena práctica.");
      } else {
        alert("Incorrecto. Intenta con otra opción.");
      }
    });
  });
  