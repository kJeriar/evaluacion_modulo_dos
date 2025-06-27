// Validación de formulario de contacto
if (document.getElementById('contactoForm')) {
    document.getElementById('contactoForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;
      const cita = document.querySelector('input[name="agendar"]:checked').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
  
      // Alerta rápida
      alert("Gracias por tu mensaje. Ahora verás el resumen de tu contacto.");
  
      // Construcción del resumen
      let resumenHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `;
  
      if (cita === 'si') {
        resumenHTML += `
          <p><strong>Charla agendada:</strong> Sí</p>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Hora:</strong> ${hora}</p>
        `;
      } else {
        resumenHTML += `<p><strong>Charla agendada:</strong> No</p>`;
      }
  
      // Mostrar en el modal
      $('#modalContenido').html(resumenHTML);
      const modal = new bootstrap.Modal(document.getElementById('modalResumen'));
      modal.show();
  
      // Reset
      this.reset();
      $('#datosCita').hide();
    });
  }
  
  
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


  $(document).ready(function () {
    $('#btnConsejo1').click(function () {
      bootbox.alert({
        title: "Consejo 1: Verifica la URL",
        message: `
          <p>Asegúrate de que el sitio comience con <code>https://</code> y que el dominio sea el correcto.</p>
          <p>Por ejemplo, si vas a comprar en <strong>jumbo.cl</strong>, asegúrate que la dirección web coincida exactamente con el sitio oficial. No confíes en direcciones como <strong>jumbe.com</strong> o <strong>jumbochile.xyz</strong>.</p>
          <p>Estás ingresando datos sensibles, como tus medios de pago. Sé cuidadoso para evitar malos ratos.</p>
        `
      });
    });

    $('#btnConsejo2').click(function () {
      bootbox.alert({
        title: "Consejo 2: Errores Ortográficos",
        message: "Las páginas clonadas suelen tener errores de escritura o traducciones mal hechas. Si notas algo extraño, es una señal de alerta."
      });
    });

    $('#btnConsejo3').click(function () {
      bootbox.alert({
        title: "Consejo 3: Diseño Sospechoso",
        message: "Si el diseño luce raro o mal hecho, con colores distintos o elementos rotos, compáralo con el sitio oficial. Puede tratarse de una copia."
      });
    });

    $('#btnConsejo4').click(function () {
      bootbox.alert({
        title: "Consejo 4: Enlaces Dudosos",
        message: "No accedas a sitios desde correos o mensajes extraños. Es mejor escribir manualmente la dirección en tu navegador."
      });
    });

    $('#btnConsejo5').click(function () {
      bootbox.alert({
        title: "Consejo 5: Certificado SSL",
        message: "Haz clic en el candado al lado de la URL para revisar si el sitio tiene un certificado válido. Si el candado está ausente o es rojo, sal del sitio."
      });
    });
  });

  // Mostrar u ocultar campos de cita
$('input[name="agendar"]').change(function () {
    if ($('#agendarSi').is(':checked')) {
      $('#datosCita').slideDown();
      $('#fecha, #hora').attr('required', true);
    } else {
      $('#datosCita').slideUp();
      $('#fecha, #hora').val('').removeAttr('required');
    }
  });

  




  


  