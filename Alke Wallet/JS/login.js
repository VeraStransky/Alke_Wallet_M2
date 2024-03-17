$(document).ready(function() {

    // Validar el formulario de inicio de sesión
    $("#login-form").submit(function(event) {
  
      // Prevenir el envío del formulario por defecto
      event.preventDefault();
  
      // Obtener los valores de los campos
      var email = $("#email").val().trim();
      var password = $("#password").val().trim();
  
      // Validar si los campos están vacíos
      if (email === "" || password === "") {
        $(".error.message").text("Todos los campos son obligatorios.").show();
        return;
      }
  
      // Validar el correo electrónico
      if (!/\S+@\S+\.\S+/.test(email)) {
        $(".error-message").text("El correo ectrónico no es válido.").show();
        return;
      }
  
      // Validar el Password
      if (password.length < 8) {
        $(".error-message").text("El Password debe tener al menos 8 caracteres.").show();
        return;
      }
  
      // Enviar los datos al servidor para la validación
      // Aquí deberías realizar la solicitud AJAX al servidor
  
    });
  
  });
