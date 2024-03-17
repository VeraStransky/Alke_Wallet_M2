$(document).ready(function() {

    // Agregar nuevo contacto
    $("#agregar-contacto").click(function() {
      var nombreContacto = prompt("Ingrese el nombre del nuevo contacto:");
      if (nombreContacto !== null && nombreContacto !== "") {
        var nuevoContacto = '<li class="list-group-item"><div class="contact-info"><span class="contact-name">' + nombreContacto + '</span><span class="contact-details">CBU: 123456789, Alias: ' + nombreContacto + ', Banco: Nuevo Banco</span></div></li>';
        $("#contactList").append(nuevoContacto);
      }
    });
  
    // Enviar dinero
    $("#enviar-dinero").click(function() {
      var destinatario = $("#searchContact").val();
      var monto = $("#monto").val();
  
      if (destinatario === "") {
        alert("Por favor, ingrese el nombre del destinatario.");
        return;
      }
  
      if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
      }
  
      alert("Enviando $" + monto + " a " + destinatario + "...");
      // Aquí se puede agregar la lógica real para enviar dinero
      // Por ejemplo, enviar una solicitud AJAX al servidor para realizar la transacción
    });
  
  });
  